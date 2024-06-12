import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../src/Component/Login/Login'
import Homepage from './Component/Homepage/Homepage';
import Userpage from './Component/Userpage/Userpage';
import { Home } from '@mui/icons-material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <Homepage/>
    </App>
  </React.StrictMode>
);





