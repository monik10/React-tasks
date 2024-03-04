// //!version 6.4 -->use this ssyntax while using data api
// //! version 6.0 added only history api without data api's
// //createBrowserRouter enables data api's like loaders,actions,fetcher and many more
// import { createBrowserRouter,RouterProvider ,Route,createRoutesFromElements} from "react-router-dom";
// import Home from "./components/Pages/Home"
// import Login from "./components/auth/Login"
// import Register from './components/auth/Register';

// import User from './components/Profiles/User';
// import Layout from "./components/layout/Layout";
// import NotFound from './components/Pages/NotFound';

// // const router=createBrowserRouter(
// //   createRoutesFromElements(
// //   <Route path="/" element={<Layout/>}>
// //   <Route path="/home" element={<Home/>}/>
// //   <Route path="/login" element={<Login/>}/>
// //   <Route path="/register" element={<Register/>}/>
// //   <Route path="/users" element={<User/>}/>
// //   <Route path="*" element={<NotFound/>}/>
// //   </Route>
// // ))
  
// const router=createBrowserRouter([{path:"/",element:<Layout/>,
// children:[{
//   path:"/home",
//   element:<Home/>,
// },
// {
//   path:"/login",
//   element:<Login/>,
// },
// {
//   path:"/register",
//   element:<Register/>,
// },
// {
//   path:"/users",
//   element:<User/>,
// },
// {
//   path:"*",
//   element:<NotFound/>,
// },
// ]}])

// const App = () => {
//   return (
//     <>
//       <RouterProvider router={router}>
  
//   </RouterProvider>
//     </>
//   )
// }

// export default App
// import { BrowserRouter as Router } from "react-router-dom"
// import CustomRoutes from "./components/routes/CustomRoutes";
// import Navbar from "./components/navbar/Navbar";

// const App = () => {
//   return (
//     <Router>
//       <Navbar/>
      
//         <CustomRoutes/>
      
//     </Router>
//   )
// }

// export default App

import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes/NewRouteConfig"; 
const App=()=>
{
  return <RouterProvider router={router}>

  </RouterProvider>
}
export default App;