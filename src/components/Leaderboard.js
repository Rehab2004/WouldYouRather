import { React, Component } from 'react'
import { connect } from 'react-redux'

class leaderboard extends Component {
  render() {
    console.log(this.props)
    const { leaders } = this.props

    return (
      <div className="container">
        {leaders.map((ele) => (
          <div className="leader" key={ele.id}>
            <img src={ele.avatarURL} className="avatar" />
            <div className="leader-info">
              <h6 style={{ color: 'blue', fontWeight: 'bold' }}>{ele.name}</h6>
              <p>
                Answered questions
                <span style={{ marginLeft: '5px', color: 'red' }}>
                  {ele.answeredQuestions}
                </span>
              </p>

              <p>
                Created questions
                <span style={{ marginLeft: '5px', color: 'red' }}>
                  {ele.createdQuestions}
                </span>
              </p>
              <div className="score">
                <div style={{ textAlign: 'center' }}>
                  {' '}
                  <p>Score</p>
                </div>

                <div id="score">
                  <p>{ele.score}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
function mapStateToProps({ users, authedUser }) {
  const score = (user) => {
    let score = Object.keys(user.answers).length + user.questions.length
    return score
  }
  const keys = Object.keys(users)
  const array = keys.map((key) => {
    return {
      authedUser,
      id: key,
      name: users[key].name,
      avatarURL: users[key].avatarURL,
      answeredQuestions: Object.keys(users[key].answers).length,
      createdQuestions: users[key].questions.length,
      score: score(users[key])
    }
  })

  return {
    leaders: array.sort((a, b) => b.score - a.score)
  }
}

export default connect(mapStateToProps)(leaderboard)
