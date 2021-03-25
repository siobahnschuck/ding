import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import { Route, Switch } from 'react-router-dom'
import './css/App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import { token } from 'morgan'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const logOut = () => {
    setAuthenticated(false)
    localStorage.clear()
  }

  const checkSession = async () => {
    let token = localStorage.getItem('token')
    if (token) {
      const res = await axios.get(`${BASE_URL}/auth/session`)
      setCurrentUser(res.data)
      setAuthenticated(true)
    }
  }

  useEffect(() => {
    checkSession()
  }, [])

  return (
    <div>
      <div>
        {/* <button className="logOutBtn" onClick={logOut}>
          <NavLink to="/">Logout</NavLink>
        </button> */}
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                logOut={logOut}
              />
            )}
          />
          {authenticated ? (
            <Route
              path="/dashboard"
              render={(props) => (
                <Dashboard
                  {...props}
                  authenticated={authenticated}
                  logOut={logOut}
                  currentUser={currentUser}
                  checkSession={checkSession}
                />
              )}
            />
          ) : null}
          <Route path="/about" render={(props) => <About {...props} />} />
        </Switch>
      </div>
    </div>
  )
}

export default App
