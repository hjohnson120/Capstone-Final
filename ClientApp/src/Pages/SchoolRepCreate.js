import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default function CreateAccount() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('/Auth/register', {
        password,
        email: userName,
        IsSchool: true
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('expires_at', resp.data.expiresAt)
        localStorage.setItem('current_user', JSON.stringify(resp.data.user))
        window.location.href = '/SchoolRepHome'
      })
  }

  const login = e => {
    e.preventDefault()
    axios
      .post('/Auth/login', {
        password,
        email: userName,
        IsSchool: true
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('expires_at', resp.data.expiresAt)
        localStorage.setItem('current_user', JSON.stringify(resp.data.user))
        window.location.href = '/SchoolRepHome'
      })
  }
  return (
    <div>
      <section>
        <p className="login-page-header" />
        <h1>School Representative</h1>
      </section>
      <p>
        Having an account allows you to recruit more volunteers for your school!
      </p>
      <section className="login-create-page login-section ">
        <form onSubmit={submitForm}>
          <section className="login-input">
            <input placeholder="Full Name" />
            <input placeholder="Zip Code" />
            <input
              onChange={e => setUserName(e.target.value)}
              placeholder="email"
              type="email"
            />
            <input
              onChange={e => setPassword(e.target.value)}
              placeholder="password"
              type="password"
            />
            <Link className="create-link" onClick={submitForm}>
              CREATE ACCOUNT
            </Link>
          </section>
        </form>
        <p className="separating-text">OR</p>

        <form onSubmit={submitForm}>
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
            <section className="login-create-buttons">
              <Link className="create-link" onClick={login}>
                LOGIN
              </Link>
            </section>
          </section>
        </form>
      </section>
    </div>
  )
}
