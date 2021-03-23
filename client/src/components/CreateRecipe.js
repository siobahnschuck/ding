import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Setting.css'

const CreateRecipe = (
  // state,
  // dispatch,
  // history,
  props
) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  // const createRecipe=()={
  //   dispatch({type:'my_recipes',payload:state.newRecipe})
  // }

  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        CREATE RECIPE
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="addFood">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body>
          <form onSubmit={props.submitRecipe}>
            <h2>Title:</h2>
            <input
              name="title"
              value={props.newRecipe.title}
              onChange={props.handleChange}
            />
            <h2>Image:</h2>
            <input
              name="image"
              value={props.newRecipe.image}
              onChange={props.handleChange}
            />
            <h2>Ingredients:</h2>
            <input
              name="ingredients"
              value={props.newRecipe.ingredients}
              onChange={props.handleChange}
            />
            <h2>Instructions:</h2>
            <input
              name="instructions"
              value={props.newRecipe.instructions}
              onChange={props.handleChange}
            />
            <br></br>
            <br></br>
            <button type="submit">Create</button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default CreateRecipe
