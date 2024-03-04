/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import Hoc from "../hoc/Hoc"



const Navbar = ({profile}) => {
  return (
    <div>
    <h1>Navbar</h1>
      <h1>{profile.age} is coming from hoc</h1>
    </div>
  )
}

export default Hoc(Navbar)
