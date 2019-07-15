import React, { Component } from 'react'
import Moment from 'react-moment'

class OpportunitiesContainer extends Component {
  render() {
    return (
      <div className="result-size">
        <section className="opportunity-container">
          <h2 className="school-name">{this.props.schoolName}</h2>
          <section className="opportunity-info">
            <p>
              Department : {''}
              <span className="school-info">{this.props.department}</span>
            </p>
            <p>
              Date : {''}
              <span className="school-info">
                <Moment format="MM/DD/YYYY">{this.props.date}</Moment>
              </span>
            </p>
            <p>
              Time : {''} <span className="school-info">{this.props.time}</span>
            </p>
            <p>
              <span className="school-info">{this.props.shortDescription}</span>
            </p>
            <p>
              Info : {''}
              <span className="school-info">{this.props.longDescription}</span>
            </p>
            <p>
              People Needed : {''}
              <span className="school-info">{this.props.peopleNeeded}</span>
            </p>
            <p>
              School Address : {''}
              <span className="school-info">{this.props.schoolAddress}</span>
            </p>
            <p>
              School District : {''}
              <span className="school-info">{this.props.schoolDistrict}</span>
            </p>
          </section>
          <button
            onClick={() => this.props.register(this.props.id)}
            className="select-opp search-button"
          >
            SIGN ME UP!
          </button>
        </section>
      </div>
    )
  }
}

export default OpportunitiesContainer
