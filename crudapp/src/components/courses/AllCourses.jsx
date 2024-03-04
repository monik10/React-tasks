/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Spinner from "../pages/spinner/Spinner";
import Course from "./Course";
import courseServices from "../../services/CourseServices";
import SearchCourses from "../Search/SearchCourses";

const AllCourses = () => {

  let[state,setState]=useState(null);
  let[searchTerm,setSearchTerm]=useState("");
  let fetchCourses=async ()=>
  {
   let data=await courseServices.fetchService();
 setState(data);
  }

  let handleSearch=term=>{
    setSearchTerm(term);
  };
  useEffect(()=>{
    fetchCourses();
 
  },[])

  let FilteredCourse=state?.filter(val=>{
    if(searchTerm === "")
    {
      return val;
    }
    else if(val.title.toLowerCase().includes(searchTerm.toLowerCase()))
    {
      return val;
    }  
  }).map(course=>(<Course key={course.id} {...course}/> ));
  return (
    <>
    <SearchCourses handleSearch={handleSearch}/>
   <h2>All Courses</h2>
   <div className="courses">
{
  state===null ?( <Spinner/>):(
    FilteredCourse
  )
  
}
   </div>
   </>
  )
}

export default AllCourses