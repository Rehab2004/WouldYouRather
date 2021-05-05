import { users } from './users'
import { questions } from './questions'
import { authedUser } from './authoredUsers'

import { combineReducers } from 'redux'
import { loadingBarReducer } from 'react-redux-loading'
export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})
