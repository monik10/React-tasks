import { useContext } from "react"
import { TaskContextApi } from "../../context/taskContext"
import Task from "./Task";

const AllTasks = () => {
  // eslint-disable-next-line no-unused-vars
  let {task} =useContext(TaskContextApi);
  return (
    <section id="task">
        <h2>All tasks</h2>
        <div className="lists">
          {
            task=== "" ? "loading":task.length >0 && task.map(t=>{
              return <Task key={t.id} {...t}/>
            }) 
          }
        </div>
    </section>
  )
}

export default AllTasks
