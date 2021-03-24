import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/App.css'
import axios from 'axios'
import { BASE_URL } from '../globals'

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
    isVegan: recipe.isVegan,
    isDairyFree: recipe.isDairyFree,
    hasNuts: recipe.hasNuts
    })

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const editItem = async (recipeId, update) => {
    try {
      const res = await axios.put(`${BASE_URL}/recipe/${recipeId}`, update)
      return res.data
    } catch (error) {
      throw error
    }
  }

  const handleChange = ({ target }) => {
    setUpdate({ ...update, [target.name]: target.value })
  }

   const handleVeganChange = () => {
    if (update.isVegan === true) {
      setUpdate({...update, isVegan: false})
    } else {
      setUpdate({...update, isVegan: true})
    }
  }
  const handleDairyChange = () => {
    if (update.isDairyFree === true) {
      setUpdate({...update, isDairyFree: false})
    } else {
      setUpdate({...update, isDairyFree: true})
    }
  }
  const handleNutsChange = () => {
    if (update.hasNuts === true) {
      setUpdate({...update, hasNuts: false})
    } else {
      setUpdate({...update, hasNuts:true})
    }
  }


    const handleSubmit = async (event) => {
    // event.preventDefault();
    try {
      editItem(recipeId, update)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show}  onHide={handleClose} dialogClassName="myRecipes">
        <Modal.Header closeButton></Modal.Header>
          <Modal.Title>Update Title</Modal.Title>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <p>Image:</p>
            <input
              name="image"

              placeholder = {recipe.image}
              value={update.image}
              onChange={handleChange}
            />
            <p>Title:</p>
            <input
              name="name"
              placeholder={recipe.name}
              value={update.name}
              onChange={handleChange}
            />
            <p>Cuisine:</p>
            <input
              name="cuisineType"
              placeholder={recipe.cuisineType}
              value={update.cuisineType}
              onChange={handleChange}
            />
            <p>Instructions:</p>
            <input
              name="instructions"
              placeholder={recipe.instructions}
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
            <div className={update.isVegan ? 'check' : ''}>
            <input 
              type="checkbox"
              value={update.isVegan}
              onClick={handleVeganChange}
            />
            </div>
            <p>DairyFree:</p>
           <div className={update.isDairyFree ? 'check' : ''}>
            <input
              type="checkbox"
              value={update.isDairyFree}
              onClick={handleDairyChange}
            />
            </div>
            <p>No Nuts:</p>
            <div className={update.hasNuts ? 'check' : ''}>
            <input
              type="checkbox"
              value={update.hasNuts}
              onClick={handleNutsChange}
            />
            </div>
            <br/>
            <button type = 'submit'>Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Edit
