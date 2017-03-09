import React, { Component } from 'react'
import CounterContainer from './CounterContainer'
import { Header } from '../components'

class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <CounterContainer />
      </div>
    )
  }
}

export default AppContainer
