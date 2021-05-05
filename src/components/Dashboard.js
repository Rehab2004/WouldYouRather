import { React, Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'
class Dashboard extends Component {
  state = {
    screen: false,
    isActive: true
  }

  handleToggleFalse = () => {
    this.setState({
      screen: false,
      isActive: true
    })
  }
  handleToggleTrue = () => {
    this.setState({
      screen: true,
      isActive: false
    })
  }
  render() {
    console.log(this.props)
    const { isActive, screen } = this.state
    const { authordUser, questions } = this.props
    const { answers } = authordUser
    const answered = Object.keys(answers)

    const unanswered = [
      ...this.props.questionsIds.filter((ele) => !answered.includes(ele))
    ]
    console.log(unanswered)

    return (
      <div className="container questions-list">
        <button
          onClick={this.handleToggleFalse}
          className={isActive ? 'dashboard-btn-active' : 'dashboard-btn'}
        >
          unaswered questions
        </button>
        <span style={{ marginLeft: '10px' }}>/</span>
        <button
          onClick={this.handleToggleTrue}
          className={isActive ? 'dashboard-btn' : 'dashboard-btn-active'}
        >
          answerd questions
        </button>
        {screen === false ? (
          <ul>
            {unanswered.map((id) => (
              <li key={id}>
                <QuestionCard id={id} />
                <p>...{questions[id].optionOne.text.slice(0, 8)}...</p>
                <div className="view-poll">
                  <Link to={`/question/${id}`}>veiw poll</Link>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <ul id="answered-list" className="dashboard-list">
            {answered &&
              answered.map((key) => (
                <li key={key}>
                  <QuestionCard id={key} />
                  <p>...{questions[key].optionOne.text.slice(0, 8)}...</p>
                  <div className="view-poll">
                    <Link to={`/question/${key}`}>view poll</Link>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>
    )
  }
}
function mapStateToProps({ questions, authedUser, users }) {
  const authordUser = authedUser !== null && users[authedUser]
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    authedUser,
    questions,
    authordUser
  }
}

export default connect(mapStateToProps)(Dashboard)
