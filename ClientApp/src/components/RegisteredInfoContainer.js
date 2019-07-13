import React from 'react'
import Moment from 'react-moment'

export default function RegisteredInfo(props) {
  return (
    <section>
      <h2 className="school-name">{props.schoolName}</h2>
      <section className="opportunity-info">
        <p>
          Department : {''}
          <span className="school-info">
            {''}
            {props.department}
          </span>
        </p>
        <p>
          Date :
          <span className="school-info">
            {' '}
            {''}
            <Moment format="MM/DD/YYYY">{props.date}</Moment>
          </span>
        </p>
        <p>
          Time :{' '}
          <span className="school-info">
            {''}
            {props.timeSlot}
          </span>
        </p>
        <p>
          {' '}
          School District : {''}
          <span className="school-info">{props.schoolDistrict}</span>
        </p>{' '}
        <p>
          {' '}
          Number of People Needed : {''}
          <span className="school-info">{props.peopleNeeded}</span>
        </p>
        <p>
          <span className="school-info">{props.shortDescription}</span>
        </p>
        <p>
          Info :
          <span className="school-info">
            {''}
            {props.longDescription}
          </span>
        </p>
      </section>
    </section>
  )
}
