import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../img/img 1.png';
import icon from '../img/Icons (18).png';
import icon2 from '../img/Icons 2.png';
import icon3 from '../img/Icons 3.png';
import icon4 from '../img/Icons 4.png';
import icon5 from '../img/Icons 5.png';
import icon6 from '../img/Icons 6.png';
import icon7 from '../img/Icons 7.png';
import icon8 from '../img/Icons 8.png';
import icon9 from '../img/Icons 9.png';
import icon10 from '../img/Group 10.png';
import icon11 from '../img/Vector 1.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';

const Nav = () => {
  return (
    <div className=" bg_grye1 h_100v">
      <div className="">
        <ul className=" ps-0">
          <div className=" bg_yellwo pt-2 pb-2 ">
            <div className=" d-flex  align-items-center">
              <div className=" ps-5">
                <img src={img} alt="" />
              </div>
              <div>
                <h3 className=" fw_400 fs_18 ff_Outfit clr_black ps-3 ">STSM</h3>
              </div>
              <div>
                <button
                  className=" fw_400 fs_12 ff_Outfit clr_black py-2 px-3 border-0 ms-3 "
                  type="button">
                  ADMIN
                </button>
              </div>
            </div>
          </div>
          <li>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align--center pt-2 pt-4">
                <div className=" ps-3 ">
                  <img src={icon} alt="" />
                </div>
                <li>
                  <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/dash">
                    Dashboard
                  </NavLink>
                </li>
              </div>
            </div>
          </li>
          <div className=" d-flex align-items-center justify-content-between">
            <Accordion>
              <div>
                <Accordion.Item eventKey="0">
                  <div>
                    <Accordion.Header>
                      {' '}
                      <div className="d-flex justify-content-between pt-2">
                        <div className=" ps-3 ">
                          <img src={icon2} alt="" />
                        </div>
                        <li>
                          <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="Catalog">
                            Catalog
                          </NavLink>
                        </li>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <h2 className=" fw_400 fs_14 clr_white ff_Outfit ps-3">Category List</h2>
                      <h2 className=" fw_400 fs_14 clr_white ff_Outfit pt-3 pb-2 ps-3 clr_yellwo">
                        Add Category
                      </h2>
                      <li>
                        <div className=" d-flex align-items-center ">
                          <div className="d-flex align--center "></div>
                          <li>
                            <NavLink
                              className="fw_400 fs_14 ff_Outfit clr_white ps-3 pt-3"
                              to="/Product">
                              Product list
                            </NavLink>
                          </li>
                        </div>
                      </li>
                    </Accordion.Body>
                  </div>
                </Accordion.Item>
              </div>
            </Accordion>
          </div>
          <div className=" d-flex align-items-center justify-content-between">
            <div className="d-flex align--center">
              <div className=" ps-3 ">
                <img src={icon3} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/ Settings">
                  Customers
                </NavLink>
              </li>
            </div>
            <div className=" mt-3 me-5">
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
          <div className=" d-flex align-items-center justify-content-between">
            <div className="d-flex align--center ">
              <div className=" ps-3 ">
                <img src={icon4} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/ Orders">
                  Orders
                </NavLink>
              </li>
            </div>
            <div className=" mt-3 me-5">
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
          <div className=" d-flex align-items-center justify-content-between">
            <div className="d-flex align--center ">
              <div className=" ps-3 ">
                <img src={icon5} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/ Settings">
                  Marketing
                </NavLink>
              </li>
            </div>
            <div className=" mt-3 me-5">
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
          <div className=" d-flex align-items-center justify-content-between">
            <div className="d-flex align--center pt-2 ">
              <div className=" ps-3 ">
                <img src={icon6} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/ Settings">
                  Communications
                </NavLink>
              </li>
            </div>
            <div className=" mt-2 me-5">
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
          <li>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align--center pt-3 ">
                <div className=" ps-3 ">
                  <img src={icon11} alt="" />
                </div>
                <li>
                  <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/">
                    Invoices
                  </NavLink>
                </li>
              </div>
            </div>
          </li>
          <li>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align--center pt-3 ">
                <div className=" ps-3 ">
                  <img src={icon7} alt="" />
                </div>
                <li>
                  <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/">
                    FAQs
                  </NavLink>
                </li>
              </div>
            </div>
          </li>
          <li>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align--center pt-2 pt-4">
                <div className=" ps-3 ">
                  <img src={icon8} alt="" />
                </div>
                <li>
                  <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/">
                    Privacy Policy
                  </NavLink>
                </li>
              </div>
            </div>
          </li>
          <li>
            <div className=" d-flex align-items-center justify-content-between">
              <div className="d-flex align--center pt-2 pt-4">
                <div className=" ps-3 ">
                  <img src={icon9} alt="" />
                </div>
                <li>
                  <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/">
                    Terms and Conditions
                  </NavLink>
                </li>
              </div>
            </div>
          </li>
          <div className=" d-flex align-items-center justify-content-between">
            <div className="d-flex align--center pt-3 ">
              <div className=" ps-3 ">
                <img src={icon10} alt="" />
              </div>
              <li>
                <NavLink className="fw_400 fs_14 ff_Outfit clr_white ps-3" to="/ Settings">
                  Settings
                </NavLink>
              </li>
            </div>
            <div className=" mt-3 me-5">
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
  );
};

export default Nav;
