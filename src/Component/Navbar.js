import { Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div>
    <Stack direction="row" spacing={5} sx={{display:"flex",justifyContent:"center"}}>
        <Button variant="contained" onClick={()=>{navigate("/")}} sx={{borderRadius:"0px",background:"white",color:"black",fontWeight:"bold"}}>Home</Button>
        <Button variant="contained" onClick={()=>{navigate("/dashboard")}} sx={{borderRadius:"0px",background:"white",color:"black",fontWeight:"bold"}}>Dashboard</Button>
        <Button variant="contained" onClick={()=>{navigate("/login")}} sx={{borderRadius:"0px",background:"white",color:"black",fontWeight:"bold"}}>Login</Button>
    </Stack>
    </div>
  )
}

export default Navbar