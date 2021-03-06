import React, { useState, useEffect } from 'react'
import RegisteredContainer from '../components/RegisteredContainer'
import axios from 'axios'

export default function Home(props) {
  const [zipCode, setZipCode] = useState('')
  const [results, setResults] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (results.length === 0) {
      setTitle('')
    } else {
      setTitle('Volunteer opportunities you are signed up for')
    }
  }, [results])

  useEffect(() => {
    axios
      .get('/api/RegisteredOpps/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(resp => {
        console.log(resp.data)
        setResults(resp.data)
      })
  }, [])

  const signOut = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  const search = e => {
    e.preventDefault()
    window.location.href = `/results/${zipCode}`
  }

  const unRegister = volunteerOpps => {
    console.log('clicked')
    axios
      .delete(`/api/RegisteredOpps/${volunteerOpps.id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(resp => {
        console.log(resp)
        setResults(oldResults =>
          oldResults.filter(f => f.id !== volunteerOpps.id)
        )
        if (resp.data.length === 0) {
          setTitle('')
        }
      })
  }
  const user = JSON.parse(localStorage.getItem('current_user')) || {}

  return (
    <div>
      <section>
        <p>
          <button className="sign-out" onClick={signOut}>
            SIGN OUT
          </button>
        </p>
      </section>
      <section>
        <header>Do Something</header>
      </section>
      <section className="sign-page-header">
        <button className="sign-out-media" onClick={signOut}>
          SIGN OUT
        </button>
      </section>
      <h1 className="display title">
        Welcome back {user.fullName || 'Default name'}
      </h1>
      <hr />
      <div className="home-section">
        <section className="home-search">
          <h1> Search Here for volunteer opportunities in your area..</h1>
          <form onSubmit={search}>
            <input
              className="zip-input"
              onChange={e => setZipCode(e.target.value)}
              placeholder="ZIP"
            />
            <button className="select-opp" onClick={search}>
              SEARCH
            </button>
            <p className="display">
              Searches for schools within a 5 mile radius
            </p>
          </form>
        </section>
      </div>
      <h2 className="display"> {title} </h2>
      <section>
        <section className="registered-opps">
          {results.map(result => {
            return (
              <RegisteredContainer
                key={result.id}
                id={result.id}
                schoolName={result.volunteerOpps.schoolName}
                department={result.volunteerOpps.department}
                date={result.volunteerOpps.date}
                time={result.volunteerOpps.timeSlot}
                schoolDistrict={result.volunteerOpps.schoolDistrict}
                shortDescription={result.volunteerOpps.shortDescription}
                peopleNeeded={result.volunteerOpps.peopleNeeded}
                longDescription={result.volunteerOpps.longDescription}
                unRegister={unRegister}
              />
            )
          })}
        </section>
      </section>
    </div>
  )
}
