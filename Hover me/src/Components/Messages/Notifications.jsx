/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Fragment } from "react"
import Info from "./Info"


const Notifications = ({state}) => {
  
  return (
    <div>
     {
        state.map((data,index)=>{
            return <Info key={index} {...data} />
        })
     }
    </div>
  )
}

export default Notifications
