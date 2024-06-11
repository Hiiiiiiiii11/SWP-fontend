import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MdDiamond, MdSearch, MdPhone,MdEmail,MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';
import Blog from '../src/Component/Homepage/Blog';
import Homepage from './Component/Homepage/Homepage';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Fogot from './Component/Forgotpassword/Forgot'
import Userpage from './Component/Userpage/Userpage';



function App() {
  
  return (
    <Router>
      <Routes>
      <Route path="/" exact element={<Homepage />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Fogot />} />
      </Routes>
      
    </Router>
  );
}

export default App;
