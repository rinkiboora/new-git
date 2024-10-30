import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import Home from './Components/Home';
// import About from './Components/About';
import Nav from './Components/Nav';
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';

const App = () => {
  const [name, setName] = useState('Vikram');
  return (
    <div>
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About myName={name} setName={setName} />} />
      </Routes> */}
      <Comp1 />
      <Comp2 />
    </div>
  );
};
export default App;
