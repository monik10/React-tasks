
import Layout from './components/dashboard/Layout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import DashboardPage from './components/pages/DashboardPage';
import Batch from './components/pages/Batch';
import Attendance from './components/pages/Attendance';
import NotFound from './components/pages/NotFound';
import Logout from './components/pages/Logout';

const App = () => {

  const router=createBrowserRouter([{
    path:"/",
    element:<Layout/>,
    children:[
      {
      path:"/dashboard",
      element:<DashboardPage/>,
      },
      {
      path:"/batch",
      element:<Batch/>,
      },
    {
      path:"/attendance",
      element:<Attendance/>

    },
    {
      path:"/logout",
      element:<Logout/>

    },
    ]
  },
{
  path:"*",
  element:<NotFound/>
}])
  return (
   
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App