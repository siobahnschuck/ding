import React, { useState } from 'react'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Home = (props) => {
  const [signInOpen, toggleSignIn] = useState(false)
  const [signUpOpen, toggleSignUp] = useState(false)

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
          <button className="signBtn" onClick={() => toggleOpen('sign in')}>
            Sign In
          </button>
          <button className="signBtn" onClick={() => toggleOpen('sign up')}>
            Sign Up
          </button>
          <SignIn
            signInOpen={signInOpen}
            toggleSignIn={toggleSignIn}
            toggleSignUp={toggleSignUp}
            authenticated={props.authenticated}
            setAuthenticated={props.setAuthenticated}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
          <SignUp signUpOpen={signUpOpen} toggleSignUp={toggleSignUp} />
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
