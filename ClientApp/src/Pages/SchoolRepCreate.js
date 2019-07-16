import React, { useState } from 'react'
import axios from 'axios'

export default function CreateAccount() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [message, setMessage] = useState('')
  const [message2, setMessage2] = useState('')

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
      .catch(error => {
        setMessage(error.response.data.message)
      })
  }

  const login = e => {
    e.preventDefault()
    if (password && userName) {
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
        .catch(error => {
          setMessage2(error.response.data.message)
        })
    } else {
      setMessage('Please fill in ALL fields')
    }
  }
  return (
    <div>
      <section>
        <header>Do Something</header>
        <p className="login-page-header" />
        <h1>School Representative</h1>
      </section>
      <p className="display">
        Having an account allows you to recruit more volunteers for your school!
      </p>
      <hr />
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
            <button className="rep-create-buttons" onClick={submitForm}>
              CREATE ACCOUNT
            </button>
            <p className="display">{message}</p>
          </section>
        </form>
        <h2 className="separating-text">OR</h2>

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
            {/* <section className="login-create-buttons"> */}
            <button className="rep-create-buttons" onClick={login}>
              LOGIN
            </button>
            <p className="display">{message2}</p>
          </section>
          {/* </section> */}
        </form>
      </section>
    </div>
  )
}
