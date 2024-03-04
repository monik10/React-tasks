import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
    let[state,setState]=useState({symbol:<RxHamburgerMenu />,
status:true})
    let displayCard=()=>{
        document.getElementById("sidebar").classList.add("sideshow")
        setState({symbol:<RxCross1 />,status:false})

    }
    let removeCard=()=>{
        document.getElementById("sidebar").classList.remove("sideshow")
        setState({symbol:<RxHamburgerMenu />,status:true})
    }
  return (
    <div>
      <header className="container">
        <div className="navbar">
          <button onClick={()=>{state.status===true ? displayCard():removeCard()}}>
            {state.symbol}
          </button>
        </div>
      </header>
      <div className="sidebar" id="sidebar">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
