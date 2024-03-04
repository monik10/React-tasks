/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

 export const UserContext=createContext("");
let {Provider}=UserContext;//destructing
//Provider
const UserProvider=({children})=>
{
    return <Provider value={{name:"monika",company:"fireflink",salary:"23000",gender:"Female", }}>{children}</Provider>
}

export default UserProvider