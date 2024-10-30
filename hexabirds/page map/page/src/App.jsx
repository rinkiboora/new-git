import React from 'react';
import Home from './Components/Home';
import Blog from './Components/Blog';
import { Routes, Route } from 'react-router';
import Nav from './Components/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blog" element={<Blog />}></Route>
     
      </Routes>
    </div>
  );
};
export default App;
