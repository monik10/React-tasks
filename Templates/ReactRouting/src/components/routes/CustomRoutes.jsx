import {  useRoutes } from "react-router-dom";







import Home from "../Pages/Home.jsx";
import Login from './../auth/Login';
import Register from './../auth/Register';
import User from './../Profiles/User';
import NotFound from './../Pages/NotFound';

const CustomRoutes=()=>
{
let element=useRoutes([{
    path:"/home",
    element:<Home/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/register",
    element:<Register/>,
  },
  {
    path:"/users",
    element:<User/>,
  },
  {
    path:"*",
    element:<NotFound/>,
  },
  ])

return element;

}
export default CustomRoutes;