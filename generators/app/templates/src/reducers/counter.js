import ActionTypes from '../constants/actionTypes'

const initialState = 0

export default function counter(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return state + 1
    case ActionTypes.DECREMENT_COUNTER:
      return state - 1
    default:
      return state
  }
}
