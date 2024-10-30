import React from 'react';
import Slider from 'react-slick';
import img44 from '../assets/img/unsplash.png';
import boy_img1 from '../assets/img/img img.png';
import img55 from '../assets/img/ttttt.png';
import img_img from '../assets/img/gril img.png';
import img66 from '../assets/img/img77.png';
import boy from '../assets/img/boy 33.png';
import circle from '../assets/img/fa_dot-circle-o.png';
import circle2 from '../assets/img/fa_dot-circle-o (1).png';

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" castam_container ps-4 pe-4">
      <Slider {...settings}>
        <div>
          <div className=" position-relative div_box ms-5">
            <img className=" w-100" src={img44} alt="" />
            <img className=" position-absolute img_boyy w_50  " src={boy_img1} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5  text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat pb-4   text-center">
              XRP 0.28998
            </h2>
          </div>
        </div>
        <div>
          <div className=" position-relative div_box ms-5  ">
            <img className=" w-100" src={img55} alt="" />
            <img className=" position-absolute img_boyy w_50  " src={img_img} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5 text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat  pb-4   text-center">
              XRP 0.28998
            </h2>
          </div>
        </div>
        <div>
          <div>
            <div className=" position-relative div_box ms-5">
              <img className=" w-100" src={img66} alt="" />
              <img className=" position-absolute img_boyy w_50  " src={boy} alt="" />
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5  text-center">
                Bored Ape Club
              </h2>
              <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat  pb-4   text-center">
                XRP 0.28998
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className=" position-relative div_box ms-5">
            <img className=" w-100" src={img44} alt="" />
            <img className=" position-absolute img_boyy w_50  " src={boy_img1} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5  text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat pb-4   text-center">
              XRP 0.28998
            </h2>
          </div>
        </div>
        <div>
          <div className=" position-relative div_box ms-5  ">
            <img className=" w-100" src={img55} alt="" />
            <img className=" position-absolute img_boyy w_50  " src={img_img} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5 text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat  pb-4   text-center">
              XRP 0.28998
            </h2>
          </div>
        </div>

        <div>
          <div>
            <div className=" position-relative div_box ms-5">
              <img className=" w-100" src={img66} alt="" />
              <img className=" position-absolute img_boyy w_50  " src={boy} alt="" />
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5  text-center">
                Bored Ape Club
              </h2>
              <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat  pb-4   text-center">
                XRP 0.28998
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className=" position-relative div_box ms-5">
            <img className=" w-100" src={img44} alt="" />
            <img className=" position-absolute img_boyy w_50  " src={boy_img1} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5  text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat pb-4   text-center">
              XRP 0.28998
            </h2>
          </div>
        </div>
        <div>
          <div className=" position-relative div_box ms-5  ">
            <img className=" w-100" src={img55} alt="" />
            <img className=" position-absolute img_boyy w_50  " src={img_img} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5 text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat  pb-4   text-center">
              XRP 0.28998
            </h2>
          </div>
        </div>
        <div>
          <div>
            <div className=" position-relative div_box ms-5">
              <img className=" w-100" src={img66} alt="" />
              <img className=" position-absolute img_boyy w_50  " src={boy} alt="" />
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5  text-center">
                Bored Ape Club
              </h2>
              <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat  pb-4   text-center">
                XRP 0.28998
              </h2>
            </div>
          </div>
        </div>
      </Slider>
      <div className=" d-flex justify-content-center mt-4">
        <img className=" ms-4" src={circle} alt="" />
        <img className=" ms-4" src={circle2} alt="" />
        <img className=" ms-4" src={circle} alt="" />
      </div>
    </div>
  );
}
export default Responsive;
