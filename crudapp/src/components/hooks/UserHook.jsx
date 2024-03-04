/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { UserContextApi } from "../../Context/UserContext";

//custom hook start with use and uppercase
const useFetchUser=()=>{
 let {users,fetchSingleUser,fetchUsers,singleUser}=useContext(UserContextApi);

 useEffect(()=>
{
    fetchUsers();   
},[]);
let data={users,fetchSingleUser,singleUser}
return data;
}
export default useFetchUser;