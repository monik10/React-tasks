/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Fragment } from "react"


const Navbar = ({data:{isLoggedIn,isSetLoggedIn}}) => {
   
    if(!isLoggedIn)
    {
        return (<section id="navbar">
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
      
        </section>)
    }

    
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
                      <button onClick={()=>isSetLoggedIn(false)}>Logout</button>
                  </li>
              </ul>
          </div>
        </article>
      
        </section>
        )
  
}

export default Navbar
