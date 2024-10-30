import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Catalog from './Components/Catalog';
import Nav from './Components/Nav';
import Product from './Components/Product';
// import Search from './Components/Search';
import Service from './Components/Service';
import Stock from './Components/Stock';
import Details from './Components/Details';
// import Login from './Components/Login';
import Signup from './Components/Signup';
import Protected from './Components/Protected';
import Search from './Components/search';

const App = () => {
  return (
    <div className=" d-flex">
      <div className=" col-3 ">
        <Nav />
      </div>
      <div className=" col-9 ">
        <Routes>
          <Route path="/" element={<Signup />}></Route>
          <Route path="/dash" element={<Protected File={Dashboard} />}></Route>
          {/* <Route path="/dash" element={<Dashboard />}></Route> */}
          <Route path="/Catalog" element={(File = { Catalog })}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Product/update/:id" element={<Product />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/Stock" element={<Stock />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
