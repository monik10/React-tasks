import LeftSideHeader from "./LeftSideHeader"
import RightSideHeader from "./RightSideHeader"


const NavbarContainer = () => {
  return (
    <section id="navbar">
    <article className="container">
        <LeftSideHeader/>
        <RightSideHeader/>
    </article></section>
  )
}

export default NavbarContainer