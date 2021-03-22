import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/Setting.css'

const MyRecipes = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <Button id="dash-button" onClick={handleShow}>
        MY RECIPES
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="addFood">
        {/* <Modal.Header closeButton></Modal.Header> */}
        <Modal.Body></Modal.Body>
      </Modal>
    </div>
  )
}
export default MyRecipes
