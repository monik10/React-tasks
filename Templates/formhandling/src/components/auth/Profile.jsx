/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import Hoc from "../hoc/Hoc";



const Profile = ({profile}) => {
    console.log(profile);
  return (
  <div>
    <h1>{profile.name}</h1>
  </div>
    

  )
}

export default Hoc(Profile)
