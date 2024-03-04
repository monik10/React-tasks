import UserProvider from "./context/userContext"
import Profile from "./components/user/Profile"
import Login from './components/user/Login';
import Register from "./components/Register";
import { Fragment } from "react";
const App = () => {
    return (
        <Fragment>
        <UserProvider>
         <Profile/>
         <Login/>
        </UserProvider>
        <Register/>
        </Fragment>
    )
}
 

export default App
