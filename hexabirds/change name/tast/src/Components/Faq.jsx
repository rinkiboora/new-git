import React from 'react';
import { NavLink } from 'react-router-dom';
import back_img from './img/Bank_2.png';

export default function Faq() {
  return (
    <div>
      <section className=" bg_section ">
        <div className=" container">
          <div className=" col-10 text-center m-auto">
            <img className=" w-100" src={back_img} alt="" />
          </div>
          <div className=" text-center ">
            <h2 className=" fw_700 fs_48 clr_white ff_inter pt-3 ">
              Hang on! We are under maintenance
            </h2>
            <p className=" fw_400 fs_20 ff_inter clr_white">
              It will not take a long time till we get the error fiked. We wii live again in
            </p>
            <h2 className=" fw_500 fs_36 ff_inter clr_red">00 : 04 : 13 : 39</h2>
          </div>
          <div className=" m-auto d-flex justify-content-center">
            <div className=" text-center">
              <p className=" clr_white fw_400 fs_20">Enter your mail</p>
              <input className=" ps-5 pe-5 input" type="mail" name="mail" id="mail" />

              <button className="notify_btn fw_400 fs_20 mt-3 mb-5 ">Notify Me</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
