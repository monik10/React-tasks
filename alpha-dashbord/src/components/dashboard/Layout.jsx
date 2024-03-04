/* eslint-disable no-unused-vars */

import "./layout.css"
import { MdOutlineDashboard } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { VscFolderActive } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import "/src/components/navbar/navbar.css"
import Notification from "../Notification/Notification";
import { useState } from "react";
import Logout from './../pages/Logout';

const Layout = () => {

  let[name,setName]=useState("");
  
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = (confirmed) => {
    setIsOpen(false);

    if (confirmed) {
      if (handleLogout) {
        handleLogout();
      }
    }
  };

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  
  return <>
  <Navbar/>
  <div className="main-container">
  <div className="dashboard">
  <div className="sidebar">
    <div className="profile">
      <div className="profile-img-box">
        <img className="profile-image-content" src="/public/profile.jpg" alt="" />
      </div>
      <div className="edit-profile"><IoSettingsOutline className="edit-image-icon"/></div>
      <h3 className="name">John</h3>
      <p className="desc">Beginner</p>
    </div>
    <div className="sidebar-items">
      <NavLink  to="/dashboard" id="sidebar-item" className={({isActive})=>(isActive?"active":"")}>
        <div className="si-img-box">
          <MdOutlineDashboard className="dash_icons"/>
        </div>
        <h4 className="si-name">Dashboard</h4>
      </NavLink>
      <NavLink to="/batch" id="sidebar-item" className={({isActive})=>(isActive?"active":"")}>
        <div className="si-img-box">
        <MdPeopleAlt className="dash_icons"/>
         </div>
         <h4 className="si-name">Batch</h4>
      </NavLink>
      <NavLink to="/attendance" id="sidebar-item" className={({isActive})=>(isActive?"active":"")}>
        <div className="si-img-box">
        <VscFolderActive className="dash_icons" />
        </div>
        <h4 className="si-name">Attendance</h4>
      </NavLink>
      <NavLink to="/logout" id="sidebar-item" className={({isActive})=>(isActive?"active":"")} onClick={openPopup} >
      {
        setIsOpen?<Logout data={{handleLogout,openPopup,closePopup}} val={isOpen}/>:" "
      }
        <div className="si-img-box">
        <RiLogoutBoxRLine className="dash_icons" />
        </div>
        <h4 className="si-name">Logout</h4>
    
        </NavLink>
    </div>
    
  </div>
  
</div> 
{/* <Notification/> */}
     
  </div>
  <Outlet/>
</>


    
  
}

export default Layout;