import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/shared'
import { Redirect } from 'react-router-dom'

class Newquestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }
  handleChangeOption_1 = (e) => {
    this.setState({
      optionOne: e.target.value
    })
  }
  handleChangeOption_2 = (e) => {
    this.setState({
      optionTwo: e.target.value
    })
  }
  handelSubmit = (e) => {
    e.preventDefault()
    const { optionOne, optionTwo } = this.state
    console.log(optionOne)
    console.log(optionTwo)
    this.props.dispatch(handleSaveQuestion(optionOne, optionTwo))
    this.setState({
      optionOne: '',
      optionTwo: '',
      toHome: true
    })
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state
    if (toHome === true) {
      return <Redirect to="/" />
    }
    return (
      <div className="container">
        <div className="card">
          <h5 style={{ color: 'green' }}>Create New Question</h5>

          <hr
            style={{
              height: '3px',
              boxShadow: ` 1px 1px 1px rgb(136, 134, 134)`
            }}
          ></hr>

          <p style={{ color: 'green' }}>complete question</p>
          <div>
            <p>
              <b>Would you rather...</b>
            </p>
            <form className="new-question-form" onSubmit={this.handelSubmit}>
              <input
                type="text"
                placeholder="Enter option one text"
                value={optionOne}
                onChange={this.handleChangeOption_1}
              />
              <h6 className="line">OR</h6>
              <input
                type="text"
                placeholder="Enter option two text"
                value={optionTwo}
                onChange={this.handleChangeOption_2}
              />
              <button
                className="new-question-btn"
                type="submit"
                disabled={optionOne | (optionTwo === '')}
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Newquestion)
