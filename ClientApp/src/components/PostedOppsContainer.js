import React from 'react'
import PostedOppsInfo from './PostedOppsInfoContainer'

export default function PostedOpps(props) {
  console.log('poc', { props })
  return (
    <div className="result-size">
      <section className="opportunity-container">
        <PostedOppsInfo {...props} />
        <button
          className="select-opp delete-opp"
          onClick={() => props.deleteOpp(props)}
        >
          Delete Opportunity
        </button>
      </section>
    </div>
  )
}
