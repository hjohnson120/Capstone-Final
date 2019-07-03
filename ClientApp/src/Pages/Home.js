import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import OpportunitiesContainer from '../components/OpportunitiesContainer'
import axios from 'axios'

export default function Home() {
  const [zipCode, setZipCode] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    axios
      .get('/api/RegisteredOpps/', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(resp => {
        setResults(resp.data)
      })
  }, [])

  const search = () => {
    window.location.href = `/results/${zipCode}`
  }

  return (
    <div>
      <section>
        <NavBar />
        <header>Do Something</header>
      </section>
      <div className="home-section">
        <section className="home-search">
          <h1> Search Here for opportunities in your area..</h1>
          <input
            className="zip-input"
            onChange={e => setZipCode(e.target.value)}
            placeholder="ZIP"
          />
          <button className="select-opp" onClick={search}>
            Search
          </button>
        </section>
        <section className="registered-opps">
          <h2>Volunteer Opportunities You're Signed Up For : </h2>
          <section>
            {results.map(result => {
              return (
                <OpportunitiesContainer
                  key={result.id}
                  id={result.id}
                  schoolName={result.schoolName}
                  department={result.department}
                  date={result.date}
                  time={result.timeSlot}
                  schoolDistrict={result.schoolDistrict}
                />
              )
            })}
          </section>
        </section>
      </div>
    </div>
  )
}
