

/* eslint-disable react/prop-types */

import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import AudioComp from "../AudioComp";
import { RiMenuAddLine } from "react-icons/ri";
const Navbar = ({audio}) => {
    let[state,setState]=useState({symbol:<RiMenuAddLine />,
status:true})
    let displayCard=()=>{
        document.getElementById("sidebar").classList.add("sideshow")
        setState({symbol:<RxCross1 />,status:false})

    }
    let removeCard=()=>{
        document.getElementById("sidebar").classList.remove("sideshow")
        setState({symbol:<RiMenuAddLine />,status:true})
    }
  return (
    <div>
      <header className="container">
      
        <div className="navbar">
          <button onClick={()=>{state.status===true ? displayCard():removeCard()}}>
            {state.symbol}
          </button>
          <div className='menuBlock'>
          <ul>
              <li>
                  <a href="">Blog</a>
              </li>
              <li>
                  <a href="">Get Updates</a>
              </li>
              <li>
                  <a href="">About</a>
              </li>
              <li>
                  <a href="">Login</a>
              </li>
              
          </ul>
      </div>
        </div>
      </header>
      <div className="sidebar" id="sidebar">
        <AudioComp  data={audio}/>
        
      </div>
    </div>
  );
};

export default Navbar;

