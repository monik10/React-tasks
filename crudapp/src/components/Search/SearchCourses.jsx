/* eslint-disable react/prop-types */
import { IoIosSearch } from "react-icons/io";

const SearchCourses = ({handleSearch}) => {
    
  return (
    <div className="searchBlock">
    
        <span>
        <input type="text" placeholder="Search Courses" onInput={e=>handleSearch(e.target.value)}></input>
        </span>
        <span className="searchIcon"><IoIosSearch /></span>
    </div>
  )
}

export default SearchCourses;