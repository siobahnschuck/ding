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
        <img
          id="logo"
          src="https://i.ibb.co/1MqNCHv/dingLogo.png"
          width="150em"
        />
        <div className="copy">
          <h1 className="home-title">
            To cook <br></br>or not to cook?
          </h1>

          <p className="copy-p">
            <img
              src="https://i.ibb.co/85p4CWt/delete.png"
              width="80px"
              height="80px"
            />
            Welcome to Ding! A solution to the ever-looming question: "What
            should I have for dinner?" Sign up now to get started and get access
            to 100s of recipes based on what is in your own refrigerator!
          </p>
        </div>
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
