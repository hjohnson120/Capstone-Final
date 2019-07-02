import React, { Component } from 'react'
import Login from './Pages/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateAccount from './Pages/CreateAccount'
import Home from './Pages/Home'
import Results from './Pages/Results'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/CreateAccount" exact component={CreateAccount} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Results/:zipCode" exact component={Results} />
        </Switch>
      </Router>
    )
  }
}

export default App
