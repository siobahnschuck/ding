
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import MyRecipePage from './pages/MyRecipePage'
import { Route, NavLink, Switch } from 'react-router-dom'
import './css/App.css'
import React, { useState } from 'react'

const App = () => {
  console.log(localStorage)
 
  const [authenticated, setAuthenticated] = useState(false)

    const logOut = () => {
    setAuthenticated(false)
    localStorage.clear()
  }

  console.log(authenticated)

  return (
    <div>
     <button className='logOutBtn' onClick={logOut}>Logout</button>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} authenticated={authenticated} setAuthenticated={setAuthenticated}/>} logOut={logOut} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} authenticated={authenticated} logOut={logOut}/>
        <Route path="/about" render={(props) => <About {...props} />} />
        <Route
          path="/myrecipepage"
          render={(props) => <MyRecipePage {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
