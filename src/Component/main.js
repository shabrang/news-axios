import React, { Fragment } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import HomeRouter from './Home/HomeRouter'

function Main () {

  return (
    <Fragment>

      <ul className='navbar navbar-expand-sm bg-warning navbar-dark'>
        <li className='nav-link'>
          <Link to='/news'>News</Link>
        </li>
        <li className='nav-link'>
          <Link to='/about-us'>About us</Link>
        </li>
      </ul>

      <Switch>
        {/*<Route path='/admin' component={NewsRouter}/>*/}
        <Route component={HomeRouter}/>
      </Switch>
    </Fragment>

  )
}

export default Main