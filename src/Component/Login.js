import React, { useContext, useState } from "react";
import UserPool from "../UserPool";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import { authUser } from "../App";
import { Box, Button, InputAdornment, Stack, TextField } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
const Login = () => {
  const {setAuthenticated}=useContext(authUser)
    const [password,setPassword]=useState("");

  function onSubmit(e) 
  {
    e.preventDefault();
    
    const user =new CognitoUser({
        Username:localStorage.getItem('email'),
        Pool:UserPool
    })
    const authDetails=new AuthenticationDetails({
        Username:localStorage.getItem('email'),
        Password:password
    })
 
    user.authenticateUser(authDetails,{
        onSuccess:(data)=>{
          localStorage.setItem('token',`${data.idToken['jwtToken']}`)
          localStorage.setItem('refresh',`${data.refreshToken}`)
            setAuthenticated(true)
        },
        onFailure:(err)=>{
            console.log(("Failure:",err))
            setAuthenticated(false)

        },
        newPasswordRequired: function(userAttributes, requiredAttributes) {
          delete userAttributes.email_verified;
          delete userAttributes.phone_number_verified;
          user.completeNewPasswordChallenge('Aditi02*',{}, this);
      }
          })
  }
  return (
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",width:"400px",height:"300px",m:"15% 35%",border:"2px solid white",borderRadius:"30px",background:"rgba(0,0,0,0.2)"}}>
      <form onSubmit={onSubmit}>
       <Stack >
        <TextField 
        InputProps={{
          startAdornment:<InputAdornment position="start"><AccountCircleIcon/></InputAdornment>
        }}
        type='text'
        value={localStorage.getItem('email')}
        placeholder="Username"
        onChange={(e)=>{localStorage.setItem('email',`${e.target.value}`)}}
        />
        <br/>
      <TextField
      type="password"
      placeholder="Password"
      value={password}
      InputProps={{
        startAdornment:<InputAdornment position="start"><LockIcon/></InputAdornment>
      }}
      onChange={(e)=>{setPassword(e.target.value)}}
      />
      </Stack>
        <br/>
      <Button variant="contained" onClick={onSubmit} sx={{m:"0% 34%"}}>Submit</Button>
      </form>
      </Box>
  );
};

export default Login;
