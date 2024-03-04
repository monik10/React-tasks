/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { useState } from 'react';
import withFormHandling from './../hoc/withFormHandling';

const Login = ({handleChange,handleSubmit,errors,values}) => {
  let[email,setEmail]=useState("")
  let[password,setPassword]=useState("")
  return (
    <div>
     <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="enter email" value={values.email} onChange={handleChange}></input>
      <input type="password" name="password" placeholder="enter password" value={values.password} onChange={handleChange}></input>
      <input type="text" name="company" placeholder="enter company" value={values.company} onChange={handleChange}></input>
      <button>submit</button>
     </form>
    </div>
  )
}


export default  withFormHandling(Login);
