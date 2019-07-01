import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import OpportunitiesContainer from '../components/OpportunitiesContainer'

export default function Home() {
  return (
    <div>
      <section>
        <NavBar />
        <header>Do Something</header>
      </section>
      <div className="home-section">
        <section className="home-search">
          <h1> Search Here for opportunities in your area..</h1>
          <input placeholder="ZIP" />
          <button className="select-opp">Search</button>
        </section>
        <section className="registered-opps">
          <section>
            <h2>Volunteer Opportunities You're Signed Up For : </h2>
            <i class="fas fa-arrow-right" />
          </section>
          <section>
            <OpportunitiesContainer />
          </section>
        </section>
      </div>
    </div>
  )
}
