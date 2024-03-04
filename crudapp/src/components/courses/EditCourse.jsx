

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import { useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import courseServices from "../../services/CourseServices";
import AxiosInstances from "../../AxiosInstance/axiosInstance";
import toast from "react-hot-toast";



const EditCourse = () => {
  let navigate=useNavigate();
  let {id}=useParams();
  let [state,setState]=useState({
    title:"",
    trainer:"",
    description:"",
    updatedAt:"",
    isLoading:false,
  })
  let {title,trainer,isLoading,description,updatedAt}=state;
  useEffect(()=>{
    let fetchCourse= async()=>
    {
      let data= await courseServices.fetchId(id);
     setState(data);
    };
    fetchCourse()
},[id]);
  let handleChange=e=>{
    let {name,value} =e.target;
    setState({...state,[name]:value})
  }
  let handleSubmit= async e=>{
    e.preventDefault();
    try{
      let payload={title,trainer,description,updatedAt};
      await courseServices.updateService(id,payload)
toast.success("Course has been updated Successfully")
      
      navigate("/")

    }
    catch{
      console.log("error");
    }
  }
  return (
    <section className="content">
    <main className="authBlock">
    <h1>Update Courses</h1>
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
        <label htmlFor="updatedAt">Course Updated at</label> 
        <input type="date" name="updatedAt" value={updatedAt} onChange={handleChange}  placeholder="Enter Date"/>
        </div>
       
        

        <div className="form-group">
            <button>{isLoading ? "loading":"Update Course"}</button>
        </div>
    </form>
</main>
</section>
  )
}

export default EditCourse