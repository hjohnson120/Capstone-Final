import React, { useState, useEffect } from 'react'
import OpportunitiesContainer from '../components/OpportunitiesContainer'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Results(props) {
  const [results, setResults] = useState([])

  useEffect(() => {
    axios
      .get('/api/VolunteerOpps/' + props.match.params.zipCode, {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(resp => {
        setResults(resp.data)
      })
  }, [])

  return (
    <main>
      <section>
        <header>
          <Link to="../Home">Do Something</Link>
        </header>
      </section>
      <h1 className="display">
        Here are the volunteer opportunities within <br /> a 5 mile radius of
        your zip code search..
      </h1>
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
            />
          )
        })}
      </section>
    </main>
  )
}
