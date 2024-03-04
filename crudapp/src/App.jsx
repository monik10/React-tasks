import { RouterProvider,createBrowserRouter } from "react-router-dom" 
import Layouts from "./components/pages/Layouts"
import Notfound from "./components/pages/Notfound"
import Home from './components/pages/Home';
import "/src/index.css";
import CreateCourse from "./components/courses/CreateCourse";
import AllCourses from "./components/courses/AllCourses";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from "./components/courses/EditCourse";
import AllUsers from "./components/users/AllUsers";
import SingleUser from "./components/users/SingleUser";
import Register from "./components/auth/Register";
import Login from './components/auth/Login';
import PrivateRoute from "./helpers/PrivateRoute";
import PublicRoute from "./helpers/PublicRoute";
import Modal from "./helpers/models/Modal";
import axios from "axios";
import FetchGitUsers from './components/users/FetchGitUsers';
import CreateProducts from "./components/products/CreateProducts";



const router=createBrowserRouter([
  {
path:"/",
element:<Layouts/>,
children:[
  {
path:"/",
element:<Home/>,
children:[{
  index:true,
  element:<AllCourses/>
},
{
  path:"create-course",
  element:<PrivateRoute><CreateCourse/></PrivateRoute>
},
{
  path:"git-users",
  element:<PrivateRoute><FetchGitUsers/></PrivateRoute>,
  loader:async()=>
  {
   let {data}=await axios.get(" https://api.github.com/users");
   return data;
  }
},
{
  path:"create-products",
  element:<PrivateRoute><CreateProducts/></PrivateRoute>,
  action:async({request})=>
  {
    let data= await request.formData();
    let name= data.get("name");
    let email=data.get("email");
   
    let password=data.get("password");
    let avatar=data.get("avatar");
    let payload={name,email,password,avatar}
    return await window.fetch("https://api.escuelajs.co/api/v1/users/",
    {
      method:"POST",
      body:JSON.stringify(payload),
      headers:{
        "content-type":"application/json"
      },
    })
   
  }
},
{
  path:":id",
  element:<PrivateRoute><CourseDetails/></PrivateRoute>
},
{
  path:"edit/:id",
  element:<PrivateRoute><EditCourse/></PrivateRoute>
},
{
  path:"users",
  element:<PrivateRoute><AllUsers/></PrivateRoute>,
},
{
  path:"/users/:id",
  element:<PrivateRoute><SingleUser/></PrivateRoute>,
}]
},
{
  path:"/signup",
  element:<PublicRoute><Register/></PublicRoute>
},
{
  path:"/login",
  element:<PublicRoute>
    <Modal><Login/></Modal>
  </PublicRoute>
},
{
  path:"*",
  element:<Notfound/>
},],
  }
])
const App = () => {
  return (
    <RouterProvider router={router}>
      App
    </RouterProvider>
  )
}

export default App
