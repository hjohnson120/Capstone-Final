import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class NavBar extends Component {
  signOut = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  render() {
    return (
      <div className="nav-position">
        <ul className="nav-bar">
          <li className="nav-link">
            <Link to="/SchoolRepCreate">Login Page</Link>
          </li>
          <li className="nav-link">
            <Link to="/SchoolRepHome">Go Home</Link>
          </li>
          <li className="nav-link">
            <Link onClick={this.signOut} to="/">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default NavBar
