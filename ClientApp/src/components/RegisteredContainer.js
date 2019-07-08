import React from 'react'
import RegisteredInfo from './RegisteredInfoContainer'

export default function Registered(props) {
  return (
    <div>
      <RegisteredInfo
        id={props.id}
        schoolName={props.schoolName}
        department={props.department}
        date={props.date}
        time={props.timeSlot}
        schoolDistrict={props.schoolDistrict}
      />
      <button className="select-opp" onClick={() => props.unRegister}>
        Un-Register
      </button>
    </div>
  )
}
