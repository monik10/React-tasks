import { Fragment } from "react"


const User = ({name,salary,company,age,role,}) => 
{
 switch(role)
 {
    case "Admin":
        return <Fragment>
            <section style={{background:"black",color:"white" ,padding:20}}>
                <h1>ADMIN PANEL</h1>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </section>
        </Fragment>
        case "User":
            return <Fragment>
                <section style={{background:"yellow",color:"red", padding:10}}>
                    <h1>USER PANEL</h1>
                    <h4>{name}</h4>
                    <h5>{role}</h5>
                </section>
            </Fragment>
          default:
                return <Fragment>
                    <section style={{background:"green",color:"red"}}>
                       
                        <h4>No User Found</h4>
                    </section>
                </Fragment>
 }

  
}

export default User
