import React, { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import { Modal, Button } from 'react-bootstrap'

const RecipeList = (props) => {
  console.log(props.state.recipeDetails)
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
    <div className="recipeList">
      <img alt="item" src={props.recipe.image} onClick={() => showDetails()} />
      <span>
        <p>{props.recipe ? props.recipe.title : null}</p>
        <p>missing ingredients: {props.recipe.missedIngredientCount}</p>
        <p>likes:{props.recipe.likes}</p>
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
              <img src={props.state.recipeDetails.image} />
              <h2>{props.state.recipeDetails.title}</h2>
              <p>cusine: {props.state.recipeDetails.cuisines}</p>
              <p>dairyFree:{props.state.recipeDetails.dairyFree}</p>
              <p>vegan:{props.state.recipeDetails.vegan}</p>
              <p>vegetarian:{props.state.recipeDetails.vegetarian}</p>
              <p>Ready in: {props.state.recipeDetails.readyInMinutes} mins</p>
              instructions:{props.state.recipeDetails.instructions}
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
