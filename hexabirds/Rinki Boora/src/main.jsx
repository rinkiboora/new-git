import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ditel from './Ditel.jsx';
import AddData from './AddData.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/AddData" element={<AddData />}></Route>
        <Route path="/AddData/update/:id" element={<AddData />}></Route>
        <Route path="/Ditel/:id" element={<Ditel />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
