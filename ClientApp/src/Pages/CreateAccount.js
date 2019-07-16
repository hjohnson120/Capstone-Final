import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function CreateAccount() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [message, setMessage] = useState('')

  const submitForm = e => {
    e.preventDefault()
    axios
      .post('/Auth/register', {
        fullName,
        password,
        email: userName
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('expires_at', resp.data.expiresAt)
        localStorage.setItem('current_user', JSON.stringify(resp.data.user))
        window.location.href = '/'
      })
      .catch(error => {
        setMessage(error.response.data.message)
      })
  }

  return (
    <div>
      <section>
        <header>
          <Link to="../SchoolRepHome">Do Something</Link>
        </header>
        <p className="login-page-header" />
        <h1>Create An Account</h1>
      </section>
      <p>
        Having an account allows you to access volunteer opportunities quicker
        and easier!
      </p>
      <form onSubmit={submitForm}>
        <section className="login-section login-input">
          <input
            onChange={e => setFullName(e.target.value)}
            placeholder="Full Name"
            type="text"
          />
          <input placeholder="Zip Code" />
          <input
            onChange={e => setUserName(e.target.value)}
            placeholder="email"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
          <button className="create-account-button">CREATE ACCOUNT</button>
        </section>
      </form>
      <section>
        <p className="display">{message}</p>
      </section>
    </div>
  )
}
