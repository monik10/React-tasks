/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Users from './Components/auth/Users'

const App = () => {

  let [state,setState]=useState([
    {
      name:"moni",
      age:21,
      company:"Fireflink",
      salary:"25000",
      role:"User"
    },
    {
      name:"kavi",
      age:22,
      company:"Testyantra",
      salary:"28000",
      role:"Admin"
    }])
  return <div>
    <Users state={state}/>
  </div>

}

export default App
