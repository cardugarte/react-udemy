import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {
  const [ counter, setCounter ] = useState( value );

  const sum = () => {
    // console.log(event);
    // value = 1000;
    // setCounter(counter + 1);
    setCounter( (c) => c + 1);
  }

  const res = () => {
    setCounter( counter - 1);
  }

  const reset = () => setCounter(value);

  return(
    <>
    <h1> Counter </h1>
    <h2> { counter } </h2>
    <button onClick={ sum }>+</button>
    <button onClick={ res }>-</button>
    <button onClick={ reset }>reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 0
}