import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singledata from './Singledata.jsx';
import Get from './Get.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Get />}></Route>
        <Route path="/singledata/:id" element={<Singledata />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
