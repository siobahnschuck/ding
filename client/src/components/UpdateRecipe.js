import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/App.css'
import axios from 'axios'
import {BASE_URL} from '../globals'

const Edit = (props) => {
  console.log(props)
  const recipe = props.recipe
  const recipeId = recipe.id
  
  const [update, setUpdate] = useState({ 
    name: recipe.name, 
    cuisineType: recipe.cuisineType, 
    instructions: recipe.instructions, 
    duration: recipe.duration, 
    calories: recipe.calories,
    isVegan: recipe.isVegan
    })


  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  console.log(update)


  const editItem = async (recipeId, update) => {
    try {
      const res = await axios.put(`${BASE_URL}/recipe/${recipeId}`, update)
      return res.data
    } catch (error) {
      throw (error)
    }
  }

  const handleChange = ({target}) => {
    setUpdate({...update, [target.name]:target.value});
  }


    const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      editItem(recipeId,update)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} dialogClassName="myRecipes">
        <Modal.Header closeButton>
          <Modal.Title>Update Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <p>Image:</p>
            <input
              name="image"
      
              // value={props.newRecipe.image}
              // onChange={props.handleChange}
            />
            <p>Title:</p>
            <input
              name="name"
              placeholder = {recipe.name}
              value={update.name}
              onChange={handleChange}
            />
            <p>Cuisine:</p>
            <input
              name="cuisineType"
              placeholder = {recipe.cuisineType}
              value={update.cuisineType}
              onChange={handleChange}
            />
            <p>Instructions:</p>
            <input
              name="instructions"
              placeholder = {recipe.instructions}
              value={update.instructions}
              onChange={handleChange}
            />
            <p>Duration:</p>
            <input
              name="duration"
              placeholder={recipe.duration}
              value={update.duration}
              onChange={handleChange}
            />
            <p>Calories:</p>
            <input
              name="calories"
              placeholder={recipe.calories}
              value={update.calories}
              onChange={handleChange}
            />
            <p>Vegan:</p>
            <input
              type="checkbox"
              value={props.isVegan}
              onClick={props.handleVeganChange}
            />
            <p>DairyFree:</p>
            <input
              type="checkbox"
              value={props.isDairyFree}
              onClick={props.handleDairyChange}
            />
            <p>No Nuts:</p>
            <input
              type="checkbox"
              value={props.hasNuts}
              onClick={props.handleNutsChange}
            />
            <br/>
            <button type = 'submit'>Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Edit
