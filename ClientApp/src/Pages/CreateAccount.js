import React, { component } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function CreateAccount() {
  return (
    <div>
      <NavBar />
      <h1>Create An Account</h1>
      <p>
        Having an account allows you to access volunteer opportunities quicker
        and easier!
      </p>
      <section className="login-section login-input">
        <input placeholder="email" />
        <input placeholder="password" />
        <button>CREATE ACCOUNT</button>
      </section>
    </div>
  )
}
