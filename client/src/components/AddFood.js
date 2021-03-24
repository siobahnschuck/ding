import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import IngredientList from '../components/IngredientList'
import Fridge from '../components/Fridge'
import { NavLink } from 'react-router-dom'
import { BASE_URL, API_KEY } from '../globals'
import axios from 'axios'
import '../css/AddFood.css'

const AddFood = ({ state, dispatch, history }) => {
  console.log('state on add fodd', state.query)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // useEffect(() => {
  //   getIngredients()
  // }, [])
  const getIngredients = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/food/find/${state.query}`
        // `${BASE_URL}?query=${state.query}&apiKey=${API_KEY}&number=5`
      )
      // console.log('getingredientsrespond', res)
      dispatch({ type: 'get_ingredients', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }
  const getRecipe = async (ingredients) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/food/recipe/${state.fridge.name}`
        // `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=5`
        // `https://api.spoonacular.com/recipes/findByIngredients`,
        // {
        //   params: {
        //     ingredients,
        //     number: 5,
        //     apiKey: process.env.REACT_APP_RECIPE_API_KEY
        //   }
        // }
      )
      console.log(res)
      // dispatch({ type: 'get_recipes', payload: res.data.results })
    } catch (err) {
      console.log(err)
    }
  }

  const ingredientList = state.ingredients.length
    ? state.ingredients.map((ingredient, index) => {
        return (
          <IngredientList
            key={'recipe' + index}
            // name={ingredient.name}
            // img={ingredient.image}
            ingredient={ingredient}
            history={history}
            dispatch={dispatch}
            state={state}
          />
        )
      })
    : null
  // console.log(ingredientList)
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        GENERATE RECIPE
      </Button>
      <Modal show={show} dialogClassName="addFood">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body className="body">
          <div>
            <Fridge
              fridge={state.fridge}
              removeIngredient={state.removeIngredient}
            />
          </div>
          <div id="addFood">
            AddFood
            <br></br>
            <input
              value={state.query}
              onChange={(e) =>
                dispatch({ type: 'search', payload: e.target.value })
              }
            ></input>
            <button onClick={() => getIngredients()}>search</button>
            {ingredientList}
            <br></br>
            <button onClick={() => getRecipe()}>Generate Recipes</button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddFood
