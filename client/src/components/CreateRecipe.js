import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import IngredientList from '../components/IngredientList'
import axios from 'axios'
import '../css/Setting.css'
import { NavLink } from 'react-router-dom'
import MyRecipePage from '../pages/MyRecipePage'
import Fridge from '../components/Fridge'
import Switch from 'react-switch'
import { Divider } from 'semantic-ui-react'

const CreateRecipe = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // const createRecipe=()={
  //   dispatch({type:'my_recipes',payload:state.newRecipe})
  // }
  // useEffect(() => {
  //   getMyIngredients()
  // }, [])
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

  const ingredientList = props.state.ingredients.length
    ? props.state.ingredients.map((ingredient, index) => {
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
  return (
    <div>
      {/* <NavLink to="/myrecipepage">Create Recipe</NavLink> */}
      <Button id="dash-button" onClick={handleShow}>
        CREATE RECIPE
      </Button>
      <Modal show={show} dialogClassName="addFood">
        <Modal.Body>
          <form onSubmit={props.submitRecipe}>
            <p>Image:</p>
            <input
              name="image"
              value={props.newRecipe.image}
              onChange={props.handleChange}
            />
            <p>Title:</p>
            <input
              name="name"
              value={props.newRecipe.name}
              onChange={props.handleChange}
            />
            <p>Cuisine:</p>
            <input
              name="cuisineType"
              value={props.newRecipe.cuisineType}
              onChange={props.handleChange}
            />
            <p>Instructions:</p>
            <input
              name="instructions"
              value={props.newRecipe.instructions}
              onChange={props.handleChange}
            />
            <p>Duration:</p>
            <input
              name="duration"
              value={props.newRecipe.duration}
              onChange={props.handleChange}
            />
            <p>Calories:</p>
            <input
              name="calories"
              value={props.newRecipe.calories}
              onChange={props.handleChange}
            />
            <p>Vegan:</p>
            <input
              type="checkbox"
              value={props.isVegan}
              onClick={props.handleVeganChange}
            />
            <p>DiaryFree:</p>
            <input
              type="checkbox"
              value={props.isDiaryFree}
              onClick={props.handleDiaryChange}
            />
            <p>No Nuts:</p>
            <input
              type="checkbox"
              value={props.hasNuts}
              onClick={props.handleNutsChange}
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
            <button type="submit">Create</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default CreateRecipe
