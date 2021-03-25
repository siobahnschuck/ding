import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Card, Image } from 'semantic-ui-react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../css/Recipe.css'
import UpdateRecipe from './UpdateRecipe'

const MyRecipes = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="my-recipes">
          {props.myRecipes ? (
            <div>
              {props.myRecipes.map((recipe) => (
                <div key={recipe.id}>
                  <Card className="cards">
                    <Image src={recipe.image} />
                    <Card.Content>
                      <Card.Header>{recipe.name}</Card.Header>
                      <Card.Description>
                        {recipe.duration}
                        {recipe.calories}
                        {recipe.ingredients}
                        <br></br>
                        {recipe.instructions}
                        <p>Vegan:toString({recipe.vegan})</p>
                        <p>Dairy Free:{recipe.dairyFree}</p>
                        <p>Vegetarian:{recipe.vegetarian}</p>
                        {recipe.recipe_ingredient.map((ingredient) => (
                          <p>Ingredients: {ingredient.name}</p>
                        ))}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <button
                        color="red"
                        icon
                        labelPosition="left"
                        onClick={() => deleteItem(recipe.id)}
                      >
                        Delete
                      </button>
                      <UpdateRecipe
                        recipe={recipe}
                        getMyRecipes={props.getMyRecipes}
                        myRecipes={props.myRecipes}
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
