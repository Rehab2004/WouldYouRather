import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
//import {addAnswerAction} from '../actions/users'
//import {addAnsweredQuestion} from '../actions/questions'
import { handleSaveAnswer } from '../actions/shared'
import { Redirect } from 'react-router'

class Questionpage extends Component {
  state = {
    select: '',
    name: '',
    screen: false
  }
  handleChange = (e) => {
    this.setState({
      select: e.target.value,
      name: e.target.name
    })
  }

  handleSetValues = (authedUser, qid, answer) => {
    answer = this.state.name
    qid = this.props.id
    authedUser = this.props.authedUser
    console.log(answer)
    console.log(qid)
    this.props.dispatch(handleSaveAnswer(authedUser, qid, answer))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.handleSetValues()
    this.setState({
      screen: true
    })
  }

  render() {
    if (this.props.exist === false) {
      return <Redirect to="/404" />
    }
    console.log(this.props)
    const {
      
      answers,
      id,
      question,
      answered
    
    } = this.props
    const { optionOne, optionTwo } = question
    const vote = id in answers ? answers[id] : null

    let totalAnswers = optionOne.votes.length + optionTwo.votes.length
    let numberOfOption_1 = totalAnswers - optionTwo.votes.length
    let numberOfOption_2 = totalAnswers - optionOne.votes.length

    let option_1 =
      (optionOne.votes.length /
        (optionOne.votes.length + optionTwo.votes.length)) *
      100
    let option_2 =
      (optionTwo.votes.length /
        (optionOne.votes.length + optionTwo.votes.length)) *
      100
    return (
      <div className="container">
        {answered === false && this.state.screen === false ? (
          <div className="card">
            <br></br>

            <QuestionCard id={id} />
            <form className="question-page-form" onSubmit={this.handleSubmit}>
              <div className="item">
                <input
                  id="optionOne"
                  name="optionOne"
                  value={optionOne.text}
                  checked={this.state.select === optionOne.text}
                  type="radio"
                  onChange={this.handleChange}
                />
                <label htmlFor="optionOne">{optionOne.text}</label>
              </div>
              <div className="item">
                <input
                  id="optionTwo"
                  name="optionTwo"
                  value={optionTwo.text}
                  checked={this.state.select === optionTwo.text}
                  type="radio"
                  onChange={this.handleChange}
                />
                <label htmlFor="optionTwo">{optionTwo.text}</label>
              </div>
              <button
                className="question-page-btn"
                type="submit"
                disabled={this.state.select === ''}
              >
                submit
              </button>
            </form>
          </div>
        ) : (
          <div className="result-page">
            <div>
              <QuestionCard id={id} />
            </div>

            <div className="result">
              <h5 style={{ color: 'green' }}>Results:</h5>

              <div className="option-prec">
                <p>
                  would you rather
                  <span style={{ marginLeft: '5px' }}>{optionOne.text}</span>
                </p>

                {(this.state.select === optionOne.text) | answered &&
                  vote === 'optionOne' && (
                    <span className="your-vote">your vote</span>
                  )}

                <div className="progress bar">
                  <div
                    className="progress-bar  bg-success"
                    role="progressbar"
                    style={{ width: `${option_1}%` }}
                    aria-valuenow={option_1}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >{`${option_1}%`}</div>
                </div>
                <div className="total">
                  <p>{`${numberOfOption_1} out of ${totalAnswers} votes`}</p>
                </div>
              </div>
              <hr></hr>
              <div className="option-prec">
                <p>
                  would you rather
                  <span style={{ marginLeft: '5px' }}>{optionTwo.text}</span>
                </p>

                {(this.state.select === optionTwo.text) | answered &&
                  vote === 'optionTwo' && (
                    <span className="your-vote">your vote</span>
                  )}

                <div className="progress bar">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: `${option_2}%` }}
                    aria-valuenow={option_2}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >{`${option_2}%`}</div>
                </div>
                <div className="total">
                  <p>{`${numberOfOption_2} out of ${totalAnswers} votes`}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps({ questions, authedUser, users }, props) {
  const { id } = props.match.params
  const exist = id in questions ? true : false
  const user = users[authedUser]
  const { answers } = user

  return {
    exist,
    answers,
    id,
    authedUser,
    question: exist ? questions[id] : null,
    answered: id in answers ? true : false
  }
}
export default connect(mapStateToProps)(Questionpage)
