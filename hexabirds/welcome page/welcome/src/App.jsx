import React from 'react';
import About from './Components/About';
import Team from './Components/Team';
import Nav from './Components/nav';
import { Routes, Route } from 'react-router';
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="Team" element={<Team />}></Route>
      </Routes>
    </div>
  );
};
export default App;
