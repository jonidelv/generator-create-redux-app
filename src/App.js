import React, { Component } from 'react'
import CounterApp from './containers/CounterApp'
import logo from './assets/logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CounterApp />
      </div>
    )
  }
}

export default App
