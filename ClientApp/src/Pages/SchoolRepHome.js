import React, { useState, useEffect } from 'react'
import SchoolRepNavBar from '../components/SchoolRepNavBar'
import RegisteredContainer from '../components/RegisteredContainer'
import axios from 'axios'

export default function Home() {
  const [results, setResults] = useState([])
  const [zipCode, setZipCode] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [department, setDepartment] = useState('')
  const [date, setDate] = useState('')
  const [timeSlot, setTimeSlot] = useState('')
  const [peopleNeeded, setPeopleNeeded] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [longDescription, setLongDescription] = useState('')
  const [schoolAddress, setSchoolAddress] = useState('')

  useEffect(() => {
    axios
      .get('/api/VolunteerOpps', {
        headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
      })
      .then(resp => {
        console.log(resp.data)
        setResults(resp.data)
      })
  }, [])

  const postOpp = e => {
    e.preventDefault()
    axios
      .post(
        '/api/VolunteerOpps',
        {
          zipCode,
          schoolName,
          department,
          date,
          timeSlot,
          peopleNeeded,
          shortDescription,
          longDescription,
          schoolAddress
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      .then(resp => {
        console.log(resp.data)
      })
  }

  return (
    <div>
      <section>
        <SchoolRepNavBar />
        <header>Do Something</header>
      </section>
      <div className="home-section">
        <section className="rep-home-search">
          <h1> Post a volunteer opportunity</h1>
          <form onSubmit={postOpp}>
            <input
              className="zip-input"
              name="schoolName"
              onChange={e => setSchoolName(e.target.value)}
              placeholder="School Name"
            />
            <input
              className="zip-input"
              name="department"
              onChange={e => setDepartment(e.target.value)}
              placeholder="Department"
            />
            <input
              className="zip-input"
              name="date"
              type="date"
              onChange={e => setDate(e.target.value)}
              placeholder="Date"
            />
            <input
              className="zip-input"
              name="timeSlot"
              onChange={e => setTimeSlot(e.target.value)}
              placeholder="Time Slot (From-To)"
            />
            <input
              className="zip-input"
              name="zipCode"
              onChange={e => setZipCode(e.target.value)}
              placeholder="Zip Code"
            />
            <input
              className="zip-input"
              name="schoolAddress"
              onChange={e => setSchoolAddress(e.target.value)}
              placeholder="School Address"
            />
            <input
              className="zip-input"
              name="peopleNeeded"
              onChange={e => setPeopleNeeded(e.target.value)}
              placeholder="Number of People Needed"
            />
            <input
              className="zip-input"
              name="shortDescription"
              onChange={e => setShortDescription(e.target.value)}
              placeholder="Short Description"
            />
            <input
              className="zip-input"
              name="longDescription"
              onChange={e => setLongDescription(e.target.value)}
              placeholder="Long Description"
            />

            <button className="select-opp" onClick={postOpp}>
              Post Opportunity
            </button>
          </form>
        </section>
        <section className="registered-opps">
          <h2>Volunteer Opportunities You've Posted: </h2>
          <section>
            {results.map(result => {
              return (
                <RegisteredContainer
                  key={result.id}
                  id={result.id}
                  schoolName={result.schoolName}
                  department={result.department}
                  date={result.date}
                  time={result.timeSlot}
                  schoolDistrict={result.schoolDistrict}
                  schoolAddress={result.schoolAddress}
                />
              )
            })}
          </section>
        </section>
      </div>
    </div>
  )
}