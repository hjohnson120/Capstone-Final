import React, { Component } from 'react'
import Login from './Pages/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateAccount from './Pages/CreateAccount'
import Home from './Pages/Home'
import Results from './Pages/Results'
import SchoolRepCreate from './Pages/SchoolRepCreate'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/CreateAccount" exact component={CreateAccount} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Results/:zipCode" exact component={Results} />
          <Route path="/SchoolRepCreate" exact component={SchoolRepCreate} />
        </Switch>
      </Router>
    )
  }
}

export default App
