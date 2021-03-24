import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/App.css'
import axios from 'axios'
import {BASE_URL} from '../globals'

const SignUp = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

 const [registerForm, handleRegisterForm] = useState({
        firstName: '',
        lastName: '',
        username:'',
        email: '',
        passwordDigest:''
  })


    const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, registerForm)
      // props.toggleRegister(false)
      handleRegisterForm({
        firstName: '',
        lastName: '',
        username:'',
        email: '',
        passwordDigest:''})
    } catch (error) {
      console.log(error)
    }
  }

 const handleChange = (e) => {
    const { name, value } = e.target
    handleRegisterForm({ ...registerForm, [name]: value })
  }

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
          <form onSubmit={handleSubmit}>
            <p> First Name:</p>
            <input  
              type="text"
              name="firstName"
              placeholder="First Name"
              value={registerForm.firstName}
              onChange={handleChange}
              required
              />
            <p> Last Name:</p>
            <input  
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={registerForm.lastName}
              onChange={handleChange}
              required
              />
            <p>username:</p>
            <input  
              type="text"
              name="username"
              placeholder="username"
              value={registerForm.username}
              onChange={handleChange}
              required
              />
            <p>email:</p>
            <input  
              type="text"
              name="email"
              placeholder="Email@example.com"
              value={registerForm.email}
              onChange={handleChange}
              required
              />
            <p>password:</p>
            <input  
              type="text"
              name="password"
              placeholder="Password"
              value={registerForm.passwordDigest}
              onChange={handleChange}
              required
              />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <NavLink to="/dashboard">
            <Button
              disabled={
            !registerForm.email || !registerForm.password || !registerForm.name
              }
            size="large"
            color="teal"
            animated="fade"
            type='submit'
             variant="primary" onClick={handleClose}
             >
              Sign Up
            </Button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SignUp
