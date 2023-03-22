import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <Box sx={{display:"flex",m:"auto",mt:"25%",height:"250px",width:"350px",border:"2px solid orange"}}>
    <Stack sx={{m:"auto"}}>
      <Typography sx={{display:"flex",justifyContent:"left"}}>Username:</Typography>
      <TextField sx={{display:"flex",justifyContent:"center"}}/>
      <Typography sx={{display:"flex",justifyContent:"left"}}>Password:</Typography>
      <TextField sx={{display:"flex",justifyContent:"center"}}/>
      <Button variant='contained' sx={{mt:"4%"}}>Login</Button>
 </Stack>
 </Box>
  )
}

export default Login