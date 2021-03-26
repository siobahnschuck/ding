import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import { Route, Switch } from 'react-router-dom'
import './css/App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import { useHistory } from 'react-router-dom'

const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const history = useHistory()
  const logOut = () => {
    setAuthenticated(false)
    localStorage.clear()
    return history.push('/')
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
