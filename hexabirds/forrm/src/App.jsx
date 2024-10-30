import React, { useState } from 'react';
import About from './components/About';
import Path from './components/Path';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [data, setData] = useState([]);
  const [updateData, setupdateData] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <About
                setData={setData}
                data={data}
                updateData={updateData}
                setupdateData={setupdateData}
              />
            }
          />
          <Route
            path="/path"
            element={<Path data={data} setData={setData} setupdateData={setupdateData} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
