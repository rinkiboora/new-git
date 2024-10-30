import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Ditel from './Ditel.jsx';
import AddData from './AddData.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AddData" element={<AddData />} />
        <Route path="/ditel/:id" element={<Ditel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
