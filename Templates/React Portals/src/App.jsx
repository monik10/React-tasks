
import { useState } from "react"
import Modal from "./Modal"
const App = () => {
  let [toggle,setToggle]=useState(false)

  let handleToggle=()=>
  {
    setToggle(!toggle);
  }
  return (
    <div className="main-content">
    <button onClick={handleToggle}>{toggle ? "close":"open"}</button>
     {
      toggle ?  <Modal toggle={{toggle,handleToggle} }/>:""
     }
    </div>
  )
}

export default App