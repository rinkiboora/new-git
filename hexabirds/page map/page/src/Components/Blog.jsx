import React from 'react';
import hero_img from '../assets/img/hero img.png';
import tow_moman from '../assets/img/two-women.png';
import momen from '../assets/img/photo-of.png';
import momen2 from '../assets/img/photo-of-woman.png';
import momen3 from '../assets/img/photo-of-people.png';
import icon_1 from '../assets/img/Icon1.png';
import icon_2 from '../assets/img/Group 9179.png';
import icon_3 from '../assets/img/icon3.png';
import icon_4 from '../assets/img/icon4.png';
import f_img from '../assets/img/facs.png';
import t_img from '../assets/img/twet.png';
import n_img from '../assets/img/linnk.png';
import i_img from '../assets/img/instagraam.png';
import nav_img from '../assets/img/logo.png';

export default function Blog() {
  let design = [
    {
      img_momen: tow_moman,
      Startup: 'Startup',
      Design: 'Design tips for designers that cover everything you need',
      Duis: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      img_momen: momen,
      Startup: 'BUSINESS',
      Design: 'How to build rapport with your web design clients',
      Duis: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      img_momen: momen2,
      Startup: 'Startup',
      Design: 'Logo design trends to avoid in 2022',
      Duis: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      img_momen: momen3,
      Startup: 'TECHNOLOGY',
      Design: '8 Figma design systems you can download for free today',
      Duis: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      img_momen: tow_moman,
      Startup: 'ECONOMY',
      Design: 'Font sizes in UI design: The complete guide to follow',
      Duis: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    },
  ];
  let stutend = [
    {
      imgs: icon_1,
      Business: 'Business',
      ipsum: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      imgs: icon_2,
      Business: 'Startup',
      ipsum: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      imgs: icon_3,
      Business: 'Economy',
      ipsum: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
    {
      imgs: icon_4,
      Business: 'Technology',
      ipsum: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    },
  ];

  return (
    <div>
      <div className=" color pb-4">
        <div className=" container">
          <div className=" row align-items-center pt-5 pb-5">
            <div className=" col-7">
              <h2 className=" fw_600 fs_16 clr_black ff_inter pt-5 ">Posted on startup</h2>
              <h2 className=" fw_700 fs_36 clr_black ff_inter pt-4  ps-3">
                Step-by-step guide to choosing great font pairs
              </h2>
              <h4 className=" fw_400 fs_16 clr_black ff_inter pt-4 ">
                By <span className=" fw_400 fs_16 clr_yellow ff_inter ">James West</span> | May 23,
                2022{' '}
              </h4>
              <p className=" clr_black fw_400 fs_16 ff_inter  pt-4 pb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
              <a className="fw_700 fs_18 clr_blue ff_sen btn_read ps-5 pe-5 " href="">
                Read More
              </a>
            </div>
            <div className=" col-5 ">
              <img src={hero_img} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* **********section All posts*********** */}
      <section>
        <div className=" container">
          <h2 className=" fw_700 fs_48 clr_blue ff_inter pt-5">All posts</h2>

          {design.map((items, i) => {
            return (
              <div key={i}>
                <div className="row align-items-center pt-5">
                  <div className=" col-6">
                    <img src={items.img_momen} alt="" />
                  </div>
                  <div className=" col-6">
                    <h4 className="fw_600 fs_16 ff_inter clr_blue2">{items.Startup}</h4>
                    <h2 className=" fw_700 fs_36 ff_sen clr_black pt-3">{items.Design}</h2>
                    <p className=" fw_400 fs_16 ff_inter clr_grye pt-3">{items.Duis}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* *****************  section All Categories*************** */}
      <section className=" mb-5">
        <div className=" container">
          <h2 className=" fw_700 fs_36 clr_blue ff_sen pt-5">All Categories</h2>

          <div className="row mt-5  ">
            {stutend.map((item, i) => {
              return (
                <div className="col-3 pt-5" key={i}>
                  <div className=" card ps-5 pt-3 pb-4">
                    <div>
                      <img className=" " src={item.imgs} alt="" />
                    </div>
                    <div>
                      <div>
                        <h2 className=" fw_700 fs_28 ff_sen clr_blue pt-3"> {item.Business}</h2>
                      </div>
                      <div>
                        <h2 className=" fw_400 fs_16 ff_sen clr_grye ">{item.ipsum}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className=" container"></div>
      </section>
      <footer className=" bg_clr pt-2 mt-5 ">
        <div className=" container ">
          <div className=" d-flex justify-content-between pt-3 pb-4 ">
            <img src={nav_img} alt="" />
            <ul className=" d-flex justify-content-between">
              <li>
                <a className=" fw_400 fs_16 clr_white ff_inter ps-4" href="">
                  Home
                </a>
              </li>
              <li>
                <a className=" fw_400 fs_16 clr_white ff_inter ps-4" href="">
                  Blog
                </a>
              </li>
              <li>
                <a className=" fw_400 fs_16 clr_white ff_inter ps-4" href="">
                  About us
                </a>
              </li>
              <li>
                <a className=" fw_400 fs_16 clr_white ff_inter ps-4" href="">
                  Contact us
                </a>
              </li>
              <li>
                <a className=" fw_400 fs_16 clr_white ff_inter ps-4" href="">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_clr pt-5 ps-4 pb-5 mt-5">
            <div className="row align-items-center">
              <div className=" col-7">
                <h2 className=" clr_white fw_700 fs_36">
                  Subscribe to our news letter to get latest updates and news
                </h2>
              </div>
              <div className=" col-5">
                <input
                  className="fw_400 fs_16 clr_grye input pt-2 pb-2 pe-5 ps-3"
                  type="Email"
                  name="Email"
                  id="email"
                  value={'Enter Your Email'}
                />
                <a className=" fw_700 fs_18 clr_blue btn_footer ms-2" href="">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <div>
              <p className=" fw_400 fs_16  clr_white ff_inter pt-5">Finstreet 118 2561 Fintown</p>
              <p className=" fw_400 fs_16  clr_white ff_inter pb-4">
                Hello@finsweet.com 020 7993 2905
              </p>
            </div>
            <div>
              <img className=" ps-4" src={f_img} alt="" />
              <img className=" ps-4" src={t_img} alt="" />
              <img className=" ps-4" src={n_img} alt="" />
              <img className=" ps-4" src={i_img} alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
