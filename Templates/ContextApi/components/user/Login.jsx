import { Fragment } from "react"
import { UserContext } from "../../context/userContext"

const Login = () => {

    let {Consumer}=UserContext
  return (<Fragment>
<div>
      Login
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

export default Login
