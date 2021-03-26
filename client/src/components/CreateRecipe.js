import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import DetailsRecipeCreate from '../components/DetailsRecipeCreate'

const CreateRecipe = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [submit, toggleSubmit] = useState(false)

  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        CREATE RECIPE
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="create-title">
        <Button onClick={handleClose}>Close</Button>
        <Modal.Body>
          <h2>Create Recipe</h2>
          <form onSubmit={props.submitRecipe}>
            <p>Title:</p>
            <input
              name="title"
              value={props.recipeTitle}
              onChange={props.handleChange}
            />
            <button type="submit">Submit</button>
          </form>
          <DetailsRecipeCreate
            history={props.history}
            dispatch={props.dispatch}
            state={props.state}
            recipeIngredients={props.state.recipeIngredients}
            submitRecipe={props.submitRecipe}
            recipeTitle={props.recipeTitle}
            handleChange={props.handleChange}
            removeIngredient={props.removeIngredient}
            handleVeganChange={props.handleVeganChange}
            handleDairyChange={props.handleDairyChange}
            handleNutsChange={props.handleNutsChange}
            recipeId={props.recipeId}
          />
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default CreateRecipe
