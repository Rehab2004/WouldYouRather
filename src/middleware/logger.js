const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log('the action is', action)
  const state = next(action)
  console.log('the new state', store.getState())
  console.groupEnd()
  return state
}

export default logger
