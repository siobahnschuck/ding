import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Home = (props) => {
  console.log(props)
  const [signInOpen, toggleSignIn] = useState(false)
  const [signUpOpen, toggleSignUp] = useState(false)
  // const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)
  const toggleOpen = (arg) => {
    toggleSignIn(false)
    toggleSignUp(false)
    if (arg === 'sign in') {
      toggleSignIn(true)
    } else if (arg === 'sign up') {
      toggleSignUp(true)
    }
  }
  return (
    <div className="home">
      <section className="left">
        <h1>
          Are you hungry? <br></br>To cook or not to cook?
        </h1>
      </section>
      <section className="right">
        <header>
          <button variant="primary" onClick={() => toggleOpen('sign in')}>
            Sign In
          </button>
          <button variant="primary" onClick={() => toggleOpen('sign up')}>
            Sign Up
          </button>
          <SignIn
            signInOpen={signInOpen}
            toggleSignIn={toggleSignIn}
            toggleSignUp={toggleSignUp}
            // handleClose={handleClose}
            // handleShow={handleShow}
            authenticated={props.authenticated}
            setAuthenticated={props.setAuthenticated}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
          <SignUp
            signUpOpen={signUpOpen}
            toggleSignUp={toggleSignUp}
            // setShow={setShow}
            // handleClose={handleClose}
            // handleShow={handleShow}
          />
          {/* <Button  onClick={props.logOut}>Logout</Button> */}
        </header>
        <img
          className="plate"
          src="https://i.ibb.co/cwt3tBj/Food-Plate-Diet-PNG.png"
          width="600px"
        />
      </section>
    </div>
  )
}

export default Home
