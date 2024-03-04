import TaskProvider from "./context/taskContext"
import NavbarContainer from "./pages/navbar/NavbarContainer"
import TaskForm from './components/taskComp/TaskForm';
import AllTasks from "./components/taskComp/AllTasks";

//install an extension //!yarn add react-moment moment react-hot-toast uuid
const App = () => {
  return (
   <TaskProvider>
   <header><NavbarContainer/></header>
    <main className="flex-container">
        <TaskForm/>
        <AllTasks/>
    </main>
   </TaskProvider>
  )
}

export default App
