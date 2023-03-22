import './App.css';
import{Box} from '@mui/material'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Dashboard from './Component/Dashboard';
import Login from './Component/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
