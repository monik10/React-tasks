/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {v1 as uuid} from "uuid";

export const TaskContextApi=createContext();
const TaskProvider=({children})=>
{
    let [task,setTask]=useState("");
    const addTask=(title,author,description)=>
    {
setTask([...task,{title,description,author,id:uuid()}])
    }
    return <TaskContextApi.Provider value={{addTask ,task}}>
        {children}
    </TaskContextApi.Provider>
}
export default TaskProvider