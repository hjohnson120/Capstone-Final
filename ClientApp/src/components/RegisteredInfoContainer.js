import React from 'react'
import Moment from 'react-moment'

export default function RegisteredInfo(props) {
  return (
    <div className="result-size">
      <section className="opportunity-container">
        <h2 className="school-name">{props.schoolName}</h2>
        <section className="opportunity-info">
          <p>
            <span className="school-info">{props.department}</span>
          </p>
          <p>
            <span className="school-info">
              <Moment format="MM/DD/YYYY">{props.date}</Moment>
            </span>
          </p>
          <p>
            <span className="school-info">{props.time}</span>
          </p>
          <p>
            <span className="school-info">{props.schoolDistrict}</span>
          </p>
          <p>
            <span className="school-info">{props.shortDescription}</span>
          </p>
          <p>
            <span className="school-info">{props.longDescription}</span>
          </p>
        </section>
      </section>
    </div>
  )
}
