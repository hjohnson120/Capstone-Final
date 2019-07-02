import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import OpportunitiesContainer from '../components/OpportunitiesContainer'
import axios from 'axios'
// import { Links } from 'react-router-dom'

export default function Results(props) {
  const [results, setResults] = useState([])

  // const getZipCode = e => {
  //   e.preventDefault()
  //   axios.get('/VolunteerOppsController').then(resp => {
  //     zipCode
  //   })
  // }

  useEffect(() => {
    axios.get('/api/VolunteerOpps/' + props.match.params.zipCode).then(resp => {
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
              date={result.date}
              time={result.timeSlot}
              schoolDistrict={result.schoolDistrict}
            />
          )
        })}
      </section>
    </main>
  )
}
