import React, { useState } from 'react';
import Dashboard from './Components/Dashboard';
import Catalog from './Components/Catalog';
import { Route, Routes } from 'react-router-dom';
import Users from './Components/Users';
// import Marketing from './Components/Marketing';
// import Communications from './Components/Marketing';
import Nav from './Components/Nav';
import From from './Components/From';

import Viex from './Components/Viex';

const App = () => {
 const [data, setData] = useState([]);
 const [updateData, setUpdateData] = useState(null);
  return (
    <div className=" overflow-hidden  ">
      <div className=" d-flex">
        <div className=" col-3 ">
          <Nav />
        </div>
        <div className=" col-9  ">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Catalog" element={<Catalog />}></Route>
            <Route
              path="/Users"
              element={<Users data={data} setData={setData} setUpdateData={setUpdateData} />}
            />
            <Route
              path="/From"
              element={
                <From
                  data={data}
                  setData={setData}
                  updateData={updateData}
                  setUpdateData={setUpdateData}
                />
              }
            />
            {/* <Route path="Transactions" element={<Transactions />}></Route>
        <Route path="Privacy" element={<Privacy Policy />}></Route>
        <Route path="Settings" element={<Settings />}></Route> */}
            <Route path="/Viex" element={<Viex />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;
