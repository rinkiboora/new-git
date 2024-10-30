import React from 'react';
import img from '../assets/img/img.png';
import hart from '../assets/img/hart.png';
import shoping from '../assets/img/shpoing.png';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className=" max-w-[1140px] mx-auto">
        <div className=" flex justify-between items-center mt-4">
          <div>
            <li className=" text-2xl font-bold text-[#9E3040] ">
              <NavLink to="/">CONCETTI DI-LUSSO</NavLink>
            </li>
          </div>
          <ul className=" flex">
            <li className=" text-base font-medium text-[#4c4b4b] ps-5  ">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className=" text-base font-medium text-[#4c4b4b] ps-5  ">
              <NavLink to="towels">Towels</NavLink>
            </li>
            <li className=" text-base font-medium text-[#4c4b4b] ps-5  ">
              <NavLink to="robes">Robes</NavLink>
            </li>
            <li className=" text-base font-medium text-[#4c4b4b] ps-5  ">
              <NavLink to="Bathroom Sets">Bathroom Sets</NavLink>
            </li>
          </ul>
          <div className=" flex items-center">
            <div className="ms-7">
              <img src={img} alt="" />
            </div>
            <div className="ms-7">
              <img src={hart} alt="" />
            </div>
            <div className=" ms-7 me-7">
              <img src={shoping} alt="" />
            </div>
            <button className="text-base font-medium text-[#fff] bg-[#9E3040] py-4 px-7 rounded-lg">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
