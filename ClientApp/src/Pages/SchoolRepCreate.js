import React, { useState } from 'react'
import axios from 'axios'
export default function CreateAccount() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const submitForm = e => {
    e.preventDefault()
    console.log('herer')
    axios
      .post('/Auth/register', {
        fullName,
        password,
        email: userName,
        IsSchool: true
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('expires_at', resp.data.expiresAt)
        localStorage.setItem('current_user', JSON.stringify(resp.data.user))
        console.log(resp)
        console.log(resp.data)
        console.log(resp.data.user)
        console.log(resp.data.user.isSchool)
        if (resp.data.user.isSchool) {
          window.location.href = '/SchoolRepHome'
        } else {
          window.location.href = '/'
        }
      })
  }

  const login = e => {
    e.preventDefault()
    // if (IsSchool) {
    //   window.location.href = '/SchoolRepHome'
    // } else {

    // }
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
        console.log(resp)
        console.log(resp.data)
        console.log(resp.data.user)
        console.log(resp.data.user.isSchool)
        if (resp.data.user.isSchool) {
          window.location.href = '/SchoolRepHome'
        } else {
          window.location.href = '/'
        }
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
            <input
              onChange={e => setFullName(e.target.value)}
              placeholder="Full Name"
              type="text"
            />
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
            <button className="create-link login-buttons" onClick={submitForm}>
              CREATE ACCOUNT
            </button>
          </section>
        </form>
        <p className="separating-text">OR</p>

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
              <button className="create-link login-buttons" onClick={login}>
                LOGIN
              </button>
            </section>
          </section>
        </form>
      </section>
    </div>
  )
}
