/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";
import { useParams } from "react-router-dom"
import useFetchUser from "../hooks/UserHook";
import Moment from "moment";
import { IoArrowBack } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Spinner from './../pages/spinner/Spinner';
import { Link } from 'react-router-dom';
const SingleUser = () => {
    let {fetchSingleUser,users}=useFetchUser();
    let {id}=useParams();
    useEffect(()=>{ fetchSingleUser(id)},[])
    console.log(users.singleUser);
  return (
    <>
       {
        users.singleUser ===null ?<Spinner/>:(<div className="course-details">
      <header>
      <Link to={`/edit/${id}`} className="edit btn-help"><FaRegEdit /></Link>
      <Link to="/" className="delete btn-help"><MdOutlineDelete /></Link>
      <Link to="/users" className="back btn-help"><IoArrowBack /></Link>
      
      <h2>{users.singleUser?.name}</h2>
      </header>
      <main>
     <p>
        <span>Email:</span>
        <span>{users.singleUser?.email}</span>
     </p>
        <p>Role:{users.singleUser?.role}</p>
       <footer>
       <span className="date_create">Course Created At  </span>
       <span><strong>{Moment(users.singleUser.createdAt).fromNow()}</strong></span>
       
       </footer>
      </main>
    </div>)
       }
    </>
  )
}

export default SingleUser