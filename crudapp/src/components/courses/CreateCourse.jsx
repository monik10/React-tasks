/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import courseServices from './../../services/CourseServices';
import toast from "react-hot-toast";

const CreateCourse = () => {
  let navigate=useNavigate();
  let [state,setState]=useState({
    title:"",
    trainer:"",
    description:"",
    createdAt:"",
    isLoading:false,
  })
 let {title,trainer,isLoading,description,createdAt}=state;
  let handleChange=e=>{
    let {name,value} =e.target;
    setState({...state,[name]:value})
  }
  let handleSubmit= async e=>{
    e.preventDefault();
    try{
      let payload={title,trainer,description,createdAt};
      courseServices.createService(payload);
      toast.success("successfully course has been created");
      navigate("/");
}
    catch(error){
      console.log("error");
    }
  }
  return (
    <section className="content">
    <main className="authBlock">
    <h1>Create Courses</h1>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="title">Title</label> 
        <input type="text" name="title" value={title} onChange={handleChange} required placeholder="Enter Title"/>
        </div>
        <div className="form-group">
        <label htmlFor="trainer">Trainer</label> 
        <input type="text" name="trainer" value={trainer} onChange={handleChange} required placeholder="Enter Trainer"/>
        </div>
        <div className="form-group desc_block">
        <label htmlFor="description">Description</label> 
        <textarea type="text" name="description" value={description} onChange={handleChange} cols="10" rows="2" placeholder="Write Description"></textarea>
        </div>
        <div className="form-group at">
        <label htmlFor="createdAt">Course Created at</label> 
        <input type="date" name="createdAt" value={createdAt} onChange={handleChange}  placeholder="Enter Date"/>
        </div>
        <div className="form-group">
            <button>{isLoading ? "loading":"Create Course"}</button>
        </div>
    </form>
</main>
</section>
  )
}

export default CreateCourse