


/* eslint-disable no-unused-vars */
import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContextApi } from "../../Context/AuthContext";


const Login = () => {
  let {login}=useContext(AuthContextApi)
  let navigate=useNavigate();
  let [state,setState]=useState({
   
    email:"",
    password:"",
    isLoading:false,
  })
 
  let {email,password,isLoading}=state;
  let handleChange=e=>{
    let {name,value} =e.target;
    setState({...state,[name]:value})
  }
  let handleSubmit= async e=>{
    e.preventDefault();
    try{
      let payload={email,password,isLoading};
      await login(payload);
      navigate("/users");
      toast.success("Successfully Logged in");
    
    }
    catch(error){
      toast.error(error.response.statusText);
    }
  }
  return (
    <section className="content">
    <main className="authBlock">
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      
        <div className="form-group desc_block">
        <label htmlFor="email">Email</label> 
        <input type="email" name="email" value={email} onChange={handleChange} required placeholder="Enter Email"/>
        </div>
        <div className="form-group desc_block">
        <label htmlFor="password">Password</label> 
        <input type="password" name="password" value={password} onChange={handleChange} required placeholder="Password"></input>
        </div>
        
       
        

        <div className="form-group">
            <button>{isLoading ? "loading":"Login"}</button>
        </div>
    </form>
</main>
</section>
  )
}

export default Login;