import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function CreateLogin() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const create = () => {
    window.location.href = '/createAccount'
  }

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('/Auth/login', {
        password,
        email: userName
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('expires_at', resp.data.expiresAt)
        localStorage.setItem('current_user', JSON.stringify(resp.data.user))
        window.location.href = '/home'
      })
  }

  return (
    <div>
      <section>
        <p className="login-page-header" />
        <header>Do Something</header>
      </section>
      <section className="login-section">
        <h1>The gift of your time is priceless</h1>
        <section class="login-input">
          <input
            type="email"
            name="email"
            onChange={e => setUserName(e.target.value)}
            placeholder="Enter email"
          />
          <input
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={submitForm}>LOGIN</button>
          <button onClick={create}>CREATE ACCOUNT</button>
        </section>
      </section>
    </div>
  )
}
