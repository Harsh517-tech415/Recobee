import './App.css';
import{Box} from '@mui/material'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Movies from './Component/Movies';
import Login from './Component/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { createContext, useState } from 'react';
export const authUser=createContext();
function App() {
  
  const [authenticated,setAuthenticated]=useState(false)
  return (
    <authUser.Provider value={{setAuthenticated:setAuthenticated}}>
    <BrowserRouter>
    <Box sx={{width:{lg:"1000px"}}}>
      {authenticated===true?
      (<>
      {/* {document.cookie='*@&#=ok'} */}
      <Navbar/>
      <Routes>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </>):(<Login/>)}
      </Box>
    </BrowserRouter>
    </authUser.Provider>
  );
}

export default App;
