import ActionTypes from '../constants/actionTypes'
import store from '../store'

export function incrementIfOdd() {
  const { counter } = store.getState()
  if (counter % 2 === 0) return
  store.dispatch({ type: ActionTypes.INCREMENT_COUNTER })
}