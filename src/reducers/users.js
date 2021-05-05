import { RECEIVE_USERS, ADD_ANSWER,CREATE_QUESTION ,ADD_ACCOUNT } from '../actions/users'

export function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_ANSWER:
      const { authedUser, qid, answer } = action
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
      case CREATE_QUESTION:
        const {question}=action
        return{
          ...state,
          [question.author]:{
            ...state[question.author],
            questions:state[question.author].questions.concat([question.id])
          }

        }
    case ADD_ACCOUNT:
      const { account } = action
      return {
        ...state,
        [account.id]: account
      }
    default:
      return state
  }
}
