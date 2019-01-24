import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../components/Counter'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as CounterActions from '../actions/counter'

class CounterContainer extends React.Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }

  incrementIfOdd = () => {
    this.props.incrementIfOdd()
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
        incrementIfOdd={this.incrementIfOdd}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer)
