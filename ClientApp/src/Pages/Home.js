import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import OpportunitiesContainer from '../components/OpportunitiesContainer'

export default function Home() {
  const [zipCode, setZipCode] = useState('')

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
          <input onChange={e => setZipCode(e.target.value)} placeholder="ZIP" />
          <button className="select-opp" onClick={search}>
            Search
          </button>
        </section>
        <section className="registered-opps">
          <h2>Volunteer Opportunities You're Signed Up For : </h2>
          <OpportunitiesContainer />
        </section>
      </div>
    </div>
  )
}
