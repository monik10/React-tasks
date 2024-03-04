/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { TaskContextApi } from "../../context/taskContext";




const TaskForm = () => {
    let {addTask}=useContext(TaskContextApi)
    let[state,setState]=useState({
        batchCode:"",
       course:"",
       date:"",
        time:"",
        trainer:"",

    });

    let { batchCode,course,date,time,trainer}=state;
    let handleChange=e=>
    {
        let {name,value} =e.target;
        setState({...state,[name]:value});
    }
    let handleSubmit=e=>
    {
        e.preventDefault();
        try{
            addTask(batchCode,course,date,time,trainer);
            e.target.firstChild.focus();
            console.log(state);
            setState({batchCode:"", course:"",date:"",time:"",trainer:"",})
        }
        catch(error)
        {
            console.log(error)
        }
    }
   

    
  return (
    <section id="form">
    <article>
        <h2>Login</h2>
        <main>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="batchCode">Title</label>
                    <input type="text" id="batchCode" placeholder="Enter batchCode" name="batchCode"  onChange={handleChange} value={batchCode}></input>
                </div>
                <div className='form-group' name="course" value={course} onChange={handleChange}>
                <label htmlFor="course">Choose Course</label>
                <select name="course" value={course} onChange={handleChange}>
                <option value="Java">Java</option>
                <option value="react">React</option>
                <option value="moment js">Moment js</option>
                <option value="jquery">JQuery</option>
               </select>
               </div>
                <div className="form-group">
                 <label htmlFor='date'>Select Date</label>
                <input type="date" name="date" id="date" value={date} onChange={handleChange}/>
              </div>
            <div className="form-group">
            <label htmlFor='time'>Select Time</label>
             <input type="time" name="time" id="time" value={time} onChange={handleChange}/>
              </div>
              <div className="form-group">
                    <label htmlFor="trainer">Trainer</label>
                    <input type="trainer" id="trainer" placeholder="Enter Trainer" name="trainer"  onChange={handleChange} value={trainer}></input>
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
