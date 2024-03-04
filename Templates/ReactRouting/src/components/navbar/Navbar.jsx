
import { Link,Outlet } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
    <ul>
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/register">Register</Link>
        </li>
        <li>
            <Link to="/users">Users</Link>
        </li>
       <hr/>
       {/* //must call outlet */}
       <Outlet/>
       

    </ul>
</div>
  )
}

export default Navbar