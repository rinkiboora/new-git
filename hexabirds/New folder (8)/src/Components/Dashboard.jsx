import React from 'react';
import icon2 from '../assets/img/Icons (1).png';
import icon3 from '../assets/img/Icons (3).png';
import icon4 from '../assets/img/img icon.png';
import dotted from '../assets/img/dotted.png';
import frame from '../assets/img/Frame .png';

const Dashboard = () => {
  return (
    <div className=" container overflow-hidden">
      <div className=" row text-end align-items-center  ">
        <div className=" col-11 ps-4">
          <div className=" bg_white">
            <div className=" d-flex align-items-center ">
              <div>
                <img className="pt-3 me-3" src={icon2} alt="" />
              </div>

              <div>
                <div className=" bg_gray input mt-3">
                  <div className=" d-flex">
                    <div>
                      <img className=" ms-2 pe-2" src={icon3} alt="" />
                    </div>
                    <div className=" pe-5 ">
                      <input
                        value="Search in the admin panel"
                        className=" bg_gray border-0 pt-2 pb-2 fw_400 fs_12 ff_Outfit clr_black"
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
        <div className=" col-1">
          <img src={icon4} alt="" />
        </div>
      </div>
      <div className=" bg_clr overflow-hidden">
        <div>
          <h2 className=" fw_500 fs_30 ff_Outfit clr_black mt-2 ps-3">Dashboard</h2>
        </div>
        <div className=" row mt-2 ">
          <div className=" col-4">
            <div className=" Total_box text-center pt-4 pb-4 ms-3">
              <h2 className=" ff_Outfit fw_400 fs_14 clr">Total SIPs</h2>
              <h3 className=" fw_500 fs_30 clr_black">6</h3>
            </div>
          </div>
          <div className=" col-4 mb-5">
            <div className=" Total_box text-center pt-4 pb-4 ">
              <h2 className=" ff_Outfit fw_400 fs_14 clr">Total Inverster ‘s</h2>
              <h3 className=" fw_500 fs_30 clr_black">1000</h3>
            </div>
          </div>
        </div>
        <div className=" container overflow-hidden">
          <div className=" row">
            <div className=" col-4">
              <div className="table_box ps-4  pt-3 pb-3">
                <table className=" w-100    ">
                  <thead>
                    <tr>
                      <th className="fw_400 fs_16 ff_Outfit clr_black">Recent Transection</th>

                      <th>
                        <img className="ps-4" src={dotted} alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="  ">
                      <td className=" fw_400 fs_14 ff_Outfit pt-3 pb-3 ">Name</td>
                      <td className=" fw_400 fs_14 ff_Outfit pt-3 pb-3 ">Amount</td>
                    </tr>
                    <tr className="bg_graye2  ">
                      <td className=" fw_400 fs_14 ff_Outfit clr_black pt-2 pb-3">John leo</td>
                      <td className=" fw_400 fs_14 ff_Outfit clr_black pt-2 pb-3">₹ 2,300.00</td>
                    </tr>
                    <tr>
                      <td className=" fw_400 fs_14 ff_Outfit clr_black pt-2 pb-3">John leo</td>
                      <td className=" fw_400 fs_14 ff_Outfit clr_black pt-2 pb-3">₹ 2,300.00</td>
                    </tr>
                    <tr className="bg_graye2  ">
                      <td className=" fw_400 fs_14 ff_Outfit clr_black pt-2 pb-2">Morin</td>
                      <td className=" fw_400 fs_14 ff_Outfit  pt-2 pb-2">₹ 2,300.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className=" col-8">
              <img className=" w-100 " src={frame} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" table_box mt-2  overflow-hidden overflow-y-scroll h_100">
          <table className=" w-100 ">
            <thead>
              <tr>
                <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Sr N.</th>
                <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Name</th>
                <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Registration</th>
                <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">City / State</th>
                <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Member Status</th>
                <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Total Investment</th>
              </tr>
              <tr>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01-01-2023</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar / Haryana</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Active</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 5000</td>
              </tr>
              <tr>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01-01-2023</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar / Haryana</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Active</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 5000</td>
              </tr>
              <tr>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01-01-2023</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar / Haryana</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Active</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 5000</td>
              </tr>
              <tr>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01-01-2023</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar / Haryana</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Active</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 5000</td>
              </tr>
              <tr>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01-01-2023</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar / Haryana</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Active</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 5000</td>
              </tr>
              <tr>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01-01-2023</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar / Haryana</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Active</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 5000</td>
              </tr>
              <tr>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">01-01-2023</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar / Haryana</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Active</td>
                <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 5000</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
