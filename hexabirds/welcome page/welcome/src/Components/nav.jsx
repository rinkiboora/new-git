import React from 'react';
import nav_img from '../assets/img/Main Logo .png';
import { NavLink } from 'react-router-dom';
import net from '../assets/img/net t.png';
import dec from '../assets/img/decord.png';
import tew from '../assets/img/tawer.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <div className=" castam_container d-flex">
        <div></div>
        <Navbar.Brand href="#home">
          <div>
            <img className="pe-4" src={nav_img} alt="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <ul className="  d-sm-flex justify-content-center  mt-sm-2 text-center">
              <li>
                {' '}
                <NavLink
                  className=" fw_400 fs_21 ln_26 ff_Orbitron clr_white ms-lg-4 about_link"
                  to="/">
                  About
                </NavLink>{' '}
              </li>
              <li>
                <NavLink className=" fw_400 fs_21 ln_26 ff_Orbitron clr_white ms-lg-4 about_link">
                  Roadmap
                </NavLink>
              </li>

              <li>
                <NavLink className=" fw_400 fs_21 ln_26 ff_Orbitron clr_white ms-lg-4 about_link">
                  How to buy
                </NavLink>
              </li>
              <li>
                <NavLink className=" fw_400 fs_21 ln_26 ff_Orbitron clr_white ms-lg-4 about_link">
                  NFT Collection
                </NavLink>
              </li>
              <li>
                /{' '}
                <NavLink
                  className=" fw_400 fs_21 ln_26 ff_Orbitron clr_white ms-lg-4 about_link"
                  to="/Team">
                  Team
                </NavLink>
              </li>
            </ul>
          </Nav>
          <Nav>
            <div className=" d-flex justify-content-center align-items-center mt-sm-2">
              <a href="https://web.tele gram.org/">
                <img className="ps-2 ms-lg-5" src={net} alt="" />{' '}
              </a>{' '}
              <a href="https://discord.com/">
                <img className="ps-2" src={dec} alt="" />{' '}
              </a>{' '}
              <a href="https://x.com/?lang=en">
                <img className="ps-2" src={tew} alt="" />{' '}
              </a>{' '}
              <button className=" fw_700 fs_24 ff_Orbitron clr_white ln_30 btn_join ms-3">
                Join Discord
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CollapsibleExample;
