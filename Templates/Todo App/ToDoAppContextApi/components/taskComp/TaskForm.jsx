/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { TaskContextApi } from "../../context/taskContext";




const TaskForm = () => {
    let {addTask}=useContext(TaskContextApi)
    let[state,setState]=useState({
        title:"",
        author:"",
        description:"",
        status:false,

    });

    let {title,author,description,status}=state;
    let handleChange=e=>
    {
        let {name,value} =e.target;
        setState({...state,[name]:value});
    }
    let handleSubmit=e=>
    {
        e.preventDefault();
        try{
            addTask(title,author,description);
            e.target.firstChild.focus();
            console.log(state);
            setState({title:"",author:"",description:""})
        }
        catch(error)
        {
            console.log(error)
        }
    }
    
  return (
    <section id="form">
    <article>
        <h2>Add Task To The Basket</h2>
        <main>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="add title" name="title"  onChange={handleChange} value={title}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" placeholder="add author" name="author" onChange={handleChange} value={author} ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" placeholder="add description" name="description" onChange={handleChange} value={description} cols="25" rows="8"></textarea>
                </div>
                <div className="form-group">
                    <button>{status===true ? "loading..":"add task"} </button>
                </div>
            </form>
        </main>
    </article>
     
    </section>
  )
}

export default TaskForm
