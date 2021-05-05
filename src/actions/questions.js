import { _saveQuestion } from '../utils/_Data'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_ANSWERED_QUESTION = 'ADD_ANSWERED_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestionsAction(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function addAnsweredQuestion({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWERED_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

