import React from 'react';
import color_img from '../assets/img/color_img.png';
import boy_img from '../assets/img/boy.png';
import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';
import img_color from '../assets/img/img_color.png';
import img_boy2 from '../assets/img/boy2.png';
import gril from '../assets/img/gril3.png';
import imges2 from '../assets/img/Ellipse 101.png';

const Team2 = () => {
  let team_box = [
    {
      img: img_color,
      img_boy: boy_img,
      xTOMMY: 'xTOMMY',
      FOUNDER: 'FOUNDER',
      Development: 'Development, Master of Shilling Promotion',
      img_facebook: facebook,
      img_instagram: instagram,
      img_twitter: twitter,
    },
    {
      img: color_img,
      img_boy: img_boy2,
      xTOMMY: 'xMAJOR',
      FOUNDER: 'COFOUNDER',
      Development: 'Graphics, Design',
      img_facebook: facebook,
      img_instagram: instagram,
      img_twitter: twitter,
    },
    {
      img: color_img,
      img_boy: gril,
      xTOMMY: 'xKitty',
      FOUNDER: 'MARKETING',
      Development: 'Marketing, Building Communities, Telegram',
      img_facebook: facebook,
      img_instagram: instagram,
      img_twitter: twitter,
    },
  ];
  return (
    <div>
      <div className=" castam_container">
        <div className=" row div justify-content-center ">
          {team_box.map((items, i) => {
            return (
              <div className=" col-lg-4 col-12 col-sm-9 mt-5 col-md-6" key={i}>
                <div className="box_team position-relative    ">
                  <div className=" ">
                    <img className=" w-100" src={items.img} alt="" />
                  </div>
                  <div className=" position-absolute img_boy">
                    <img src={items.img_boy} alt="" />
                  </div>

                  <h2 className=" fw_700 fs_32 ln_40 clr_white ff_Orbitron text-center pt-lg-3 mt-5 pt-5 mt-4">
                    {items.xTOMMY}
                  </h2>
                  <h2 className=" fw_500 fs_18 ln_28 clr_white ff_Orbitron text-center pt-3">
                    {items.FOUNDER}
                  </h2>
                  <h2 className=" fw_500 fs_18 ln_22 clr_white ff_Montserrat text-center pt -3 ps-4 pe-4">
                    {items.Development}
                  </h2>
                  <div className=" text-center pb-4 ">
                    <a href="">
                      <img className=" ps-3 pt-3" src={items.img_facebook} alt="" />
                    </a>
                    <a href="">
                      {' '}
                      <img className=" ps-3 pt-3" src={items.img_instagram} alt="" />
                    </a>
                    <a href="">
                      {' '}
                      <img className=" ps-3 pt-3" src={items.img_twitter} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team2;
