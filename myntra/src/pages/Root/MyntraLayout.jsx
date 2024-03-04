import { Fragment } from "react"

import NavbarContainer from './../../components/header/Container';
import { Outlet } from "react-router-dom";


const MyntraLayout = () => {
  return (
    <Fragment>
    <NavbarContainer/> {/* static component composition in Layouts Component */}
    <Outlet/> {/* dynamic route based on URL */}
</Fragment>
  )
}

export default MyntraLayout