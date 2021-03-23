import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/App.css'

const Edit = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="myRecipes">
        <Modal.Header closeButton>
          <Modal.Title>Update Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <p>username:</p>
            <input></input>
            <p>password:</p>
            <input></input>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Edit
