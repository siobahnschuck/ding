import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/App.css'
import axios from 'axios'
import {BASE_URL} from '../globals'

const SignIn = (props) => {
  console.log(props)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

    const [loginForm, handleLoginForm] = useState({
    username: '',
    password: ''
    })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, loginForm)
      localStorage.setItem('token', res.data.token)
      props.setAuthenticated(true)
      setShow(false)
      handleLoginForm({ username: '', password: '' })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    handleLoginForm({ ...loginForm, [name]: value })
  }


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
          <form onSubmit={handleSubmit}>
            <p>username:</p>
            <input
              type="username"
              name="username"
              placeholder="USERNAME"
              value={loginForm.username}
              onChange={handleChange}
              required
              />
            <p>password:</p>
            <input  
              type="password"
              name="password"
              placeholder="PASSWORD"
              value={loginForm.password}
              onChange={handleChange}
              required/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <NavLink to="/dashboard">
            <button 
            type ='submit'
            variant="primary"  
              disabled={!loginForm.username || !loginForm.password}
              size="large"
              color="teal"
              animated="fade"
              onClick={handleSubmit}
              >
              Sign In
            </button>
          </NavLink>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SignIn
