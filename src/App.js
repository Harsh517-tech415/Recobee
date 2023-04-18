import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Movies from './Component/Movies';
import Login from './Component/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { createContext, useState } from 'react';
import Update from './Component/Update';
export const authUser=createContext();
function App() {
  const [email,setEmail]=useState("");
  const [authenticated,setAuthenticated]=useState(false)
  const [id,setId]=useState();
  const [refresh,setRefresh]=useState();

  return (
    <authUser.Provider value={{setAuthenticated:setAuthenticated,id:id,setId:setId,refresh:refresh,setRefresh:setRefresh,email:email,setEmail:setEmail}}>
    <BrowserRouter>
      {authenticated===true?
      (<>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/update" element={<Update/>}/>
      </Routes>
      </>):(<Login/>)}
    </BrowserRouter>
    </authUser.Provider>
  );
}

export default App;
