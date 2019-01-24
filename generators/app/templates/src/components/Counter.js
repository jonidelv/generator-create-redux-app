import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Intro = styled.p`
  font-size: large;
`

function Counter({ increment, incrementIfOdd, decrement, counter }) {
  return (
    <section>
      <Intro>
        To get started, edit <code>src/routes/index.js </code>
        and save to reload.
      </Intro>
      <p>
        Clicked: {counter} times <button onClick={increment}>+</button> <button onClick={decrement}>-</button>{' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
      </p>
    </section>
  )
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
}

export default Counter
