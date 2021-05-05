import { React, Component } from 'react'
import { connect } from 'react-redux'
import serializeForm from 'form-serialize'
import { authoredIdAction } from '../actions/authoredUser'
import { handleSaveAccount } from '../actions/users'
import { Redirect } from 'react-router-dom'
import Select from 'react-select'

class Signin extends Component {
  state = {
    authedUser: null
  }

  handleChange = (authedUser) => {
    this.setState({
      authedUser: authedUser.value
    })
  }
  handleSubmit = (e) => {
    const { authedUser } = this.state
    e.preventDefault()
    this.props.dispatch(authoredIdAction(authedUser))
  }
  handleAddUser = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    console.log(values)
    this.props.dispatch(handleSaveAccount(values))
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    if (this.props.authedUser !== null) {
      return <Redirect to={from} />
    }
    const { users, usersKeys } = this.props
    return (
      <div className="container">
        <div className="head">
          <h5>Welcom to would you Rather app!</h5>
          <p>please signin to continue</p>
        </div>

        <div className="signin">
          <br></br>
          <h4>Signin</h4>
          <form onSubmit={this.handleSubmit} className="signin-form">
            <Select
              className="signin-select"
              placeholder="user"
              value={this.state.authedUser}
              onChange={this.handleChange}
              options={usersKeys.map((item) => ({
                value: users[item].id,
                label: users[item].name
              }))}
            />

            <button type="submit" className="signin-btn">
              submit
            </button>
          </form>
          <p>create account?</p>
          <div className="container">
            <form onSubmit={this.handleAddUser} className="create-account">
              <div className="form-item">
                <input type="password" name="id" placeholder="Enter password" />
              </div>
              <div className="form-item">
                <input type="text" name="name" placeholder="Entere name" />
              </div>
              <div className="form-item">
                <input
                  type="text"
                  name="avatarURL"
                  placeholder="Enter avatarURL"
                />
              </div>
              <button type="submit" className="create-btn">
                create
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    users,
    usersKeys: Object.keys(users),
    authedUser
  }
}

export default connect(mapStateToProps)(Signin)
