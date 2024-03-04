import { Link, useLocation ,useNavigate} from "react-router-dom"
import Moment from "moment";
import { IoArrowBack } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import courseServices from "../../services/CourseServices";
import toast from "react-hot-toast";
const CourseDetails = () => {
  let navigate=useNavigate();
    let {state:{id,title,trainer,description,createdAt}}=useLocation(); 

    let deleteCourse= async(id)=>
    {
      if(window.confirm()===true)
      {
        await courseServices.deleteService(id);
        window.location.assign("/");
        toast.success("Successfully deleted")
      }
      
      else{
        
        navigate("/");
      }
     
      
      // window.location.assign("/");
    }
  return (
    <div className="course-details">
      <header>
      <Link to={`/edit/${id}`} className="edit btn-help"><FaRegEdit /></Link>
      <Link to="/" className="delete btn-help" onClick={()=> deleteCourse(id)}><MdOutlineDelete /></Link>
      <Link to="/" className="back btn-help"><IoArrowBack /></Link>
      
      <h2>{title}</h2>
      </header>
      <main>
     <p>
        <span>Trainer:</span>
        <span>{trainer}</span>
     </p>
        <p>{description}</p>
       <footer>
       <span className="date_create">Course Created At  </span>
       <span><strong>{Moment(createdAt).fromNow()}</strong></span>
       
       </footer>
      </main>
    </div>
  )
}

export default CourseDetails