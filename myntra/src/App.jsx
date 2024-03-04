import { RouterProvider } from "react-router-dom"
import { router } from './routes/MyntraRoutes';
import "./index.css"

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App