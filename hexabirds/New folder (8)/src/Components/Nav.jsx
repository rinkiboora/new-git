import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import img from '../assets/img/image 1 .png';
import icon from '../assets/img/Icons.png';
import icon4 from '../assets/img/Icons (4).png';
import icon5 from '../assets/img/Icons (5).png';
import icon6 from '../assets/img/Icons (6).png';
import icon7 from '../assets/img/Icons (7).png';
import icon8 from '../assets/img/Icons (8).png';
import icon9 from '../assets/img/Icons (9).png';
import icon10 from '../assets/img/Icons (10).png';
import icon11 from '../assets/img/Icons (11).png';
import icon12 from '../assets/img/Icons (12).png';
import Dropdown from 'react-bootstrap/Dropdown';

const Nav = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <div className="">
        <div className="bg saidbar">
          <div className=" bg_yellwo pt-2 pb-2 ">
            <div className=" d-flex justify-content-center align-items-center">
              <div className="pe-3">
                <img src={img} alt="" />
              </div>
              <div>
                <h3 className=" fw_400 fs_18 ff_Outfit clr_black pe-3">STSM</h3>
              </div>
              <div>
                <button
                  className=" fw_400 fs_12 ff_Outfit clr_black py-2 px-3 border-0 "
                  type="button">
                  ADMIN
                </button>
              </div>
            </div>
          </div>
          <ul>
            <div className=" ">
              <div className=" d-flex align-items-center justify-content-between">
                <div className="d-flex align--center pt-2 pt-4">
                  <div className=" pe-2 ">
                    <img src={icon} alt="" />
                  </div>
                  <li>
                    <NavLink className="fw_400 fs_14 ff_Outfit clr_white" to="/">
                      Dashboard
                    </NavLink>
                  </li>
                </div>
                <div className=" mt-4 me-5">
                  <Dropdown>
                    <Dropdown.Toggle variant="white" id="dropdown-basic"></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <div className=" d-flex align-items-center pt-2 pt-4">
              <div className=" pe-2 ">
                <img src={icon4} alt="" />
              </div>
              <li>
                <NavLink
                  className={`fw_400 fs_14 ff_Outfit clr_white ${
                    location.pathname === '/Catalog' ? 'colr' : 'text-white'
                  }`}
                  to="/Catalog">
                  Catalog
                </NavLink>
              </li>
              <div></div>
            </div>
            <div className=" d-flex align-items-center pt-2 pt-4">
              <div className=" pe-2 ">
                <img src={icon5} alt="" />
              </div>
              <li>
                <NavLink
                  className={`fw_400 fs_14 ff_Outfit clr_white ${
                    location.pathname === '/Users' ? 'colr' : 'text-white'
                  }`}
                  to="/Users">
                  Users
                </NavLink>
              </li>
            </div>
            <div className=" d-flex align-items-center pt-2 pt-4">
              <div className=" pe-2 ">
                <img src={icon6} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white" to="/SIPs">
                  SIPs
                </NavLink>
              </li>
            </div>

            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align--center pt-2 pt-4">
                <div className=" pe-2 ">
                  <img src={icon7} alt="" />
                </div>
                <li>
                  <NavLink className="fw_400 fs_14 ff_Outfit clr_white" to="/Marketing">
                    Marketing
                  </NavLink>
                </li>
              </div>
              <div className=" mt-4 me-5">
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic"></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div className=" d-flex align-items-center pt-2 pt-4">
              <div className=" pe-2 ">
                <img src={icon8} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white" to="/Communications">
                  Communications
                </NavLink>
              </li>
            </div>
            <div className=" d-flex align-items-center pt-2 pt-4">
              <div className=" pe-2 ">
                <img src={icon9} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white" to="/Transactions">
                  Transactions
                </NavLink>
              </li>
            </div>
            <div className=" d-flex align-items-center pt-2 pt-4">
              <div className=" pe-2 ">
                <img src={icon10} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white" to="/Privacy">
                  Privacy Policy
                </NavLink>
              </li>
            </div>
            <div className=" d-flex align-items-center pt-2 pt-4">
              <div className=" pe-2 ">
                <img src={icon11} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white" to="/Terms ">
                  Terms and Conditions
                </NavLink>
              </li>
            </div>

            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align--center pt-2 pt-4">
                <div className=" pe-2 ">
                  <img src={icon12} alt="" />
                </div>
                <li>
                  <NavLink className="fw_400 fs_14 ff_Outfit clr_white" to="/ Settings">
                    Settings
                  </NavLink>
                </li>
              </div>
              <div className=" mt-4 me-5">
                <Dropdown>
                  <Dropdown.Toggle variant="white" id="dropdown-basic"></Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
