import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import MyRecipePage from './pages/MyRecipePage'
import { Route, NavLink, Switch } from 'react-router-dom'
import './css/App.css'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
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
