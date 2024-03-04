
import { Fragment } from 'react';
import { CounterContextApi } from './../context/CounterContext';

//without use context

const Counter = () => {
   
  return (
    <CounterContextApi.Consumer>
   {
    ({count,Increment,Decrement,Reset})=>
    {
        return(<Fragment>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </Fragment>)
    }
   }
    </CounterContextApi.Consumer>
  )
}

export default Counter
