import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <div className=" bg pt-3">
        <div className=" container">
          <div className=" d-flex justify-content-end ">
            <ul className=" d-flex">
              <li className=" pe-5 fw_400 fs_18">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className=" pe-5 fw_400 fs_18">
                <NavLink to="about">About</NavLink>
              </li>
              <li className="fw_400 fs_18 clr_white">
                <NavLink to="faq">Faq</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
