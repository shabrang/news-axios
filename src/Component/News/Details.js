import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { API_URL } from '../../constants/constants'

class Details extends Component {
  state = {
    info: []
  }

  componentDidMount () {
    axios.get(API_URL + 'posts/' + this.props.match.params.id)
      .then(response => {
        this.setState({ info: response.data })
      })
  }

  render () {
    return (
      <Fragment>
        <div className='jumbotron'>
          <div className='container border-danger'/>
          <div className='text-center text-danger m-2 font-weight-bold '>{this.state.info.title}</div>
          <p className='text-dark p-2 m-lg-2'>{this.state.info.body}</p>
        </div>

      </Fragment>

    )
  }

}

export default Details