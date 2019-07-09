import React from 'react'
import Moment from 'react-moment'

export default function PostedOppsInfo(props) {
  console.log('poic', { props })
  return (
    <section className="school-container">
      <h2 className="school-name">{props.schoolName}</h2>
      <section className="opportunity-info">
        <p>
          <b>Department : </b>
          <span className="school-info">{props.department}</span>
        </p>
        <p>
          <b>Date : </b>
          <span className="school-info">
            <Moment format="MM/DD/YYYY">{props.date}</Moment>
          </span>
        </p>
        <p>
          <b>Time : </b>
          <span className="school-info">{props.timeSlot}</span>
        </p>
        <p>
          <b> School District : {''}</b>
          <span className="school-info">{props.schoolDistrict}</span>
        </p>
        <p>
          <b> School Address : {''}</b>
          <span className="school-info">{props.schoolAddress}</span>
        </p>
        <p>
          {' '}
          <b>People Needed : {''}</b>
          <span className="school-info">{props.peopleNeeded}</span>
        </p>
        <p>
          <b>Short Description : </b>
          <span className="school-info">{props.shortDescription}</span>
        </p>
        <p>
          <b>Info : </b>
          <span className="school-info">{props.longDescription}</span>
        </p>
      </section>
    </section>
  )
}
