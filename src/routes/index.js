import React, { Component } from 'react'
import { CounterContainer } from '../containers'
import { Header } from '../components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="app-container">
          <Header />
           <Route path="/" component={CounterContainer} />
        </div>
      </Router>
    )
  }
}

export default Routes
