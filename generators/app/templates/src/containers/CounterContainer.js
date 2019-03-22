import React from 'react'
import PropTypes from 'prop-types'
import Counter from '../components/Counter'
import ActionTypes from '../constants/actionTypes'
import { incrementIfOdd } from '../actions/counter'
import { connect } from 'react-redux'

class CounterContainer extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
  }

  increment = () => {
    this.props.dispatch({ type: ActionTypes.INCREMENT_COUNTER })
  }

  decrement = () => {
    this.props.dispatch({ type: ActionTypes.DECREMENT_COUNTER })
  }

  incrementIfOdd = () => {
    incrementIfOdd()
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

export default connect(mapStateToProps)(CounterContainer)
