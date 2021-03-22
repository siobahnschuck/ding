import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/App.css'

const SignIn = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="modal">
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <p>username:</p>
            <input></input>
            <p>password:</p>
            <input></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <NavLink to="/dashboard">
            <Button variant="primary" onClick={handleClose}>
              Sign In
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SignIn
