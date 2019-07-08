import React from 'react'
import PostedOppsInfo from './PostedOppsInfoContainer'

export default function PostedOpps(props) {
  return (
    <div className="result-size">
      <section className="opportunity-container">
        <PostedOppsInfo
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
        <button className="select-opp" onClick={() => props.deleteOpp(props)}>
          Delete Oppurtunity
        </button>
      </section>
    </div>
  )
}
