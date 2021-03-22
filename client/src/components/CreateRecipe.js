import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Setting.css'

const CreateRecipe = ({ state, dispatch, history }) => {
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
          <form>
            <h2>Title:</h2>
            <input
              value={state.newRecipe.title}
              onChange={(e) =>
                dispatch({ type: 'create_recipe', payload: e.target.value })
              }
            />
            <h2>Image:</h2>
            <input
              value={state.newRecipe.image}
              onChange={(e) =>
                dispatch({ type: 'create_recipe', payload: e.target.value })
              }
            />
            <h2>Ingredients:</h2>
            <input
              value={state.newRecipe.ingredients}
              onChange={(e) =>
                dispatch({ type: 'create_recipe', payload: e.target.value })
              }
            />
            <h2>Instructions:</h2>
            <input
              value={state.newRecipe.instructions}
              onChange={(e) =>
                dispatch({ type: 'create_recipe', payload: e.target.value })
              }
            />
            <br></br>
            <br></br>
            <input type="button" value="Create"></input>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default CreateRecipe
