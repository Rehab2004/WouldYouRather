//import './App.css'

import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleIntialData } from '../actions/shared'
import Dashboard from './Dashboard'
import Signin from './Signin'
import Nav from './Nav'
import Questionpage from './Questionpage'
import Newquestion from './Newquestion'
import leaderboard from './Leaderboard'
import notFound from './404'
import LoadingBar from 'react-redux-loading'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.authedUser !== null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
)

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleIntialData())
  }

  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />

          <div className="container">
            <Nav />

            <Switch>
              <Route path="/login" exact component={Signin} />

              <PrivateRoute
                path="/"
                exact
                authedUser={this.props.authedUser}
                component={Dashboard}
              />

              <PrivateRoute
                path="/question/:id"
                exact
                authedUser={this.props.authedUser}
                component={Questionpage}
              />
              <PrivateRoute
                path="/add"
                exact
                authedUser={this.props.authedUser}
                component={Newquestion}
              />
              <PrivateRoute
                path="/leaderboard"
                exact
                authedUser={this.props.authedUser}
                component={leaderboard}
              />
              <Route component={notFound} />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App)
