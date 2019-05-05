import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import axios from 'axios'
import { API_URL } from '../../constants/constants'

class About extends Component {
  state = {
    person: {
      username: null,
      email: null
    }
  }

  handleKeyUp = (e) => {
    this.setState({ person: { ...this.state.person, [e.target.name]: e.target.value } })
  }

  handleClick = () => {
    axios.post(API_URL + 'test', { ...this.state })
      .then(response => {

      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render () {

    return (
      <Router>
        <Fragment>
          <div className='container row form-group'>
            <input onKeyUp={this.handleKeyUp} className='col-sm-4 form-control' name='username' placeholder='please enter your name'/>
            <input onKeyUp={this.handleKeyUp} className='col-sm-4 form-control' name='email' placeholder='please enter your mail'/>
            <button onClick={this.handleClick} className='col-sm-4 btn btn-danger'>login</button>

          </div>

        </Fragment>
      </Router>

    )

  }
}

export default About