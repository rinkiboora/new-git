import React from 'react';
import { useLocation } from 'react-router-dom';
import icon2 from '../assets/img/Icons (1).png';
import icon3 from '../assets/img/Icons (3).png';
import icon4 from '../assets/img/img icon.png';
import btn from '../assets/img/btn_img.png';

const Viex = () => {
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div>
      <div className="row text-end align-items-center">
        <div className="col-11 ps-4">
          <div className="bg_white">
            <div className="d-flex align-items-center">
              <div>
                <img className="pt-3 me-3" src={icon2} alt="" />
              </div>
              <div>
                <div className="bg_gray input mt-3">
                  <div className="d-flex">
                    <div>
                      <img className="ms-2 pe-2" src={icon3} alt="" />
                    </div>
                    <div className="pe-5">
                      <input
                        value="Search in the admin panel"
                        className="bg_gray border-0 pt-2 pb-2 fw_400 fs_12 ff_Outfit clr_black"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
        <div className="col-1">
          <img src={icon4} alt="" />
        </div>
      </div>
      <div className=" bg_gray mt-3 pb-5">
        <div className=" row  pt-3 ms-2">
          <div className=" col-7">
            <h2 className=" fw_500 fs_30 ff_Outfit clr_black">View Customer Details</h2>
          </div>
          <div className=" col-5 text-end">
            <button className="  fw_400  fs_16 ff_Outfit px-4 py-2  rounded-2 reset_btn">
              Block Customer
            </button>
            <button className="fw_400 fs_16 ff_Outfit clr_black py-2 px-4 bg_yellwo border-0 rounded-2 ms-3 me-3">
              <img className=" me-2" src={btn} alt="" />
              Reset Password
            </button>
          </div>
        </div>
        {user && (
          <div className="user-details mt-4 ms-2">
            <h3 className="fw_500 fs_24 ff_Outfit clr_black">User Details</h3>
            <p className="fw_400 fs_16 ff_Outfit clr_black">
              <strong>Name:</strong> {user.first_name} {user.last_name}
            </p>
            <p className="fw_400 fs_16 ff_Outfit clr_black">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="fw_400 fs_16 ff_Outfit clr_black">
              <strong>Phone Number:</strong> {user.phone_no}
            </p>
            <p className="fw_400 fs_16 ff_Outfit clr_black">
              <strong>City / State:</strong> Hisar / Haryana
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Viex;
