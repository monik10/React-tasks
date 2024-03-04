/* eslint-disable no-undef */

import { useRef,useState } from "react";
import VIDEO from "./video1.mp4"

const Video = () => {

let[play,setPlay]=useState(true);

let videoRef=useRef();

let PlayOrPause=()=>
{
setPlay(!play);
if(play===true)
{
    videoRef.current.play();
}
else{
    videoRef.current.pause();
}
}
  return (
   <section id="videoBlock">
    <article>
        <video src={VIDEO} ref={videoRef}></video>
        <button onClick={PlayOrPause}>{play?"play":"pause"}</button>
    </article>
   </section>
  )
}

export default Video
