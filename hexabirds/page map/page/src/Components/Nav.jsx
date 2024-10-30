import React from 'react';
import { NavLink } from 'react-router-dom';
import nav_img from '../assets/img/logo.png';

const Nav = () => {
  return (
    <div className=" bg_clr pt-4 pb-4">
      <div className=" container">
        <div className=" d-flex justify-content-between align-items-center">
          <div>
            <img src={nav_img} alt="" />
          </div>
          <ul className=" d-flex justify-content-between align-items-center">
            <li>
              <NavLink className=" fw_400 fs_16 clr_white ff_inter ps-4" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className=" fw_400 fs_16 clr_white ff_inter ps-4" to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink className=" fw_400 fs_16 clr_white ff_inter ps-4">About Us</NavLink>
            </li>
            <li>
              <NavLink className=" fw_400 fs_16 clr_white ff_inter ps-4 me-4">Contact us</NavLink>
            </li>
            <li>
              <NavLink className=" fw_400 fs_16 clr_white ff_inter ps-4 btn_sub">Subscribe</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
