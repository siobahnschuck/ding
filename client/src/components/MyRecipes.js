import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Card, Image } from 'semantic-ui-react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../css/Recipe.css'
import UpdateRecipe from './UpdateRecipe'

const MyRecipes = (props, state, dispatch, recipeTitle) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    props.checkSession()
  }, [])

  const deleteItem = async (recipeId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/recipe/${recipeId}`)
      let filteredRecipes = [...props.myRecipes].filter(
        (recipe) => recipe.id !== parseInt(res.data.payload)
      )
      props.setMyRecipes(filteredRecipes)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        MY RECIPES
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="myRecipes">
        <Button className="closeBtn" onClick={handleClose}>
          X
        </Button>
        <Modal.Body className="my-recipes">
          {props.myRecipes ? (
            <div>
              {props.myRecipes.map((recipe) => (
                <div key={recipe.id}>
                  <Card className="cards">
                    <Image src={recipe.image} />
                    <Card.Content>
                      <Card.Description>
                        <div className="my-recipe-container">
                          <h2 className="my-recipe-title">{recipe.title}</h2>
                          <p className="my-details">
                            {recipe.readyInMinutes} minutes | {recipe.calories}{' '}
                            calories{' '}
                          </p>
                          <p>Instructions:</p>
                          {recipe.instructions}
                          <br></br>

                          <p>Ingredients:</p>
                          {recipe.recipe_ingredient.map((ingredient, idx) => (
                            <p key={idx}> {ingredient.name}</p>
                          ))}
                        </div>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <button
                        id="generateBtn"
                        className="delete-mine"
                        color="red"
                        icon
                        labelPosition="left"
                        onClick={() => deleteItem(recipe.id)}
                      >
                        Delete
                      </button>
                      <UpdateRecipe
                        dispatch={props.dispatch}
                        state={props.state}
                        recipeTitle={props.recipeTitle}
                        recipe={recipe}
                        getMyRecipes={props.getMyRecipes}
                        myRecipes={props.myRecipes}
                        recipeIngredient={recipe.recipe_ingredient}
                        recipeIngredients={props.state.recipeIngredients}
                      />
                    </Card.Content>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h1>Create A Recipe to add them to your collection!</h1>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default MyRecipes
