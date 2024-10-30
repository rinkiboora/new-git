import React, { Component } from 'react';
import hero_img from '../assets/img/Layer 2 .png';
import min_logo from '../assets/img/Main Logo .png';
import frame from '../assets/img/Frame 1.png';
import frame2 from '../assets/img/frame 2.png';
import frame3 from '../assets/img/Frame 6.png';
import showdo from '../assets/img/showdo.png';
import HowTowCard from './HowTowCard';
import ellipse from '../assets/img/Ellipse .png';
import ellipse2 from '../assets/img/Ellipse .png';
import ellipse4 from '../assets/img/Ellipse .png';
import ellipse3 from '../assets/img/Ellipse22.png';
import { Valuable } from './Valuable';
import Team2 from './Team2';
import SlickSlider from './SlickSlider';
import nett from '../assets/img/nettt.png';
import dec from '../assets/img/dec.png';
import twe from '../assets/img/tweeter.png';
import img_s from '../assets/img/Ellipse 109 .png';
import e_img from '../assets/img/Ellipse 111.png';
import im from '../assets/img/imgss.png';
import images2 from '../assets/img/cncnn.png';

export class About extends Component {
  render() {
    return (
      <>
        <div className=" position-relative">
          <img className=" imgaaa" src={im} alt="" />
        </div>
        <div className="castam_container">
          <div className=" row pt-5 mt-5  flex-column-reverse flex-lg-row">
            <div className=" col-lg-6 col-12  col-xxl-5 col-sm-10 text-center m-auto  col-md-6 text-lg-start">
              <h2
                className=" fw_700 fs_95  clr_white ff_Orbitron
">
                Welcome to{' '}
                <span className=" fw_700 fs_95  clr_white ff_Orbitron treme">xTREME</span>
              </h2>
              <p className=" fw_400 fs_21 ln_31 clr_white ff_Montserrat pt-3  ">
                xTREME will be a crypto coin that opens the world of NFTs for you just by holding.
              </p>
              <button className=" fw_700 fs_24 ln_30 clr_white btn_join ff_Orbitron mt-3">
                Whitepaper
              </button>
            </div>
            <div className=" col-lg-6  col-xxl-7 col-12  col-sm-11 text-center text-md-start col-md-6 m-auto m-lg-0">
              <img className="  w-100" src={hero_img} alt="" />
            </div>
          </div>
        </div>
        {/* ******************section About Us************** */}
        <section className=" pt-5 mt-5 position-relative ">
          <div className=" castam_container">
            <div className=" row justify-content-md-between text-center text-lg-start justify-content-center align-items-center pt-5">
              <div className="col-lg-5 col-8 col-sm-10 col-md-10 m-auto m-lg-0">
                <div>
                  <div className=" d-lg-flex align-items-center ">
                    <div>
                      <img className=" w_100" src={frame} alt="" />
                      <img className=" pt-4 ps-lg-3 w_100" src={frame2} alt="" />
                    </div>
                    <div>
                      <img className=" ps-lg-5 w_100" src={frame3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" col-lg-6 col-12 col-sm-10 text-center text-lg-start col-md-10 m-auto m-lg-0">
                <h2 className=" fw_700 fs_55 clr_white ff_Orbitron ln_70 mt-5">About Us</h2>
                <p className="fw_400 fs_21 ln_21 clr_white ff_Montserrat">
                  xTREME - Launchpad: will be the one unique project that aims to combine the power
                  of NFT technology and cryptocurrencies. Xtreme will be a crypto coin that opens
                  the world of NFTs for you just by holding. Our goal is to show the POWER OF NFTS
                  to the world, they combined with the POWER OF THE XRP LEDGER
                </p>
                <h2 className=" fw_700 fs_24 ln_29 clr_white ff_Montserrat">See More...</h2>
              </div>
              <div className=" showdo ">
                <img className="   d-none d-xxl-flex" src={showdo} alt="" />
              </div>
              <div className=" position-absolute img2">
                <img className="d-none d-xxl-flex" src={images2} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="  castam_container mt-5 pt-5">
            <SlickSlider />
          </div>
        </section>
        <section className=" mt-5 pt-5 ">
          <div className="  castam_container">
            <h2 className=" fw_700 fs_55 ff_Orbitron clr_white ln_70 text-center mt-5 pb-5 mb-5 ">
              Roadmap
            </h2>
            <div className="line row mt-5">
              <div className="line_crcl col-lg-4 col-12 col-sm-10 col-md-8">
                <div className=" ms-5">
                  <h2 className=" fw_700 fs_29 clr_white ff_Montserratln_38  ">Phase 1</h2>
                  <div className="box mt-5">
                    <h2 className=" fw_600 fs_29 ln_38 clr_white ff_Montserrat">March 2022</h2>

                    <h2 className=" fw_400 fs_21 ln_27 clr_white ff_Montserrat  ">
                      {' '}
                      <span className=" fw_500 fs_55 clr_white ">.</span> Start Website
                    </h2>
                    <h2 className=" fw_400 fs_21 ln_27 clr_white ff_Montserrat">
                      {' '}
                      <span className=" fw_500 fs_55 clr_white ">.</span> Grow Twitter
                    </h2>
                    <h2 className=" fw_400 fs_21 ln_27 clr_white ff_Montserrat">
                      {' '}
                      <span className=" fw_500 fs_55 clr_white ">.</span> Telegram
                    </h2>
                    <h2 className=" fw_400 fs_21 ln_27 clr_white ff_Montserrat">
                      <span className=" fw_500 fs_55 clr_white ">.</span> Presale Start Airdrop
                    </h2>
                  </div>
                </div>
              </div>
              <div className="line_crcl col-lg-4 col-12 col-sm-10  col-md-8">
                <div className=" ms-5">
                  <h2 className=" fw_700 fs_29 clr_white ff_Montserratln_38 ">Phase 2</h2>
                  <div className="box mt-5">
                    <h2 className=" fw_600 fs_29 ln_38 clr_white ff_Montserrat">2022</h2>
                    <h2 className=" fw_400 fs_21 ln_27 clr_white ff_Montserrat">
                      <span className=" fw_500 fs_55 clr_white ">.</span> Start of NFT Launchpad
                    </h2>
                    <h2 className=" fw_400 fs_21 ln_27 clr_white ff_Montserrat">
                      <span className=" fw_500 fs_55 clr_white ">.</span> Hardcore Marketing and
                      Building Strong Community
                    </h2>
                  </div>
                </div>
              </div>
              <div className="line_crcl col-lg-4 col-12 col-sm-10 col-md-8">
                <div className=" ms-5">
                  <h2 className=" fw_700 fs_29 clr_white ff_Montserratln_38  ">Phase 3</h2>
                  <div className="box mt-5">
                    <div className="inner_content">
                      <h2 className=" fw_600 fs_29 ln_38 clr_white ff_Montserrat">2022</h2>
                      <h2 className=" fw_400 fs_21 ln_27 clr_white ff_Montserrat">
                        <span className=" fw_500 fs_55 clr_white ">.</span> Getting Strongest
                        Community on XRPL
                      </h2>
                      <h2 className=" fw_400 fs_21 ln_27 clr_white ff_Montserrat mb-0">
                        <span className=" fw_500 fs_55 clr_white ">.</span> Getting Different NFT
                        Projects on our Launchpad
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ************ * section How to buy************** */}
        <section className=" mt-5 pt-5 position-relative ">
          <div className=" castam_container">
            <h2 className=" fw_700 fs_55 clr_white ff_Orbitron text-center mt-5 pt-5">
              How to buy
            </h2>
            <HowTowCard />
            <div className=" position-absolute img_ellipse d-none d-lg-flex">
              <img className=" w-100" src={ellipse} alt="" />
            </div>
            <div className=" position-absolute img_ellipse2  d-none d-lg-flex">
              <img className="" src={ellipse2} alt="" />
            </div>
          </div>
        </section>
        {/* *************section Valuable NFT**************** */}
        <section className=" pt-5 position-relative  ">
          <div className=" position-absolute img_ellipse3 w-100 d-none d-lg-flex ">
            <img className=" w-1 00" src={ellipse3} alt="" />
          </div>
          <div className=" position-absolute img_ellipse4 w-100 d-none d-l g-flex">
            <img className=" w-1 00" src={ellipse4} alt="" />
          </div>
          <div className="  castam_container pt-5">
            <div className=" bg_img">
              <h2 className=" fw_700 fs_55 clr_white ff_Orbitron text-center">Valuable NFT</h2>
              <Valuable />
            </div>
          </div>
        </section>
        {/* *************section TEAM************** */}
        <section className=" overflow-hidden">
          <div className=" castam_container">
            <h2 className=" ff_Orbitron fw_700 fs_55 clr_white text-center mt-5 pt-5 pb-5   mb-5">
              TEAM
            </h2>
          </div>
          <Team2 />
        </section>
        <footer className=" position-relative ">
          <a href="">
            {' '}
            <img className=" images" src={img_s} alt="" />
          </a>
          <a href="">
            <img className="e_img" src={e_img} alt="" />
          </a>
          <div className=" castam_container">
            <div className=" text-center mt-5 pt-5">
              <img className="" src={min_logo} alt="" />
              <h2
                className="fs_21 fw_400 ln_31 clr_white ff_Poppins pt-3
 ">
                xTREME will be a crypto coin
              </h2>
              <a href="elegram.org">
                <img className=" ps-3 pt-3" src={nett} alt="" />
              </a>
              <a href="https://discord.com/">
                <img className=" ps-3 pt-3" src={dec} alt="" />
              </a>
              <a href="https://x.com/i/flow/login">
                <img className=" ps-3 pt-3" src={twe} alt="" />
              </a>
            </div>
          </div>
          <div className=" border_bottom mt-4"></div>
          <h2 className=" fw_400 fs_21 ff_Orbitron text-center pt-4">Design by 2022</h2>
        </footer>
      </>
    );
  }
}

export default About;
