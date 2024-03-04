/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Fragment } from "react"


const Navbar = ({data:{isLoggedIn,isSetLoggedIn}}) => {
   


const IsAuthenticated = ()=>
{
    return  <Fragment>
              
              <li>
                  <button onClick={()=>isSetLoggedIn(false)}>Logout</button>
              </li>
              </Fragment>
        
}

const IsAnonymousUser =()=>
{
    return <Fragment>
                 
                  <li>
                      <a href="">Login</a>
                  </li>
                  <li>
                      <a href="">Register</a>
                  </li>
                  </Fragment>
}
   
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
                  {isLoggedIn === true ? <IsAuthenticated/> : <IsAnonymousUser/>}
                 
              </ul>
          </div>
        </article>
      
        </section>)


    }

    
    
  


export default Navbar
