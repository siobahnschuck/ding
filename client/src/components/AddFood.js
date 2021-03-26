import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import IngredientList from '../components/IngredientList'
import Fridge from '../components/Fridge'
import RecipeList from '../components/RecipeList'
import { BASE_URL } from '../globals'
import ScrollIntoView from 'react-scroll-into-view'
import axios from 'axios'
import '../css/AddFood.css'

const AddFood = ({ state, dispatch, history }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const getIngredients = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/food/find/${state.query}`)
      dispatch({ type: 'get_ingredients', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  const getRecipe = async () => {
    let queryString = state.fridge.map((string) => string.name).join(',')
    try {
      const res = await axios.get(
        `${BASE_URL}/recipe/search?cuisine=${state.cuisines}&includeIngredients=${queryString}`
      )
      console.log(res.data)
      dispatch({ type: 'get_recipes', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  const ingredientList = state.ingredients.map((ingredient, index) => {
    return (
      <IngredientList
        key={'recipe' + index}
        ingredient={ingredient}
        history={history}
        dispatch={dispatch}
        state={state}
      />
    )
  })

  const recipeList = state.recipes.length
    ? state.recipes.map((recipe, index) => {
        return (
          <RecipeList
            key={'recipe' + index}
            recipe={recipe}
            history={history}
            dispatch={dispatch}
            state={state}
            getRecipe={getRecipe}
          />
        )
      })
    : null
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        GENERATE RECIPE
      </Button>
      <Modal show={show} dialogClassName="addFood">
        <Modal.Body>
          <div className="body">
            <div id="fridge">
              <Fridge
                fridge={state.fridge}
                dispatch={dispatch}
                removeIngredient={state.removeIngredient}
              />
            </div>
            <div className="add-section">
              <div id="addFood">
                <div className="add-header">
                  <div className="generateBtn">
                    <ScrollIntoView selector=".recipeList">
                      <button id="generateBtn" onClick={() => getRecipe()}>
                        Generate Recipes
                      </button>
                    </ScrollIntoView>
                  </div>
                  <Button className="closeBtn" onClick={handleClose}>
                    X
                  </Button>
                </div>
                <br></br>
                <input
                  className="searchField"
                  value={state.query}
                  placeholder="Add ingredient to you fridge"
                  onChange={(e) =>
                    dispatch({ type: 'search', payload: e.target.value })
                  }
                ></input>
                <button id="searchBtn" onClick={() => getIngredients()}>
                  search
                </button>
                {ingredientList}
                <br></br>
              </div>
            </div>
          </div>
          <div className="recipeList">{recipeList}</div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AddFood
