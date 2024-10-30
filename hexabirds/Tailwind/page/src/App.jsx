import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Towels from './Components/Towels';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="towels" element={<Towels />}></Route>
      </Routes>
      <Header />
    </div>
  );
};

export default App;
