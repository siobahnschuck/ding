import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Card, Grid, Icon, Image } from 'semantic-ui-react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import '../css/Setting.css'

const MyRecipes = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const deleteItem = async (recipeId) => {
    try {
      const res = await axios.delete(`${BASE_URL}/myRecipes/${recipeId}`)
      let filteredRecipes = [...props.myRecipes].filter(
        (recipe) => recipe.id !== parseInt(res.data.payload)
      )
      props.setMyRecipes(filteredRecipes)
    } catch (error) {
      console.log(error)
    }
    // const editItem = async (recipeId) => {
    //   try {
    //     const res = await axios.put(`${BASE_URL}/myRecipes/${recipeId}`)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }

  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        MY RECIPES
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="addFood">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          {props.myRecipes.map((recipe) => (
            <Grid.Column key={recipe.id}>
              <Card>
                <Image src={recipe.image} />
                <Card.Content>
                  <Card.Header>{recipe.title}</Card.Header>
                  <Card.Description>
                    {recipe.ingredients}
                    <br></br>
                    {recipe.instructions}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button
                    color="red"
                    icon
                    labelPosition="left"
                    onClick={() => deleteItem(recipe.id)}
                  >
                    <Icon name="trash" />
                    Delete
                  </Button>
                  <Button
                    color="blue"
                    icon
                    labelPosition="right"
                    // onClick={() => editItem(recipe.id)}
                  >
                    <Icon name="edit" />
                    Edit
                  </Button>
                </Card.Content>
              </Card>
            </Grid.Column>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default MyRecipes
