import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import { BASE_URL } from '../globals'
import Pantry from './Pantry'

const DetailsRecipeCreate = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getPantryIngredients = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/food/find/${props.state.query}`)
      props.dispatch({ type: 'get_recipeIngredients', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  const recipeId = props.recipeId
  const [newRecipe, setNewRecipe] = useState({
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
    event.preventDefault()
    try {
      createRecipe(recipeId, newRecipe)
    } catch (error) {
      console.log(error)
    }
  }

  const addIngredient = async (ingredientId, name) => {
    const test = {
      recipeId: props.recipeId,
      foodItemId: ingredientId,
      name: name
    }
    try {
      await axios.post(`${BASE_URL}/ingredients/`, test)
    } catch (error) {
      throw error
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

  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        Next
      </Button>
      <Modal show={show} dialogClassName="restaurants">
        <Button className="closeBtn" onClick={handleClose}>
          X
        </Button>
        <Modal.Body className="recipeDetails">
          <h2>{props.recipeTitle}</h2>
          <form onSubmit={handleSubmit}>
            <div className="create-section">
              <div>
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
                <div className="setting-restrictions">
                  <p>Vegan</p>
                  <input
                    className="setting-check"
                    type="checkbox"
                    value={newRecipe.vegan}
                    onClick={handleVeganChange}
                  />
                  <p>Dairy Free</p>
                  <input
                    className="setting-check"
                    type="checkbox"
                    value={newRecipe.dairyFree}
                    onClick={handleDairyChange}
                  />
                  <p>Vegetarian</p>
                  <input
                    className="setting-check"
                    type="checkbox"
                    value={newRecipe.vegetarian}
                    onClick={handleVegetarianChange}
                  />
                </div>
              </div>
              <div id="addFood">
                <p>Ingredients:</p>

                <input
                  value={props.state.query}
                  onChange={(e) =>
                    props.dispatch({ type: 'search', payload: e.target.value })
                  }
                ></input>
                <button id="searchBtn" onClick={() => getPantryIngredients()}>
                  search
                </button>
                {pantryList}
                <br></br>
                <div>
                  {props.state.pantry.map((pantryItem, idx) => (
                    <div key={idx}>
                      <p>{pantryItem.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <button id="generateBtn" type="submit" onClick={handleClose}>
              Create
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default DetailsRecipeCreate
