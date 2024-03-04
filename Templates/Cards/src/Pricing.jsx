/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from 'react'
import JSON  from "./data.json"

const Pricing = () => {
  let[price,setPrice]=useState({
    prices:JSON
  })
  return (
    <section id="parent-container">
    <div className="plans">Plans
     <div className="price-plans">
      <h6>PRICE PLANS</h6>
     </div>
     <div className="choose-best">
      <h2>Choose the best plan for you</h2>
     </div>
    </div>
    <div id="plan-cards">
    {
      price.prices.map((plan,index)=>{
        if(plan.price==="259"){
        return (
         
          <Fragment key={index}>
          <div  id="sub-head">
          <h1 className='plan-heading'>{plan.heading}</h1>
          <div className='plan-sub'>{plan.subHeading}</div>
          <div className='plan-price'><sup>&#36;</sup>{plan.price}<sub>/MONTHLY</sub></div>
          <div className='plan-data' ><div>{plan.brand}</div><span className="tick"><i className="fa-solid fa-check"></i></span></div>
          <div className='plan-data'><div>{plan.theory}</div><span className="tick"><i className="fa-solid fa-check"></i></span></div>
          <div className='plan-data'><div>{plan.call}</div><span className="tick"><i className="fa-solid fa-check"></i></span></div>
          <div className='plan-data-support'><div>{plan.support}</div><span className="tick"><i className="fa-solid fa-check"></i></span></div>
         <button className='btn-choose'>Choose Plan</button>
          

          </div>
      

        </Fragment>)
      }
      else{
        return (
         

          
         <Fragment key={index}>
         <div  id="sub-head">
         <h1 className='plan-heading'>{plan.heading}</h1>
         <div className='plan-sub'>{plan.subHeading}</div>
         <div className='plan-price'><sup>&#36;</sup>{plan.price}<sub>/MONTHLY</sub></div>
         <div className='plan-data' ><div>{plan.brand}</div><span className="tick"><i className="fa-solid fa-check"></i></span></div>
         <div className='plan-data'><div>{plan.theory}</div><span className="tick"><i className="fa-solid fa-check"></i></span></div>
         <div className='plan-data'><div>{plan.call}</div><span className="tick"><i className="fa-solid fa-check"></i></span></div>
         <div className='plan-data-support'><div>{plan.support}</div><span className="tick"><i className="fa-solid fa-check"></i></span></div>
        <button className='btn-choose'>Choose Plan</button>
         

         </div>
     

       </Fragment>)
      }
        
      })
     

      
    }
    <div className='Basic-plans'></div>
    <div className='Basic-plans'></div>
    <div className='Basic-plans'></div>

    </div>
     
    </section>
  )
}

export default Pricing;
