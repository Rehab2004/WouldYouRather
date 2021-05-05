import { _saveQuestionAnswer, _saveAccount } from '../utils/_Data'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const CREATE_QUESTION='CREATE_QUESTION'

export function receiveUsersAction(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function addAnswerAction({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer
  }
}
export function createQuestion(question){
  return{
    type:CREATE_QUESTION,
    question
  }
}
export function handleSaveAnswer(id, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return _saveQuestionAnswer({ authedUser, id, answer }).then(() => {
      dispatch(addAnswerAction({ authedUser, id, answer }))
    })
  }
}

function addUserAccount(account) {
  return {
    type: ADD_ACCOUNT,
    account
  }
}

export function handleSaveAccount(id, name, avatarURL) {
  return (dispatch) => {
    return _saveAccount(id, name, avatarURL).then((account) => {
      dispatch(addUserAccount(account))
    })
  }
}
