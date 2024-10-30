import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <ul>
        <li className=" fs-5 fw-normal">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className=" fs-5 fw-normal">
          <NavLink to="About">About</NavLink>
        </li>
        <li className=" fs-5 fw-normal">
          <NavLink to="Blog">Blog</NavLink>
        </li>
        <li className=" fs-5 fw-normal">
          <NavLink to="Login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
