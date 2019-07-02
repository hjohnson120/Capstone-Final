import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function CreateLogin() {
  // const [login, getLogin] = useState('')
  const create = () => {
    window.location.href = '/createAccount'
  }
  return (
    <div>
      <section>
        <NavBar />
        <header>Do Something</header>
      </section>
      <section className="login-section">
        <h1>The gift of your time is priceless</h1>
        <section class="login-input">
          <input placeholder="email" />
          <input placeholder="password" />
          <button>LOGIN</button>
          <button onClick={create}>CREATE ACCOUNT</button>
        </section>
      </section>
    </div>
  )
}
