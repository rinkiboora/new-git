import React from 'react';
import Slider from 'react-slick';
import img44 from '../assets/img/unsplash_Iq11eskt5AQ.png';
import boy_img1 from '../assets/img/Ellipse 96 (14).png';
import img55 from '../assets/img/unsplash_7.png';
import img_img from '../assets/img/Ellipse 96 (15).png';
import img66 from '../assets/img/unsp.png';
import boy from '../assets/img/Ellipse2222.png';
import crcl from '../assets/img/fa_dot-circle-o.png';
import crcl2 from '../assets/img/dot-circle.png';
import crcl3 from '../assets/img/fa_dot-circle-o.png';
function Responsive() {
  var settings = {
    dots: false,
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
          infinite: false,
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
    <div className=" container-fluid ps-4 pe-4">
      <Slider {...settings}>
        <div>
          <div className=" position-relative div_box ms-5">
            <div className="text">
              <h1 className=" clr_white fw_500 fs_32 ff_Orbitron">Sold Out</h1>
            </div>
            <img className=" w-100" src={img44} alt="" />
            <img className=" position-absolute img_slider w_50    " src={boy_img1} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5  pt-5  text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat   text-center">
              XRP 0.28998
            </h2>
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat   text-center">
              Supply : 600
            </h2>
          </div>
        </div>
        <div>
          <div className=" position-relative div_box ms-5">
            <div className="text">
              <h1 className=" clr_white fw_500 fs_32 ff_Orbitron">Sold Out</h1>
            </div>
            <img className=" w-100" src={img55} alt="" />
            <img className=" position-absolute img_slider w_50   " src={img_img} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5 text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat   text-center">
              XRP 0.28998
            </h2>
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat   text-center">
              Supply : 600
            </h2>
          </div>
        </div>
        <div>
          <div>
            <div className=" position-relative div_box ms-5">
              <div className="text">
                <h1 className=" clr_white fw_500 fs_32 ff_Orbitron">Sold Out</h1>
              </div>
              <img className=" w-100" src={img66} alt="" />
              <img className=" position-absolute img_slider w_50   " src={boy} alt="" />
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5  text-center">
                Bored Ape Club
              </h2>
              <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat   text-center">
                XRP 0.28998
              </h2>
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat   text-center">
                Supply : 600
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className=" position-relative div_box ms-5">
            <div className="text">
              <h1 className=" clr_white fw_500 fs_32 ff_Orbitron">Sold Out</h1>
            </div>
            <img className=" w-100" src={img44} alt="" />
            <img className=" position-absolute img_slider w_50   " src={boy_img1} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5  pt-5 text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat   text-center">
              XRP 0.28998
            </h2>
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat   text-center">
              Supply : 600
            </h2>
          </div>
        </div>
        <div>
          <div>
            <div className=" position-relative div_box ms-5">
              <div className="text">
                <h1 className=" clr_white fw_500 fs_32 ff_Orbitron">Sold Out</h1>
              </div>
              <img className=" w-100 " src={img55} alt="" />
              <img className=" position-absolute img_slider w_50   " src={img_img} alt="" />
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5 pt-5  text-center">
                Bored Ape Club
              </h2>
              <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat   text-center">
                XRP 0.28998
              </h2>
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat   text-center">
                Supply : 600
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className=" position-relative div_box ms-5">
              <div className="text">
                <h1 className=" clr_white fw_500 fs_32 ff_Orbitron">Sold Out</h1>
              </div>
              <img className=" w-100" src={img66} alt="" />
              <img className=" position-absolute img_slider w_50   " src={boy} alt="" />
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5  pt-5 text-center">
                Bored Ape Club
              </h2>
              <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat   text-center">
                XRP 0.28998
              </h2>
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat   text-center">
                Supply : 600
              </h2>
            </div>
          </div>
        </div>
        <div>
          <div className=" position-relative div_box ms-5">
            <div className="text">
              <h1 className=" clr_white fw_500 fs_32 ff_Orbitron">Sold Out</h1>
            </div>
            <img className=" w-100" src={img44} alt="" />
            <img className=" position-absolute img_slider w_50   " src={boy_img1} alt="" />
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5  pt-5 text-center">
              Bored Ape Club
            </h2>
            <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat   text-center">
              XRP 0.28998
            </h2>
            <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat   text-center">
              Supply : 600
            </h2>
          </div>
        </div>
        <div>
          <div>
            <div className=" position-relative div_box ms-5">
              <div className="text">
                <h1 className=" clr_white fw_500 fs_32 ff_Orbitron">Sold Out</h1>
              </div>
              <img className=" w-100" src={img55} alt="" />
              <img className=" position-absolute img_slider w_50   " src={img_img} alt="" />
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat mt-5  pt-5 text-center">
                Bored Ape Club
              </h2>
              <h2 className="fw_400 fs_21 ln_21 clr_white ff_Montserrat   text-center">
                XRP 0.28998
              </h2>
              <h2 className=" fw_400 fs_21 ln_24 clr_white ff_Montserrat   text-center">
                Supply : 600
              </h2>
            </div>
          </div>
        </div>
      </Slider>
      <div className=" d-flex justify-content-center mt-4">
        <img className=" ms-3" src={crcl} alt="" />
        <img className=" ms-3" src={crcl2} alt="" />
        <img className=" ms-3" src={crcl3} alt="" />
      </div>
    </div>
  );
}

export default Responsive;
