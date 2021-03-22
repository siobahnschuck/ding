import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Setting.css'

const CreateRecipe = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
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
            <input />
            <h2>Image:</h2>
            <input />
            <h2>Ingredients:</h2>
            <input />
            <h2>Instructions:</h2>
            <input />
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
