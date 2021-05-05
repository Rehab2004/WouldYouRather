import { React, Component } from 'react'
import { connect } from 'react-redux'
class QuestionCard extends Component {
  render() {
    console.log(this.props)
    const { question, user } = this.props
    if (question === null) {
      return <p>this question doesn't exist</p>
    }
    const { name, avatarURL } = user
    //const{optionOne,optionTwo}=question

    return (
      <div className="container">
        <h5 className="user-name"> {name} asks</h5>

        <img src={avatarURL} alt="avatar" className="avatar" />
        <div>
          <p>
            <b>would you rather</b>{' '}
          </p>
        </div>
      </div>
    )
  }
}
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id]
  const user = question ? users[question.author] : null

  return {
    authedUser,
    user,
    question: question ? question : null
  }
}

export default connect(mapStateToProps)(QuestionCard)
