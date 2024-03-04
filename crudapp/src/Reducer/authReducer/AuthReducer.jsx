/* eslint-disable no-unused-vars */
const authReducer=(state,action)=>
{
    let {type,payload,access_token,profile}=action;
    switch(type)
    {
        case "SIGNUP":
            return {
                ...state,
                payload,
                isLoading:false,
            }

            case "LOGIN":
                return {
                    ...state,
                    payload,
                    isLoading:false,
                }

            case "ACCESS_TOKEN":
                return {
                    ...state,
                 payload,
                }
            case "LOGOUT":
                return {
                    ...state,
                 payload,
                }
                case "GETME":
                    return {
                        ...state,
                    profile: profile,
                    }


                default:
                    return {
                      state,
                    }
    }
   

}

export default authReducer;