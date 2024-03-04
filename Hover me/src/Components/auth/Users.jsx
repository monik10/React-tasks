/* eslint-disable react/prop-types */

import { Fragment } from "react"
import User from "./User"


const Users = ({state}) => {
   
    if(!state)
    {
        return <h1>Loading...</h1>
    }
    if(!state.length)
    {
        return <h1>Sorry😥,Data Not Found</h1>
    }
    else
    {
      return <Fragment>
        {
            state.map((data,index)=>
            {
             return<Fragment key={index}>
               <User key={index} {...data}/> 
             </Fragment>
            })
        }
      </Fragment>
    }
}

export default Users
