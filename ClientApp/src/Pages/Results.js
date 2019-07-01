import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import OpportunitiesContainer from '../components/OpportunitiesContainer'
import axios from 'axios'
// import { Links } from 'react-router-dom'

export default function Results() {
  const [results, setResults] = useState([])

  useEffect(() => {
    axios.get('/api/VolunteerOpps').then(resp => {
      setResults(resp.data)
    })
  }, [])

  return (
    <main>
      <section>
        <NavBar />
        <header>Do Something!</header>
      </section>
      <section className="opportunity-display">
        {results.map(result => {
          return (
            <OpportunitiesContainer
              key={result.id}
              schoolName={result.schoolName}
              department={result.department}
            />
          )
        })}
      </section>
    </main>
  )
}
