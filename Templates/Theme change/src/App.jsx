/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react'
import { IoPartlySunny } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
// import ThemeMode from './ThemeMode';



const App = () => {
    let[rate,setRate]=useState([{Trainer:"Trainer-1",Rating:4,},{Trainer:"Trainer-2",Rating:3,},{Trainer:"Trainer-3", Rating:5}]
    )
    let[color,setColor]=useState("white")
  return (
    <div className="gallery">
    
    <div className='nav'>
    {/* <ThemeMode data={{isTheme,isSetTheme}}/> */}
    <button className ="btn" onClick={()=>
    {
      
      if(color === "white")
      {
        setColor("black")
      let a=document.querySelector("body");
      a.style.background="black";
      }
      else{
        setColor("white")
        let a=document.querySelector("body");
      a.style.background="white";
      }
    }}><IoPartlySunny /></button>
    
   
    </div>
    
    {
     rate.map((data,index)=>{ 
        if(data.Rating ===4)
        {
            return (  <Fragment key={index}>
         <div className="content-1">
          <h2>{data.Trainer}</h2>
          <img src="https://img.freepik.com/free-photo/cheerful-young-caucasian-businessman_171337-727.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704153600&semt=ais"/>
         <button className="buy-1">Rating - {data.Rating}</button>
          </div> 
        </Fragment>
        )
        }
        else if(data.Rating === 3)
        {
            return (  <Fragment key={index}>
         <div className="content-2">
          <h2>{data.Trainer}</h2>
          <img src="https://t4.ftcdn.net/jpg/01/35/52/69/360_F_135526925_xQLz7x6SOI1X1FmxyHY3pm7ijnJeUatI.jpg"/>
         <button className="buy-2">Rating - {data.Rating}</button>
          </div> 
        </Fragment>
        )
        }
        else if(data.Rating >4)
        {
            return (  <Fragment key={index}>
         <div className="content-3">
          <h2>{data.Trainer}</h2>
          <img src="https://img.freepik.com/premium-photo/portrait-handsome-confident-arabian-indian-successful-businessman-entrepreneur-lawyer-formal-suit-sit-work-desk-with-laptop-modern-creative-office-looks-camera-smile-friendly_754108-887.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=ais"/>
         <button className="buy-3">Rating - {data.Rating}</button>
          </div> 
        </Fragment>
        )
        }
        
    } )

   
}
</div>
      

)}


export default App
