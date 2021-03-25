import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Home = (props) => {
  console.log(props)
  return (
    <div className="home">
      <section className="left">
        <h1>
          Are you hungry? <br></br>To cook or not to cook?
        </h1>
      </section>
      <section className="right">
        <header>
          <SignIn
            authenticated={props.authenticated}
            setAuthenticated={props.setAuthenticated}
            currentUser={props.currentUser}
            setCurrentUser={props.setCurrentUser}
          />
          <SignUp />
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
