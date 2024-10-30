import React from 'react';
import { NavLink } from 'react-router-dom';
import money from './img/Money .png';
import img from './img/Group .png';

export default function About() {
  return (
    <div>
    
      <section className="bg_section">
        <div className=" container">
          <div className=" row align-items-center justify-content-between">
            <div className=" col-6">
              <img className=" w-100" src={money} alt="" />
            </div>
            <div className=" col-6">
              <div className=" box">
                <div className=" m-auto text-center">
                  <img src={img} alt="" />
                </div>
                <h2 className=" fw_700 fs_56 ff_inter clr_white text-center pt-4">Success !</h2>
                <p className=" fw_400 fs_16 clr_white ff_inter text-center">
                  A email has been send to your email@domain.com. Please check for an email from
                  company and click on the included link to reset your password.
                </p>
                <div className=" text-center">
                  <button className=" back_btn  fw_400 fs_20 ff_inter">Back to home</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
