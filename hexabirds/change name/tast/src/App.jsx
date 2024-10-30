
import React from 'react';
import Navbar from './Components/Navbar';
import Faq from './Components/Faq';
import Home from './Components/Home';
import About from './Components/About';
import { Route, Routes } from 'react-router-dom';

 function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="faq" element={<Faq />}></Route>
      </Routes>
    </div>
  );
 }
export default App;
