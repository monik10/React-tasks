import TaskProvider from "./context/taskContext"

import TaskForm from './components/taskComp/TaskForm';
import AllTasks from "./components/taskComp/AllTasks";

//install an extension //!yarn add react-moment moment react-hot-toast uuid
const App = () => {
  return (
   <TaskProvider>
   
    <main className="flex-container">
        <AllTasks/>
        <TaskForm/> 
    </main>
   </TaskProvider>
  )
}

export default App
