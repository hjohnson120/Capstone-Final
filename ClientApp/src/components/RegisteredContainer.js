import React from 'react'
import RegisteredInfo from './RegisteredInfoContainer'

export default function Registered(props) {
  return (
    <div className="result-size">
      <section className="opportunity-container">
        <RegisteredInfo
          id={props.id}
          schoolName={props.schoolName}
          department={props.department}
          date={props.date}
          time={props.timeSlot}
          schoolDistrict={props.schoolDistrict}
          peopleNeeded={props.peopleNeeded}
          shortDescription={props.shortDescription}
          longDescription={props.longDescription}
        />
        <button
          className="select-opp delete-opp"
          onClick={() => props.unRegister(props)}
        >
          UN-REGISTER
        </button>
      </section>
    </div>
  )
}
