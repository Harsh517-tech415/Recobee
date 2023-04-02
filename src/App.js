import './App.css';
import{Box} from '@mui/material'
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Movies from './Component/Movies';
import Login from './Component/Login';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './Configuration';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator socialProviders={['google','amazon','apple']}>
    <BrowserRouter>
    <Box sx={{width:{lg:"1000px"}}}>
      <Navbar/>
      <Routes>
        {/* <Route path="/login" element={<Login/>}/> */}
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </Box>
    </BrowserRouter>
    </Authenticator>
  );
}

export default App;
