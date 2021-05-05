import { AUTHORED_ID, UNAUTHORED_ID } from '../actions/authoredUser'

export function authedUser(state = null, action) {
  switch (action.type) {
    case AUTHORED_ID:
      return action.id
    case UNAUTHORED_ID:
      return action.value
    default:
      return state
  }
}
