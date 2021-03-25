import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Card, Image } from 'semantic-ui-react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../css/Recipe.css'
import UpdateRecipe from './UpdateRecipe'

const GetAllRecipes = (props) => {
  console.log(props.allRecipes)
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
        All Recipes
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="myRecipes">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="my-recipes">
          {props.allRecipes ? (
            <div>
              {props.allRecipes.map((recipe) => (
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
                        <p>Vegan:{recipe.isVegan}</p>
                        <p>DairyFree:{recipe.isDairyFree}</p>
                        <p>Has Nuts: {recipe.hasNuts}</p>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>

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
export default GetAllRecipes
