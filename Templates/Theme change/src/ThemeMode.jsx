/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react'

const ThemeMode = ({data:{isTheme,isSetTheme}}) => {

    let darkTheme=()=>{
        let a=document.querySelector("body");
        a.style.background="black";
    }
    
    let lightTheme=()=>{
        let a=document.querySelector("body");
        a.style.background="white";
    }

const DarkTheme=()=>
{
    return(<Fragment>
   <button onClick={darkTheme}>Dark theme</button>

   </Fragment> )
}

const LightTheme=()=>
{
   <button onClick={()=>isSetTheme(false)}>light theme</button>
    
}


  return (
    <div>
    {/* <button>Dark theme</button> */}
      {isTheme=== true ? <DarkTheme /> :<LightTheme/>}
    </div>
  )
}

export default ThemeMode
