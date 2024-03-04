/* eslint-disable react/prop-types */

import Player from './Player';

const AudioComp = ({data}) => {
  
 
 let handle=(val)=>{
        const audio=new Audio(val);
        audio.play();
 }
        

  return (

   
    <article className='container-1'>
        {
            data.map((audio,index)=>{

                return(
                <div className='icon' key={index+1}>
                    <Player  data={audio}  handle={handle} ></Player>
                    
                </div>
                )
            })
        }
    </article>
  )
}

export default AudioComp