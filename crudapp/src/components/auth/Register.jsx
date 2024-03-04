

/* eslint-disable no-unused-vars */
import { useState,useContext } from "react"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AuthContextApi } from "../../Context/AuthContext";


const Register = () => {
  let {signup}=useContext(AuthContextApi)
  let navigate=useNavigate();
  let [state,setState]=useState({
   name:"",
    email:"",
    password:"",
    avatar:"",
    isLoading:false,
  })
 
  let {name,email,password,avatar,isLoading}=state;
  let handleChange=e=>{
    let {name,value} =e.target;
    setState({...state,[name]:value})
  }
  let handleSubmit= async e=>{
    e.preventDefault();
    try{
      let payload={name,email,password,avatar,isLoading};
      signup(payload)
       toast.success("successfully Registered");
      navigate("/login");

    }
    catch(error){
      console.log("error");
    }
  }
  return (
    <section className="content">
    <main className="authBlock">
    <h1>SIGN UP</h1>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="title">Name</label> 
        <input type="text" name="name" value={name} onChange={handleChange} required placeholder="Enter Name"/>
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label> 
        <input type="email" name="email" value={email} onChange={handleChange} required placeholder="Enter Email"/>
        </div>
        <div className="form-group desc_block">
        <label htmlFor="password">Password</label> 
        <input type="password" name="password" value={password} onChange={handleChange} required placeholder="Password"></input>
        </div>
        <div className="form-group at">
        <label htmlFor="createdAt">Add Photo</label> 
        <input type="url" name="avatar" value={avatar} onChange={handleChange}  placeholder="Enter Avatar Url"/>
        </div>
       
        

        <div className="form-group">
            <button>{isLoading ? "loading":"Register"}</button>
        </div>
    </form>
</main>
</section>
  )
}

export default Register