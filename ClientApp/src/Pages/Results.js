import React, { useState, useEffect } from 'react'
import OpportunitiesContainer from '../components/OpportunitiesContainer'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Results(props) {
  const [results, setResults] = useState([])
  // const [display, setDisplay] = useState('')

  useEffect(() => {
    axios
      .get('/api/VolunteerOpps/zipcode/' + props.match.params.zipCode, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(resp => {
        setResults(resp.data)
      })
  }, [])

  const register = oppId => {
    axios
      .post(
        '/api/RegisteredOpps',
        { volunteerOppsId: oppId },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      .then(resp => {
        console.log(resp)
        setResults(oldResults => oldResults.filter(f => f.id !== oppId))
      })
  }

  const goHome = () => {
    window.location.href = '/home'
  }

  return (
    <main>
      <section>
        <header>
          <Link to="../Home">Do Something</Link>
        </header>
        <section>
          <p>
            <button className="home-link-media" onClick={goHome}>
              Home
            </button>
          </p>
        </section>
      </section>
      <h1 className="display">
        Here are the school volunteer opportunities within <br /> a 5 mile
        radius of your zip code search..
      </h1>
      <hr />
      <section className="opportunity-display">
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
              shortDescription={result.shortDescription}
              longDescription={result.longDescription}
              peopleNeeded={result.peopleNeeded}
              schoolAddress={result.schoolAddress}
              register={register}
            />
          )
        })}
        {/* <h2 className="display">{display}</h2> */}
      </section>
    </main>
  )
}
