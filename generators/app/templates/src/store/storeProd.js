import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

const middlewares = [ReduxThunk]
const enhancer = [applyMiddleware(...middlewares)]

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, ...enhancer)
}
