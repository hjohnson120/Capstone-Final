import React, { Component } from 'react'
import Moment from 'react-moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLines } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

class OpportunitiesContainer extends Component {
  register = e => {
    e.preventDefault()
    axios
      .post(
        '/api/RegisteredOpps',
        {
          volunteerOppsId: this.props.id
        },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
      .then(resp => {
        console.log(resp)
      })
  }
  render() {
    return (
      <div className="result-size">
        <section className="opportunity-container">
          <h2 className="school-name">{this.props.schoolName}</h2>
          <section className="opportunity-info">
            <p>
              <span className="school-info">{this.props.department}</span>
            </p>
            <p>
              <span className="school-info">
                <Moment format="MM/DD/YYYY">{this.props.date}</Moment>
              </span>
            </p>
            <p>
              <span className="school-info">{this.props.time}</span>
            </p>
            <p>
              <span className="school-info">{this.props.schoolDistrict}</span>
            </p>
          </section>
          <button onClick={this.register} className="select-opp">
            Sign Me Up!
          </button>
        </section>
      </div>
    )
  }
}

export default OpportunitiesContainer
