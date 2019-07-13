import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
        email: userName,
        IsSchool: false
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('expires_at', resp.data.expiresAt)
        localStorage.setItem('current_user', JSON.stringify(resp.data.user))
        if (resp.data.user.isSchool === false) {
          window.location.href = '/home'
        } else {
          window.location.href = '/SchoolRepHome'
        }
      })
  }

  return (
    <div>
      <section>
        <p className="signin-page-header" />
        <header>Do Something</header>
      </section>
      <section className="sign-in-section">
        <h1>The gift of your time is priceless</h1>
        <p>Sign in to your account below</p>
        <form onSubmit={submitForm}>
          <section className="login-input">
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
            <section className="login-create-buttons">
              <button className="sign-in-button" onClick={submitForm}>
                SIGN IN
              </button>
            </section>
          </section>
        </form>
        <section>
          <p className="home-page-login">
            Don't have an account?{' '}
            <button className="create-link login-buttons" onClick={create}>
              Create Account
            </button>
          </p>
          School Representative?{' '}
          <Link className="create-link" to="/SchoolRepCreate">
            Go Here
          </Link>
        </section>
      </section>
    </div>
  )
}
