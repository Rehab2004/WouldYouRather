export const AUTHORED_ID = 'AUTHORED_ID'
export const UNAUTHORED_ID = 'UNAUTHORED_ID'

export function authoredIdAction(id) {
  return {
    type: AUTHORED_ID,
    id
  }
}
export function unAuthoredAction(value) {
  return {
    type: UNAUTHORED_ID,
    value
  }
}
