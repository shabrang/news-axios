import React, { Fragment } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Details from './Details'
import { API_URL } from '../../constants/constants'

class News extends React.Component {
  state = {
    news: []
  }

  componentDidMount () {
    axios.get(API_URL + 'posts')
      .then((response) => {
        this.setState({ news: response.data })
      })
  }

  render () {
    // console.log(this.state.news)
    const { match } = this.props

    return (
      <Fragment>
        {

          this.state.news.map((news, index) => (
            <div id="result" key={index}>
              <ul className='list-group-item-action'>
                <li>
                  {console.log(news.id)}
                  <Link to={`${match.path}/${news.id}`}>{news.title}</Link>
                </li>
              </ul>
            </div>
          ))

        }
        <Route exact path={`${match.path}/:id`} component={Details}/>
      </Fragment>

    )
  }
}

export default News