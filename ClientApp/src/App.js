import React, { Component } from 'react'
import SignIn from './Pages/SignIn'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateAccount from './Pages/CreateAccount'
import Home from './Pages/Home'
import Results from './Pages/Results'
import SchoolRepCreate from './Pages/SchoolRepCreate'
import SchoolRepHome from './Pages/SchoolRepHome'
import EditOpp from './Pages/EditOpp'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/CreateAccount" exact component={CreateAccount} />
          <Route path="/Home" exact component={Home} />
          <Route path="/Results/:zipCode" exact component={Results} />
          <Route path="/SchoolRepCreate" exact component={SchoolRepCreate} />
          <Route path="/SchoolRepHome" exact component={SchoolRepHome} />
          <Route path="/EditOpp/:postedOpps" exact component={EditOpp} />
        </Switch>
      </Router>
    )
  }
}

export default App
