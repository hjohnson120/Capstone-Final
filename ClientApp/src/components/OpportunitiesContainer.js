import React, { Component } from 'react'
import Moment from Moment 

class OpportunitiesContainer extends Component {
  render() {
    return (
      <div className="result-size">
        <section className="opportunity-container">
          <h2>{this.props.schoolName}</h2>
          <section className="opportunity-info">
            <p>
              Description --
              <span className="school-info">{this.props.department}</span>
            </p>
            <p>
              Date -- <span className="school-info">{this.props.date}</span>
            </p>
            <p>
              Time -- <span className="school-info">{this.props.time}</span>
            </p>
            <p>
              School District --
              <span className="school-info">{this.props.schoolDistrict}</span>
            </p>
          </section>
          <button className="select-opp">Sign Me Up!</button>
        </section>
      </div>
    )
  }
}

export default OpportunitiesContainer
