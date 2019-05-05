import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from '../About/About'
import PageNotFound from '../Pages/404'
import News from '../News/News'
import Details from '../News/Details'
import Home from './Home'

class HomeRouter extends Component {
  render () {

    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/news/:id' component={Details}/>
        <Route path='/about-us' component={About}/>
        <Route component={PageNotFound}/>
      </Switch>
    )
  }
}

export default HomeRouter