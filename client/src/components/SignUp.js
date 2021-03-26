import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../css/App.css'
import axios from 'axios'
import { BASE_URL } from '../globals'

const SignUp = (props) => {
  const [registerForm, handleRegisterForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    passwordDigest: '',
    confirmPassword: ''
  })

  const handleSubmit = async (e) => {
    try {
      await axios.post(`${BASE_URL}/auth/register`, registerForm)
      handleRegisterForm({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        passwordDigest: ''
      })
      props.toggleSignUp(false)
      props.toggleSignIn(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    handleRegisterForm({ ...registerForm, [name]: value })
  }

  const handleConfirm = (e) => {
    e.preventDefault()
    if (registerForm.passwordDigest === registerForm.confirmPassword) {
      return handleSubmit()
    } else {
      alert('Your password does not match, please try again!')
    }
  }

  return (
    <div>
      <Modal show={props.signUpOpen} dialogClassName="modal">
        <div className="header">
          <Button id="closeBtn" onClick={() => props.toggleSignUp(false)}>
            X
          </Button>
        </div>
        <Modal.Body>
          <h2>Sign Up</h2>
          <form onSubmit={handleConfirm}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={registerForm.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={registerForm.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="username"
              value={registerForm.username}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email@example.com"
              value={registerForm.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="passwordDigest"
              placeholder="Password"
              value={registerForm.passwordDigest}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={registerForm.confirmPassword}
              onChange={handleChange}
              required
            />
            <Button
              type="submit"
              disabled={
                !registerForm.email ||
                !registerForm.passwordDigest ||
                !registerForm.firstName
              }
              size="large"
              color="teal"
              animated="fade"
              id="signBtn"
            >
              Sign Up
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default SignUp
