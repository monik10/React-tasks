/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom"
import { useContext ,Fragment} from "react";
import { AuthContextApi } from "../../../Context/AuthContext";
const SidebarMenu = () => {
    let {isAuth}=useContext(AuthContextApi);
    console.log(isAuth)
  
    const IsAuth=()=>
    {
      return <Fragment>
         <li>
                <NavLink to="/create-course" className={({ isActive})=>isActive ? "active":" "}>Create Course</NavLink>
            </li>
            <li>
                <NavLink to="/users" className={({ isActive})=>isActive ? "active":" "}>Users</NavLink>
            </li>
            <li>
                <NavLink to="/git-users" className={({ isActive})=>isActive ? "active":" "}>Git-Users</NavLink>
            </li>
            <li>
                <NavLink to="/create-products" className={({ isActive})=>isActive ? "active":" "}>Create-Products</NavLink>
            </li>
          </Fragment>
    }
   
  return (
    
        <ul>
            <li>
                <NavLink to="/" className={({ isActive})=>isActive ? "active":" "} >Home</NavLink>
            </li>
            {
              isAuth?<IsAuth/>:""
            }
           
        </ul>
   

  )
}

export default SidebarMenu