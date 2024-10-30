import React from 'react';
import img_boy from './img/boy.png';

export default function Home() {
  return (
    <>
      <section className="bg_section pb-5 pt-5">
        <div className=" container">
          <div className=" row">
            <div className=" col-6 pt-5 pb-4">
              <div className="box ">
                <h2 className=" fw_600 fs_36 clr_white ff_inter ">Reset Password</h2>
                <p className=" fw_400 fs_18 clr_white ff_inter pt-3">
                  Enter your email address and we’ll send you an email with instructions to reset
                  your password
                </p>
                <h2 className=" fw_400 fs_20 clr_white ff_inter pt-3">Email</h2>
                <input className=" ps-5 pe-5 pt-1" type="email" name="email" id="email" />
                <button className="button d-block fw_400 fs_20 ff_inter mt-5">Reset</button>
              </div>
            </div>
            <div className=" col-6">
              <div>
                <img className=" w-100" src={img_boy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
