import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Box sx={{height:"80px",display:"flex",alignItems:"center"}}>
    <Stack direction="row" >
        {/* <Button variant="contained" onClick={()=>{navigate("/")}} sx={{borderRadius:"0px",background:"white",color:"black",fontWeight:"bold"}}>Home</Button> */}
        {/* <Button variant="contained" onClick={()=>{navigate("/dashboard")}} sx={{borderRadius:"0px",background:"white",color:"black",fontWeight:"bold"}}>Dashboard</Button> */}
        {/* <Button variant="contained" onClick={()=>{navigate("/login")}} sx={{borderRadius:"0px",background:"white",color:"black",fontWeight:"bold"}}>Login</Button> */}
    </Stack>
    </Box>
  )
}

export default Navbar