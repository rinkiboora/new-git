import React from 'react';
// import App2 from "./Components/App2"
import Axco from './Components/Axco';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './Components/Details';
import Api from './Components/Api';
import Post from './Components/Post';

const App = () => {
  return (
    <div>
      {/* <App2 />; */}
      {/* <Axco /> */}
      <Api />
      {/* <Post /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Axco />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
