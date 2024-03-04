
import {useState} from "react"
const App = () => {

  let[display,setDisplay]=useState(false);
    return (
      <div>
        <button onMouseEnter={()=>{setDisplay(true)}} onMouseLeave={()=>{setDisplay(false)}}>hover me get something</button>
      {display && (<div><h1>❤</h1></div>)}
      </div>
    )
  }
  
  export default App
  

