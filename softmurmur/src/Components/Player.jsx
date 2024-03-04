

const Player = (probs) => {

  let {link,iconUrl}=probs.data;
  
return (
  <div className="icon">
    
  <img src={iconUrl} alt="Photo" onClick={()=>probs.handle(link)} />
  
              
         
      
  </div>
)
}

export default Player