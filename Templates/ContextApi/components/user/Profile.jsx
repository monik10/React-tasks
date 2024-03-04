/* eslint-disable react/jsx-no-undef */

import { UserContext } from './../../context/userContext';
import { Fragment } from 'react';
console.log(UserContext);
const Profile = () => {

  let {Consumer} =UserContext 
  return (<Fragment>
    <div>
      Profile
    </div>
    <div>
        <Consumer>
{ ({name,company,salary,gender})=>
    {
        return(
            <>
                <h1>{name}</h1>
                <h1>{salary}</h1>
                <h1>{company}</h1>
                <h1>{gender}</h1>
            </>
        )
    }
}
        </Consumer>
    </div>
  </Fragment>
    
  )
}

export default Profile
