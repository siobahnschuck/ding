import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Fridge from '../components/Fridge'
import IngredientList from '../components/IngredientList'
import axios from 'axios'
import { BASE_URL } from '../globals'

const DetailsRecipeCreate = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  useEffect(() => {
    getMyIngredients()
  }, [])
  const getMyIngredients = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/food/find/${props.state.query}`
        // `${BASE_URL}?query=${state.query}&apiKey=${API_KEY}&number=5`
      )
      props.dispatch({ type: 'get_ingredients', payload: res.data })
      console.log('hihihihi', props.state)
    } catch (err) {
      console.log(err)
    }
  }
  const recipeTitle = props.recipeTitle
  const recipeId = props.recipeId
  console.log(props.recipeTitle)
  const [newRecipe, setNewRecipe] = useState({
    title: recipeTitle,
    cuisines: '',
    instructions: '',
    readyInMinutes: 0,
    calories: 0,
    vegan: false,
    dairyFree: false,
    vegetarian: false
  })

  const createRecipe = async (recipeId, newRecipe) => {
    try {
      const res = await axios.put(`${BASE_URL}/recipe/${recipeId}`, newRecipe)
      return res.data
    } catch (error) {
      throw error
    }
  }

  const handleChange = ({ target }) => {
    setNewRecipe({ ...newRecipe, [target.name]: target.value })
  }

  const handleVeganChange = () => {
    if (newRecipe.vegan === true) {
      setNewRecipe({ ...newRecipe, vegan: false })
    } else {
      setNewRecipe({ ...newRecipe, vegan: true })
    }
  }
  const handleDairyChange = () => {
    if (newRecipe.dairyFree === true) {
      setNewRecipe({ ...newRecipe, dairyFree: false })
    } else {
      setNewRecipe({ ...newRecipe, dairyFree: true })
    }
  }
  const handleVegetarianChange = () => {
    if (newRecipe.vegetarian === true) {
      setNewRecipe({ ...newRecipe, vegetarian: false })
    } else {
      setNewRecipe({ ...newRecipe, vegetarian: true })
    }
  }

  const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      createRecipe(recipeId, newRecipe)
    } catch (error) {
      console.log(error)
    }
  }

  const ingredientList = props.ingredients.length
    ? props.ingredients.map((ingredient, index) => {
        return (
          <IngredientList
            key={'recipe' + index}
            // name={ingredient.name}
            // img={ingredient.image}
            ingredient={ingredient}
            history={props.history}
            dispatch={props.dispatch}
            state={props.state}
          />
        )
      })
    : null
  console.log(props.recipeId)
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        Next
      </Button>
      <Modal show={show} dialogClassName="addFood">
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <p>Image:</p>
            <input
              name="image"
              value={newRecipe.image}
              onChange={handleChange}
            />
            <p>Cuisine:</p>
            <input
              name="cuisines"
              value={newRecipe.cuisines}
              onChange={handleChange}
            />
            <p>Instructions:</p>
            <input
              name="instructions"
              value={newRecipe.instructions}
              onChange={handleChange}
            />
            <p>Duration:</p>
            <input
              name="readyInMinutes"
              value={newRecipe.readyInMinutes}
              onChange={handleChange}
            />
            <p>Calories:</p>
            <input
              name="calories"
              value={newRecipe.calories}
              onChange={handleChange}
            />
            <p>Vegan:</p>
            <input
              type="checkbox"
              value={newRecipe.vegan}
              onClick={handleVeganChange}
            />
            <p>DairyFree:</p>
            <input
              type="checkbox"
              value={newRecipe.dairyFree}
              onClick={handleDairyChange}
            />
            <p>No Nuts:</p>
            <input
              type="checkbox"
              value={newRecipe.vegetarian}
              onClick={handleVegetarianChange}
            />
            <br></br>
            <br></br>
            <div id="addFood">
              Ingredients:
              <br></br>
              <input
                value={props.state.query}
                onChange={(e) =>
                  props.dispatch({ type: 'search', payload: e.target.value })
                }
              ></input>
              <button onClick={() => getMyIngredients()}>search</button>
              {ingredientList}
              <br></br>
              {/* <button onClick={() => getRecipe()}>Generate Recipes</button> */}
            </div>
            <div>
              <Fridge
                fridge={props.state.fridge}
                removeIngredient={props.removeIngredient}
              />
            </div>
            <button type="submit" onClick={handleClose}>
              Create
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DetailsRecipeCreate
