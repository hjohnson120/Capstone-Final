import React, { Component } from 'react'

class OpportunitiesContainer extends Component {
  render() {
    return (
      <div className="school-thing">
        <section className="opportunity-container">
          <h2>{this.props.schoolName}</h2>
          <section className="opportunity-info">
            <p>Department:{this.props.department}</p>
            <p>Date:{this.props.date}</p>
            <p>Time:{this.props.time}</p>
            <p>School District:{this.props.schoolDistrict}</p>
          </section>
          <button className="select-opp">Sign Me Up!</button>
        </section>
      </div>
    )
  }
}

export default OpportunitiesContainer
