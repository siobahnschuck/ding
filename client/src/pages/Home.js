import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const Home = () => {
  return (
    <div className="home">
      <section className="right">
        <header>
          <SignIn />
          <SignUp />
        </header>
      </section>
      <section className="left"></section>
    </div>
  )
}

export default Home
