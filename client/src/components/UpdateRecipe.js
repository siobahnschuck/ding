import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/App.css'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Pantry from './Pantry'

const Edit = (props, state, dispatch, recipeTitle) => {
  const recipe = props.recipe
  const recipeId = recipe.id

  const [update, setUpdate] = useState({
    title: recipe.title,
    cuisines: recipe.cuisines,
    instructions: recipe.instructions,
    readyInMinutes: recipe.readyInMinutes,
    calories: recipe.calories,
    vegan: recipe.vegan,
    dairyFree: recipe.dairyFree,
    vegetarian: recipe.vegetarian
  })

  const [ingredients, setIngredients] = useState([])

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const editItem = async (recipeId, update) => {
    try {
      const res = await axios.put(`${BASE_URL}/recipe/${recipeId}`, update)
      return res.data
    } catch (error) {
      throw error
    }
  }

  const getIngredientTable = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/ingredients/getAll/${recipeId}`)
      setIngredients(res.data)
    } catch (error) {
      throw error
    }
  }
  const deleteFoodItem = async (id) => {
    setIngredients(ingredients.filter((item) => item.id !== id))
    try {
      const res = await axios.delete(`${BASE_URL}/ingredients/${id}`)
    } catch (error) {
      throw error
    }
  }

  const handleChange = ({ target }) => {
    setUpdate({ ...update, [target.name]: target.value })
  }

  const handleVeganChange = () => {
    if (update.vegan === true) {
      setUpdate({ ...update, vegan: false })
    } else {
      setUpdate({ ...update, vegan: true })
    }
  }
  const handleDairyChange = () => {
    if (update.dairyFree === true) {
      setUpdate({ ...update, dairyFree: false })
    } else {
      setUpdate({ ...update, dairyFree: true })
    }
  }
  const handleVegetarianChange = () => {
    if (update.vegetarian === true) {
      setUpdate({ ...update, vegetarian: false })
    } else {
      setUpdate({ ...update, vegetarian: true })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      editItem(recipeId, update)
    } catch (error) {
      console.log(error)
    }
  }

  const addIngredient = async (ingredientId, name) => {
    const test = { recipeId: recipeId, foodItemId: ingredientId, name: name }
    try {
      const res = await axios.post(`${BASE_URL}/ingredients/`, test)
    } catch (error) {
      throw error
    }
  }

    const getPantryIngredients = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/food/find/${props.state.query}`)
      props.dispatch({ type: 'get_recipeIngredients', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

   const pantryList = props.recipeIngredients.length
    ? props.recipeIngredients.map((ingredient, index) => {
        return (
          <div onClick={() => addIngredient(ingredient.id, ingredient.name)}>
            <Pantry
              key={'recipe' + index}
              ingredient={ingredient}
              history={props.history}
              dispatch={props.dispatch}
              state={props.state}
            />
          </div>
        )
      })
    : null

  useEffect(() => {
    getIngredientTable()
  }, [update])

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="myRecipes">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>Update Title</Modal.Title>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <p>Image:</p>
            <input
              name="image"
              placeholder={recipe.image}
              value={update.image}
              onChange={handleChange}
            />
            <p>Title:</p>
            <input
              name="title"
              placeholder={recipe.title}
              value={update.title}
              onChange={handleChange}
            />
            <p>Cuisines:</p>
            <input
              name="cuisines"
              placeholder={recipe.cuisines}
              value={update.cuisines}
              onChange={handleChange}
            />
            <p>Instructions:</p>
            <input
              name="instructions"
              placeholder={recipe.instructions}
              value={update.instructions}
              onChange={handleChange}
            />
            <p>Ready in:</p>
            <input
              name="readyInMinutes"
              placeholder={recipe.readyInMinutes}
              value={update.readyInMinutes}
              onChange={handleChange}
            />
            <p>Calories:</p>
            <input
              name="calories"
              placeholder={recipe.calories}
              value={update.calories}
              onChange={handleChange}
            />
            <p>Vegan</p>
            <div className={update.vegan ? 'check' : ''}>
              <input
                type="checkbox"
                value={update.vegan}
                onClick={handleVeganChange}
              />
            </div>
            <p>DairyFree</p>
            <div className={update.dairyFree ? 'check' : ''}>
              <input
                type="checkbox"
                value={update.dairyFree}
                onClick={handleDairyChange}
              />
            </div>
            <p>Vegetarian:</p>
            <div className={update.vegetarian ? 'check' : ''}>
              <input
                type="checkbox"
                value={update.vegetarian}
                onClick={handleVegetarianChange}
              />
              <br />
            </div>
          <p>Ingredients:</p>
          {ingredients.map((ingredient, index) => (
            <div key={index}>
              <button onClick={() => deleteFoodItem(ingredient.id)}>
                X
                <input
                  name="recipe_ingredients"
                  placeholder={ingredient.name}
                  value={ingredient.name}
                ></input>
              </button>
            </div>
          ))}
          <br />
          <br />
          <input
            value={props.state.query}
            onChange={(e) =>
              props.dispatch({ type: 'search', payload: e.target.value })
            }
          ></input>
              <button onClick={() => getPantryIngredients()}>Add Ingredient</button>
              {pantryList}
              <br></br>
              <div>
                {props.state.pantry.map((pantryItem) => (
                  <div>
                    <p>{pantryItem.name}</p>
                  </div>
                ))}
              </div>

          <br />
          <br />
          <button type="submit" onClick={handleClose}>Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Edit
