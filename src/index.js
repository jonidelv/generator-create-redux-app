import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './App'
import './index.css'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
