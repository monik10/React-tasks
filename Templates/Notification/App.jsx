/* eslint-disable no-unused-vars */
import { useState } from "react"
import Notifications from "./Components/Messages/Notifications"

let data=["some text..","I am Monika"];
const App = () => {
 let[messages,setMessages]=useState(data)
  return (
    <div>
    Notification
    {/* shorthand AND operator */}
    {messages.length > 1 && <sup>{messages.length}</sup>} 
   
    </div>
  )
}

export default App
