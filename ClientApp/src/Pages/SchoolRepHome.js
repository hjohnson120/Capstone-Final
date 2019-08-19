import React, { useState, useEffect } from 'react'
import PostedOpps from '../components/PostedOppsContainer'
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
  const [display, setDisplay] = useState('')
  const [schoolDistrict, setSchoolDistrict] = useState('')

  useEffect(() => {
    if (results.length === 0) {
      setDisplay('')
    } else {
      setDisplay('The Volunteer Opportunities You Have Posted')
    }
  }, [results])

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
          schoolAddress,
          schoolDistrict
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      .then(resp => {
        console.log(resp.data)
        axios
          .get('/api/VolunteerOpps', {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token')
            }
          })
          .then(resp => {
            console.log(resp.data)
            setResults(resp.data)
            setSchoolName('')
            setDate('')
            setDepartment('')
            setLongDescription('')
            setShortDescription('')
            setPeopleNeeded('')
            setTimeSlot('')
            setZipCode('')
            setSchoolAddress('')
            setSchoolDistrict('')
          })
      })
  }

  const signOut = () => {
    localStorage.clear()
    window.location.href = '/'
  }

  const deleteOpp = postedOpps => {
    console.log('clicked')
    axios
      .delete(`/api/VolunteerOpps/${postedOpps.id}`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(resp => {
        console.log(resp)
        setResults(oldResults => oldResults.filter(f => f.id !== postedOpps.id))
      })
  }

  const editOpp = postedOpps => {
    window.location.href = `/EditOpp/${postedOpps.id}`
  }

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
      <section>
        <h1 className="display title">School Representative Home</h1>
        <p>
          This page allows you to post volunteer opportunities for your school
        </p>
      </section>
      <div className="home-section">
        <section className="rep-home-search">
          <h1>Post a volunteer opportunity for your school below</h1>
          <form className="post-opp-form" onSubmit={postOpp}>
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

            <br />
            <button className="select-opp post-opp" onClick={postOpp}>
              POST OPPORTUNITY
            </button>
          </form>
        </section>
        <section>
          <h2 className="volunteer-h2 display">{display}</h2>
        </section>
        <section>
          <section className="registered-opps">
            {results.map(result => {
              console.log('parent', { result })
              return (
                <PostedOpps
                  key={result.id}
                  {...result}
                  deleteOpp={deleteOpp}
                  editOpp={editOpp}
                />
              )
            })}
          </section>
        </section>
      </div>
    </div>
  )
}
