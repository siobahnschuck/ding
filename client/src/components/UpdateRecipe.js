import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/App.css'
import axios from 'axios'
import { BASE_URL } from '../globals'

const Edit = (props) => {
  console.log(props.recipeIngredient)
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

  // const [updateFoodItem, setUpdateFoodItem] = useState({
  //   recipe_ingredient: ingredient.name
  // })

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

  const foodItem = async () => {
    try {
      const res = await axios.put()
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
    // event.preventDefault();
    try {
      editItem(recipeId, update)
    } catch (error) {
      console.log(error)
    }
  }

  const addIngredient = async (ingredient) => {
    const test = { recipeId: props.recipeId, foodItemId: ingredient }
    try {
      const res = await axios.post(`${BASE_URL}/ingredients/`, test)
    } catch (error) {
      throw error
    }
  }

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
              <p>Ingredients:</p>

              {props.recipeIngredient.map(
                (ingredient, index) => (
                  console.log(props.recipeIngredient),
                  (console.log(ingredient),
                  (
                    <div key={index}>
                      <input
                        name="recipe_ingredients"
                        placeholder={ingredient.name}
                        value={ingredient.name}
                        onChange={handleChange}
                      ></input>
                    </div>
                  ))
                )
              )}
              <br />
              <br />
              <input
                value={props.state.query}
                onChange={(e) =>
                  props.dispatch({ type: 'search', payload: e.target.value })
                }
              ></input>
            </div>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Edit
