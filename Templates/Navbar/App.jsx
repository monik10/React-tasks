/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./style.css"
import {useState} from 'react'
import Navbar from './Components/Navbar'

const App = () => {

  let[isLoggedIn,isSetLoggedIn]=useState(true);
   

  
  return (
    <div>
    <Navbar data={{isLoggedIn,isSetLoggedIn}}/>
    </div>
  )
}

export default App




