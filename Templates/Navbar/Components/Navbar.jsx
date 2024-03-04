/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'


const Navbar = (props) => {

    let {isLoggedIn,isSetLoggedIn}=props.data;

    let changeData=()=>
    {
        isSetLoggedIn(false);
    }
    
if(isLoggedIn===true)
{
  return (
  <section id="navbar">
  <article className='container'>
    <div className='logoBlock'>Logo</div>
    <div className='menuBlock'>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Services</a>
            </li>
            <li>
                <button onClick={changeData}>Logout</button>
            </li>
        </ul>
    </div>
  </article>

  </section>
  )
}
else
{
  return (
  <section id="navbar">
  <article className='container'>
    <div className='logoBlock'>Logo</div>
    <div className='menuBlock'>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Services</a>
            </li>
            <li>
                <a href="">Login</a>
            </li>
            <li>
                <a href="">Register</a>
            </li>
        </ul>
    </div>
  </article>

  </section>
  )
}
}

export default Navbar
