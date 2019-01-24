import ActionTypes from '../constants/actionTypes'
import { createAction } from 'redux-actions'

export const increment = createAction(ActionTypes.INCREMENT_COUNTER)
export const decrement = createAction(ActionTypes.DECREMENT_COUNTER)

export function incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState()

    if (counter % 2 === 0) {
      return
    }

    dispatch(increment())
  }
}

