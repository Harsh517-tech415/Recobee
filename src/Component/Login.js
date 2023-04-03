import React, { useState } from "react";
import UserPool from "../UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

  function onSubmit(e) 
  {
    e.preventDefault();
    const user =new CognitoUser({
        Username:email,
        Pool:UserPool
    })
    const authDetails=new AuthenticationDetails({
        Username:email,
        Password:password
    })
 
    user.authenticateUser(authDetails,{
        onSuccess:(data)=>{
            console.log("Success:",data)
        },
        onFailure:(err)=>{
            console.log(("Failure:",err))
        },
        newPasswordRequired:(data)=>{
            console.log(data);
        }    })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label >Email</label>
        <input 
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}/>
        <br/>
        <label>Password</label>
      <input
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      />
        <br/>
      <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
