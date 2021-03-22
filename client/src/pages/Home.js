import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Home = () => {
  return (
    <div className="home">
      <section className="left">
        <h1>
          Are you hungry? <br></br>To cook or not to cook?
        </h1>
      </section>
      <section className="right">
        <header>
          <SignIn />
          <SignUp />
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
