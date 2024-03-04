/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout";
import Home from "../Pages/Home.jsx";
import Login from './../auth/Login';
import Register from './../auth/Register';
import User from './../Profiles/User';
import NotFound from './../Pages/NotFound';

export const router=createBrowserRouter([{path:"/",element:<Layout/>,
children:[{
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
]}])
