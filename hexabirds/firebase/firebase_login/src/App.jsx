import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Login from './Components/Login';
import Nav from './Components/Nav';

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
