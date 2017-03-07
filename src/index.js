import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import AppContainer from './containers/AppContainer'
import './index.css'

render(
  <Provider store={configureStore()}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
