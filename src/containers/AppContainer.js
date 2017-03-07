import React, { Component } from 'react'
import CounterApp from './CounterApp'
import Header from '../components/Header'

class AppContainer extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
        <CounterApp />
      </div>
    )
  }
}

export default AppContainer
