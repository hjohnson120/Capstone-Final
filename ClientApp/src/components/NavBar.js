import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <div className="nav-position">
        <ul className="nav-bar">
          <li className="nav-link">
            <Link to="/">Login Page</Link>
          </li>
          <li className="nav-link">
            <Link to="/Home">Go Home</Link>
          </li>
          {/* <li>
            <Link to="/Kygo">Kygo</Link>
          </li> */}
        </ul>
      </div>
    )
  }
}

export default NavBar
