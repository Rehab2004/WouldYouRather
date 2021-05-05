import { receiveUsersAction, addAnswerAction,createQuestion } from './users'
import { receiveQuestionsAction, addAnsweredQuestion,addQuestion } from './questions'
import { authoredIdAction } from './authoredUser'
import { getInitialData, _saveQuestionAnswer,_saveQuestion } from '../utils/_Data'
import { showLoading, hideLoading } from 'react-redux-loading'
const authorId = null
export function handleIntialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData().then(({ users, questions }) => {
      console.log({ users, questions })
      dispatch(receiveUsersAction(users))
      dispatch(receiveQuestionsAction(questions))
      dispatch(authoredIdAction(authorId))
      dispatch(hideLoading())
    })
  }
}

export function handleSaveAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    //const {authedUser}=getState()

    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(addAnswerAction({ authedUser, qid, answer }))
      dispatch(addAnsweredQuestion({ authedUser, qid, answer }))
    })
  }
}

export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return _saveQuestion({ optionOneText, optionTwoText, authedUser }).then(
      (question) => {
        dispatch(addQuestion(question))
        dispatch(createQuestion(question))
      }
    )
  }
}