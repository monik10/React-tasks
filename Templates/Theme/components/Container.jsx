import { useContext,useRef, useState } from "react"
import { themeContextApi } from "../context/themeContext"

const Container = () => {
    const [toggle,setToggle]=useState(false);
    const {light,dark}=useContext(themeContextApi);

    let elemRef=useRef();
    let handleTheme=()=>
    {
        setToggle(!toggle);
        if(toggle === true)
        {
            elemRef.current.style.background=dark.background;
            elemRef.current.style.color=dark.color;
        }
        else
        {
            elemRef.current.style.background=light.background;
            elemRef.current.style.color=light.color;
        }
    }

  return (
    <div ref={elemRef}>
    <button style={{float:"right"}} onClick={handleTheme}>{toggle ? "dark":"light"}</button>
      <h1>I am Container Block</h1>
      
      <p>
      The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to prop drilling or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
      </p>
    </div>
  )
}

export default Container
