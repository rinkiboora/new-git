import React from 'react';
import nav_icon from '../img/Icons nav.png';
import vector_img from '../img/Vector 2.png';
import icon_ball from '../img/Icon ball.png';
import dotted from '../img/dotted.png';
import draf_img from '../img/graf img.png';
import img from '../img/Groupred.png';

const Dashboard = () => {
  let card = [
    {
      Total_Sells: 'Total Sells',
      img: dotted,
      pse: '₹ 50680.00',
      nn: '15.3%',
      Compared: 'Compared to Last Month',
    },
    {
      Total_Sells: 'Average Order Value',
      img: dotted,
      pse: '₹ 1234.20',
      nn: '15.3%',
      Compared: 'Compared to Last Month',
    },
    {
      Total_Sells: 'Total Orders',
      img: dotted,
      pse: '238',
      nn: '15.3%',
      Compared: 'Compared to  Last Month',
    },
  ];
  return (
    <div className=" overflow-hidden bg">
      <div className=" row text-end align-items-center  ">
        <div className=" col-11 ps-4">
          <div className=" bg_white">
            <div className=" d-flex align-items-center ">
              <div>
                <img className="pt-3 me-3" src={nav_icon} alt="" />
              </div>

              <div>
                <div className=" bg_gray input mt-3">
                  <div className=" d-flex">
                    <div>
                      <img className=" ms-2 pe-2" src={vector_img} alt="" />
                    </div>
                    <div className=" pe-5 ">
                      <input
                        placeholder="Search in the admin panel"
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
        <div className=" col-1 pe-4">
          <div className=" d-flex">
            <a href="">
              <h6 className=" clr_black">login</h6>
            </a>
            <img src={icon_ball} alt="" />
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-between pt-3">
        <div>
          <h2 className=" fw_500 fs_30 ff_Outfit clr_black mt-2 ps-3">Dashboard</h2>
        </div>
        <div>
          <button className="button_export me-2">Export</button>
        </div>
      </div>
      <div className=" row">
        {card.map((items, i) => {
          return (
            <div key={i} className=" col-4  pt-2   ">
              <div className=" box pt-3 ps-3 pb-2 ms-2 ">
                <div className=" d-flex align-items-center justify-content-between">
                  <h2 className=" fs_14 fw_400 ff_Outfit clr_black">{items.Total_Sells}</h2>
                  <div>
                    <img className=" pe-3" src={items.img} alt="" />
                  </div>
                </div>
                <div className=" d-flex justify-content-between">
                  <div>
                    <h2 className=" fw_500 fs_30 clr_black ff_Outfit pt-2">{items.pse}</h2>
                  </div>
                  <div>
                    <h2 className=" fw_400 fs_13 ff_Outfit clr_green text-end pe-3 pt-2">
                      {items.nn}
                    </h2>
                    <h2 className=" fw_400 fs_10 ff_Outfit clr_black pe-2   ">{items.Compared}</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="overflow-hidden">
        <div className=" row ms-1">
          <div className=" col-4">
            <div className="table_box2 ps-4  pt-3 pb-3">
              <table className="  w-100   ">
                <thead>
                  <tr>
                    <th className="fw_400 fs_16 ff_Outfit clr_black">Recent Transection</th>

                    <th>
                      <img className="ps-" src={dotted} alt="" />
                    </th>
                  </tr>
                  <th className=" pt-3 pb-2 ps-4">
                    <h1 className=" fw_500 fs_30 ff_Outfit clr_black text-center box_34 w-100 ps-5 pe-5 pt-2 pb-3  ">
                      34
                    </h1>
                  </th>
                </thead>

                <tbody>
                  <tr className=" border-bottom  ">
                    <td className=" fw_400 fs_14 ff_Outfit pb-2  ">City</td>
                    <td className=" fw_400 fs_14 ff_Outfit pb-2 ">Users</td>
                  </tr>
                  <tr className=" border-bottom pb-2 pt-2">
                    <td className=" fw_400 fs_14 ff_Outfit clr_black ">Hisar </td>
                    <td className=" fw_400 fs_14 ff_Outfit clr_black ">12</td>
                  </tr>
                  <tr className=" border-bottom pb-2">
                    <td className=" fw_400 fs_14 ff_Outfit clr_black ">Hansi</td>
                    <td className=" fw_400 fs_14 ff_Outfit clr_black pt-2 ">8</td>
                  </tr>
                  <tr className=" border-bottom pb-2">
                    <td className=" fw_400 fs_14 ff_Outfit clr_black ">Fatehabad</td>
                    <td className=" fw_400 fs_14 ff_Outfit  pt-2 ">4</td>
                  </tr>
                  <tr className=" border-bottom pb-2">
                    <td className=" fw_400 fs_14 ff_Outfit clr_black ">Siwani</td>
                    <td className=" fw_400 fs_14 ff_Outfit  pt-2 ">9</td>
                  </tr>
                  <tr className=" border-bottom pb-2">
                    <td className=" fw_400 fs_14 ff_Outfit clr_black ">Agroha</td>
                    <td className=" fw_400 fs_14 ff_Outfit  pt-2 ">10</td>
                  </tr>
                  <tr className=" border-bottom pb-2 ">
                    <td className=" fw_400 fs_14 ff_Outfit clr_black ">Barwala</td>
                    <td className=" fw_400 fs_14 ff_Outfit  pt-2 ">18</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" col-8 mt-2  ">
            <img className=" w-100 h-100 " src={draf_img} alt="" />
          </div>
        </div>
        <div className="row">
          <div className=" col-9">
            <div className=" table_box mt-2  overflow-hidden overflow-y-scroll h_100">
              <table className=" w-100 ">
                <thead>
                  <tr>
                    <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Recent Orders .</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>
                      <img src={dotted} alt="" />
                    </th>
                  </tr>

                  <tr className=" border-bottom ">
                    <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">No.</th>
                    <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Status</th>
                    <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">City</th>
                    <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Customer</th>

                    <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Date</th>
                    <th className=" fw_400 fs_16 clr_black ff_Outfit pt-4">Total</th>
                  </tr>
                  <tr className=" border-bottom  ">
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">#0012</td>
                    <div className=" mt-2">
                      <td className=" fw_400 fs_16 ff_Outfit  clr_blue bg_blue  h_10 w_10 ps-1 pe-1 pb-1 pt-1 text-center rounded-1 ">
                        Pending
                      </td>
                    </div>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">18-10-2023</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 360.00</td>
                  </tr>
                  <tr className=" border-bottom ">
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">#0012</td>
                    <div className=" mt-2">
                      <td className=" fw_400 fs_16 ff_Outfit  clr_red bg_red  h_10 w_10 pe-1  ps-1 pb-1 pt-1 text-center rounded-1 ">
                        Canceled
                      </td>
                    </div>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">Hisar</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">John Doe</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">18-10-2023</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">₹ 360.00</td>
                  </tr>
                  <tr className=" border-bottom ">
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">#0012</td>
                    <div className=" mt-2">
                      <td className=" fw_400 fs_16 ff_Outfit  clr_blue bg_blue  h_10 w_10 ps-2 pb-1 pt-1  text-center rounded-1 ">
                        Pending
                      </td>
                    </div>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">Hisar</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">John Doe</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">18-10-2023</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">₹ 360.00</td>
                  </tr>
                  <tr className=" border-bottom ">
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">#0012</td>
                    <div className=" mt-2">
                      <td className=" fw_400 fs_16 ff_Outfit  clr_geen bg_green  h_10 w_10 ps-1 pe-1 pb-1 pt-1 text-center  rounded-1">
                        Completed
                      </td>
                    </div>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">Hisar</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">John Doe</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">18-10-2023</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">₹ 360.00</td>
                  </tr>
                  <tr className=" border-bottom ">
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">#0012</td>
                    <div className=" mt-2">
                      <td className=" fw_400 fs_16 ff_Outfit  clr_geen bg_green  h_10 w_10 ps-1 pe-1 pb-1 pt-1  text-center rounded-1 ">
                        Completed
                      </td>
                    </div>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">Hisar</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">John Doe</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">18-10-2023</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">₹ 360.00</td>
                  </tr>
                  <tr className=" border-bottom ">
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">#0012</td>
                    <div className=" mt-2">
                      <td className=" fw_400 fs_16 ff_Outfit  clr_geen bg_green  h_10 w_10 ps-1 pe-1 pb-1 pt-1  text-center rounded-1">
                        Completed
                      </td>
                    </div>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">Hisar</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">John Doe</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">18-10-2023</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">₹ 360.00</td>
                  </tr>
                  <tr className=" border-bottom ">
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">#0012</td>
                    <div className=" mt-2">
                      <td className=" fw_400 fs_16 ff_Outfit  clr_blue bg_blue  h_10 w_10 ps-1 pe-1 pb-1 pt-1 text-center rounded-1 ">
                        Pending
                      </td>
                    </div>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">Hisar</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">John Doe</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">18-10-2023</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-4">₹ 360.00</td>
                  </tr>
                  <tr className=" border-bottom ">
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">#0012</td>
                    <div className=" mt-2">
                      <td className=" fw_400 fs_16 ff_Outfit  clr_red bg_red  h_10 w_10 ps-1 pe-1 pb-1 pt-1  text-center rounded-1">
                        Completed
                      </td>
                    </div>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">Hisar</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">John Doe</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">18-10-2023</td>
                    <td className=" fw_400 fs_16 ff_Outfit clr_black pt-3">₹ 360.00</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className=" col-3 mt-2 box_sales overflow-hidden overflow-y-scroll h_100  ">
            <div className=" d-flex justify-content-between">
              <div>
                <h2 className=" fw_400 fs_16 clr_black ff_Outfit pt-1">Sales by source</h2>
              </div>
              <div>
                <img className=" pe-2" src={dotted} alt="" />
              </div>
            </div>
            <div className=" text-center">
              <img className="mt-2 w-50 " src={img} alt="" />
            </div>
            <div className=" d-flex justify-content-between mt-3">
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">Source</h2>
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">Orders</h2>
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">Amount</h2>
            </div>
            <div className=" d-flex justify-content-between ">
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">Direct</h2>
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black ps-4">110</h2>
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">₹45,368.00</h2>
            </div>
            <div className=" d-flex justify-content-between ">
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">Salesman</h2>
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black ">36</h2>
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">₹13,810.00</h2>
            </div>
            <div className=" d-flex justify-content-between ">
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">Wholesalers</h2>
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black ">43</h2>
              <h2 className=" fs_12 fw_400 ff_Outfit clr_black">₹56,108.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
