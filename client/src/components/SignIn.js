import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import '../css/App.css'
import axios from 'axios'
import { BASE_URL } from '../globals'

const SignIn = (props) => {
  const [loginForm, handleLoginForm] = useState({
    username: '',
    password: ''
  })

  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, loginForm)
      localStorage.setItem('token', res.data.token)
      props.setAuthenticated(true)
      props.toggleSignIn(false)
      props.setCurrentUser(res.data.user)
      handleLoginForm({ username: '', password: '' })
      return history.push('/dashboard')
    } catch (error) {
      console.log(error)
      return alert('Your username or password is incorrect')
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    handleLoginForm({ ...loginForm, [name]: value })
  }

  return (
    <div>
      <Modal show={props.signInOpen} dialogClassName="modal">
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
            <Button
              type="submit"
              id="signBtn"
              disabled={!loginForm.username || !loginForm.password}
              size="large"
              color="teal"
              animated="fade"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default SignIn
