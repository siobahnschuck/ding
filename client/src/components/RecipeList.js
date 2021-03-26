import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Modal, Button } from 'react-bootstrap'
import parse from 'html-react-parser'

const RecipeList = (props) => {
  const [recipeDetailsOpen, toggleRecipeDetails] = useState(false)
  const showDetails = async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/recipe/details/${props.recipe.id}`
      )
      console.log(res)
      toggleRecipeDetails(true)
      props.dispatch({ type: 'show_recipe_details', payload: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div id="recipeCard">
      <img alt="item" src={props.recipe.image} onClick={() => showDetails()} />
      <span>
        <h3>{props.recipe ? props.recipe.title : null}</h3>
      </span>
      <Modal show={recipeDetailsOpen} dialogClassName="details">
        <div className="header">
          <Button id="closeBtn" onClick={() => toggleRecipeDetails(false)}>
            X
          </Button>
        </div>
        <Modal.Body>
          {props.state.recipeDetails ? (
            <div>
              <img alt="pick" src={props.state.recipeDetails.image} />
              <h2>{props.state.recipeDetails.title}</h2>
              <p>
                {props.state.recipeDetails.cuisines} | Ready in{' '}
                {props.state.recipeDetails.readyInMinutes} minutes |
                {props.state.recipeDetails.calories} Calories
              </p>
              <p>Instructions:</p>
              <p className="recipe-details-instruc">
                {parse(props.state.recipeDetails.instructions)}
              </p>
            </div>
          ) : (
            <h1>loading</h1>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default RecipeList
