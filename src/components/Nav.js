import React, { Component } from 'react'
import {  NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { unAuthoredAction } from '../actions/authoredUser'


class Nav extends Component {
  handleChange = () => {
    this.props.dispatch(unAuthoredAction(null))
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        <nav className="nav">
          <ul>
            <li>
              <NavLink exact to="/">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/add">
                New question
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/leaderboard">
                leaderboard
              </NavLink>
            </li>
          </ul>
          {this.props.authedUser !== null && (
            <ul className="authed-info">
              <li>
                <p>
                  <b>
                    Hello {this.props.activeUser && this.props.activeUser.name}{' '}
                  </b>
                </p>
              </li>
              <li>
                <img
                  src={this.props.activeUser.avatarURL}
                  alt="avatar"
                  className="nav-avatar"
                />
              </li>
              <li>
                <button onClick={this.handleChange} className="logout">
                  Logout
                </button>
              </li>
            </ul>
          )}
        </nav>
        <hr
          style={{ marginTop: '-20px', color: '#700662', height: '4px' }}
        ></hr>
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser }) {
  const activeUser = authedUser !== null && users[authedUser]

  return {
    authedUser,
    activeUser
  }
}
export default connect(mapStateToProps)(Nav)
