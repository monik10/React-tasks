/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { Link, NavLink } from 'react-router-dom';
import { AuthContextApi } from '../../../Context/AuthContext';
import { Fragment, useContext, useEffect } from 'react';


const Menu = () => {
  let {isAuth,Logout,current_user}=useContext(AuthContextApi);
  
  const IsAuth=()=>
  {
    return <Fragment>

    <li>
      <Link to={`users/${current_user?.id}`}>{current_user?.name}</Link>
    </li>
       <li>
          <figure>
            <picture>
              <img src={current_user?.avatar} alt={current_user?.name} className='avatar'/>
            </picture>
          </figure>      
        </li>
        <li>
                <button  className="logbtn" onClick={()=> Logout()}>Logout</button>
        </li>
        </Fragment>
  }
  const IsAnonymous =()=>
  {
    return <Fragment>
       <li>
                <NavLink to="/login" className={({ isActive})=>isActive ? "active":" "} >Login</NavLink>
            </li>
            <li>
                <NavLink to="/signup" className={({ isActive})=>isActive ? "active":" "} >Sign Up</NavLink>
            </li>
    </Fragment>
  }
  return (
    <section className="navbar">
      <article>
        <nav>
          <ul>
           <li>
                <NavLink to="/" className={({ isActive})=>isActive ? "active":" "} >Home</NavLink>
            </li>
            {
              isAuth===undefined||null?<IsAnonymous/> :<IsAuth/>
            }
        
          </ul>
        </nav>
      </article>
    </section>
  )
}

export default Menu