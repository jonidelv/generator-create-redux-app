import React, { PropTypes } from 'react'

export default function Counter({
  increment,
  incrementIfOdd,
  decrement,
  counter,
}) {
  return (
    <section>
      <p className="intro">
        To get started, edit <code>src/routes/index.js</code>
        and save to reload.
      </p>
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
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
