
import { Fragment,useContext } from 'react';
import { CounterContextApi } from '../context/CounterContext';


//without use context

const Counter = () => {
   
    let{count,Increment,Decrement,Reset}=useContext(CounterContextApi)
  return (
    
        (<Fragment>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </Fragment>)
  )
}

export default Counter
