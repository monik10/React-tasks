/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useReducer,createContext, useEffect } from "react";
import authReducer from './../Reducer/authReducer/AuthReducer';
import AuthInstance from './../AxiosInstance/AuthInstance';
import { USER_API_INSTANCE } from './../AxiosInstance/UserAxiosInstance';

export const AuthContextApi=createContext();

const initialState={
    payload:null,
    profile:null,
    isLoading:true,
}
const AuthProvider=({children})=>{
    let [auth,dispatch]=useReducer(authReducer,initialState);
    
    // Sign up
    const signup=async (payload)=>{
     let {data}=await AuthInstance.post("/users",payload)
    dispatch({type:"SIGNUP",payload:data})
    }

    //Login
    const login=async (payload)=>{
        let {data}=await AuthInstance.post("/auth/login",payload)
     let token= window.localStorage.setItem("Token", JSON.stringify(data))
       dispatch({type:"LOGIN",payload:data})
       }
//Token

       let fetchAccessToken=()=>
       {
        let token=window.localStorage.getItem("Token");
        let parsedToken=JSON.parse(token);
        dispatch({type:"ACCESS_TOKEN", payload:parsedToken})
       };
      
       let Logout=()=>{
        window.localStorage.removeItem("Token");
        window.location.assign("/login")
        dispatch({type:"LOGOUT", payload:null})
       }
    

      const isAuth=auth?.payload?.access_token;
      const current_user=auth?.profile;
      let Token= window.localStorage.getItem("Token");
      let parsedToken=JSON.parse(Token);
      let access_token=parsedToken?.access_token;
      console.log(access_token)
 
      //getme
      let getMe = async (id)=>
      {
        try{
           let {data}=await USER_API_INSTANCE.get(`/auth/profile`,{headers:{
            Authorization:`Bearer ${access_token}`
           }});
           
           dispatch({type:"GETME" ,profile:data})
           console.log(data); 
          
          }
          catch(error)
          {
           console.log(error);
          }
       };
       useEffect(()=>{
        fetchAccessToken();
        getMe();
        
       },[]);
      
      
return <AuthContextApi.Provider value={{auth,signup,login,isAuth,Logout,current_user}}>{children}</AuthContextApi.Provider>
}
export default AuthProvider;