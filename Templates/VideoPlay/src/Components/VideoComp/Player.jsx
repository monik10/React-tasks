import { useState } from "react";
import {useRef} from "react";


const Player = ({selectedVideo}) => {
    let videoRef=useRef();
    let[toggle,setToggle]=useState(true);
    let HandleVideoControls=()=>
    {

    setToggle(!toggle);
if(toggle===true)
{
    videoRef.current.play();
    videoRef.current.autoPlay=true;
}
else
{
    videoRef.current.pause();
}
    };
    
  return (
    <div>
     <video src={selectedVideo} ref={videoRef} autoPlay/>
     <button onClick={HandleVideoControls}>{toggle ? "play":"pause"}</button>
    </div>
  )
}

export default Player
