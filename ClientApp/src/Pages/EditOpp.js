import React, { useState, useEffect } from 'react'
import PostedOpps from '../components/PostedOppsContainer'
import axios from 'axios'

export default function EditOpp() {
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
  const [schoolDistrict, setSchoolDistrict] = useState('')

  return (
    <div className="home-section">
      <section className="rep-home-search">
        <h1>Post a volunteer opportunity for your school below</h1>
        <form className="post-opp-form" onSubmit={editOpp}>
          <input
            className="zip-input"
            name="schoolName"
            value={schoolName}
            onChange={e => setSchoolName(e.target.value)}
            placeholder="School Name"
          />
          <input
            className="zip-input"
            name="department"
            value={department}
            onChange={e => setDepartment(e.target.value)}
            placeholder="Department"
          />
          <input
            className="zip-input"
            name="date"
            value={date}
            type="date"
            onChange={e => setDate(e.target.value)}
            placeholder="Date"
          />
          <input
            className="zip-input"
            name="timeSlot"
            value={timeSlot}
            onChange={e => setTimeSlot(e.target.value)}
            placeholder="Time Slot (From-To)"
          />
          <input
            className="zip-input"
            name="zipCode"
            value={zipCode}
            onChange={e => setZipCode(e.target.value)}
            placeholder="Zip Code"
          />
          <input
            className="zip-input"
            name="schoolAddress"
            value={schoolAddress}
            onChange={e => setSchoolAddress(e.target.value)}
            placeholder="School Address"
          />
          <input
            className="zip-input"
            name="peopleNeeded"
            value={peopleNeeded}
            onChange={e => setPeopleNeeded(e.target.value)}
            placeholder="Number of People Needed"
          />
          <input
            className="zip-input"
            name="schoolDistrict"
            value={schoolDistrict}
            onChange={e => setSchoolDistrict(e.target.value)}
            placeholder="School District"
          />
          <input
            className="zip-input input-description"
            name="shortDescription"
            value={shortDescription}
            onChange={e => setShortDescription(e.target.value)}
            placeholder="Short Description"
          />
          <input
            className="zip-input input-description"
            name="longDescription"
            value={longDescription}
            onChange={e => setLongDescription(e.target.value)}
            placeholder="Long Description"
          />
        </form>
      </section>
    </div>
  )
}
