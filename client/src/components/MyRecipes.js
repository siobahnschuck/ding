import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Card, Image } from 'semantic-ui-react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../css/Recipe.css'
import UpdateRecipe from './UpdateRecipe'

const MyRecipes = (props) => {
  // console.log(props)
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

  // const editItem = async (recipeId) => {
  //   try {

  //     const res = await axios.put(`${BASE_URL}/recipe/${recipeId}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  console.log(props.myRecipes)
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        MY RECIPES
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="myRecipes">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body className="my-recipes">
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
                    <p>Vegan:{recipe.isVegan.toString()}</p>
                    <p>DairyFree:{recipe.isDairyFree.toString()}</p>
                    <p>Has Nuts: {recipe.hasNuts.toString()}</p>
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
                  <UpdateRecipe recipe={recipe} />
                  {/* <button
                    color="blue"
                    icon
                    labelPosition="right"
                    onClick={handleShow}
                  >
                    Edit
                  </button> */}
                </Card.Content>
              </Card>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default MyRecipes
