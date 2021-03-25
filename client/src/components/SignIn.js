import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/App.css'
import axios from 'axios'
import { BASE_URL } from '../globals'

const SignIn = (props) => {
  console.log(props)
  // const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

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
      props.toggleSignin(false)
      props.setCurrentUser(res.data.user)
      handleLoginForm({ username: '', password: '' })
      console.log(res)
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
      <Modal
        show={props.signInOpen}
        // onHide={props.handleClose}
        dialogClassName="modal"
      >
        <div className="header">
          <Button id="closeBtn" onClick={() => props.toggleSignIn(false)}>
            X
          </Button>
        </div>
        <Modal.Body>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="username"
              name="username"
              placeholder="Username"
              value={loginForm.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginForm.password}
              onChange={handleChange}
              required
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            id="signBtn"
            disabled={!loginForm.username || !loginForm.password}
            size="large"
            color="teal"
            animated="fade"
            onClick={handleSubmit}
          >
            {/* <NavLink
              to="/dashboard"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontWeight: 'bold'
              }}
            > */}
            Sign In
            {/* </NavLink> */}
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SignIn
