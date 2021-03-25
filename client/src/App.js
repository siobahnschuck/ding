import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import { Route, Switch } from 'react-router-dom'
import './css/App.css'
import React, { useState } from 'react'

const App = () => {
  console.log(localStorage)

  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState({})

  const logOut = () => {
    setAuthenticated(false)
    localStorage.clear()
  }

  console.log(authenticated)
  console.log(currentUser.id)

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
