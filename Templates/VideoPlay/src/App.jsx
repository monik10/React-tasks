/* eslint-disable no-unused-vars */
import { useState } from "react"
import JSON from "./video.json"
import VideoContainer from "./Components/VideoComp/VideoContainer";



const App = () => {

  let[state,setState]=useState(JSON);
  let[selectedVideo,setSelectedVideo]=useState(state[0].contentUrl)
  let handleClick=(item)=>{
    return setSelectedVideo(item.contentUrl);
  }
 
  return (
  
      <VideoContainer state={state} selectedVideo={selectedVideo} handleClick={handleClick}/>
   
  )
}

export default App

