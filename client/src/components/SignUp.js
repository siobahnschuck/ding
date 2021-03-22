import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/App.css'

const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Sign Up
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="modal">
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <p>name:</p>
            <input></input>
            <p>username:</p>
            <input></input>
            <p>email:</p>
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
              Sign Up
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SignUp
