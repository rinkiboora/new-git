import React, { Component } from 'react';
import NFT from './NFT';
import Trending from './Trending';
import Upcoming from './Upcoming';
import img_x from '../assets/img/XTREME_img.png';
import emoji from '../assets/img/bi_emoji-smile.png';
import nett from '../assets/img/nettt.png';
import dec from '../assets/img/dec.png';
import twe from '../assets/img/tweeter.png';
import min_logo from '../assets/img/Main Logo .png';
import img_s from '../assets/img/Ellipse 109 .png';

export class Team extends Component {
  render() {
    return (
      <div>
        <div className=" castam_container">
          <div className=" d-flex justify-content-between align-items-center pt-5 pb-5">
            <div>
              <h2 className=" ff_Orbitron fw_700 fs_56 clr_white ln_70 ps-5 ms-4 ">
                NFT Collection
              </h2>
            </div>
            <div>
              <div>
                <button className=" button_view clr_white fw_700 fs_24 ln_30 ff_Orbitron">
                  View all
                </button>
              </div>
            </div>
          </div>
          <NFT />
        </div>
        <div>
          <div className=" castam_container">
            <div className=" d-flex justify-content-between align-items-center pt-5 pb-5">
              <div>
                <h2 className=" ff_Orbitron fw_700 fs_56 clr_white ln_70 ps-5 ms-4">
                  Trending Collections
                </h2>
              </div>
              <div>
                <div>
                  <button className=" button_view clr_white fw_700 fs_24 ln_30 ff_Orbitron">
                    View all
                  </button>
                </div>
              </div>
            </div>
            <Trending />
          </div>
          <div className=" castam_container">
            <div className=" d-flex justify-content-between align-items-center pt-5 pb-5">
              <div>
                <h2 className=" ff_Orbitron fw_700 fs_56 clr_white ln_70 ps-5 ms-4 ">
                  Upcoming Collections
                </h2>
              </div>
              <div>
                <div>
                  <button className=" button_view clr_white fw_700 fs_24 ln_30 ff_Orbitron">
                    View all
                  </button>
                </div>
              </div>
            </div>
            <Upcoming />
          </div>
          <div className=" container">
            <div className=" d-flex justify-content-between align-items-center pt-5 pb-5">
              <div>
                <h2 className=" ff_Orbitron fw_700 fs_56 clr_white ln_70 ps-5 ms-4">
                  Top 20 Holders
                </h2>
              </div>
              <div>
                <div>
                  <button className=" button_view clr_white fw_700 fs_24 ln_30 ff_Orbitron">
                    View all
                  </button>
                </div>
              </div>
            </div>
            <div className=" overflow-x-scroll ">
              <table className="w-100" style={{ width: '400px' }}>
                <tr className="clr   ">
                  <th className=" w_33"></th>
                  <th className=" pt-3 pb-2 ">
                    {' '}
                    <h2 className=" fw_700 fs_32 ff_Orbitron ln_40 clr_white">Nickname</h2>
                  </th>

                  <th>
                    {' '}
                    <h2 className=" fw_700 fs_32 ff_Orbitron ln_40 clr_white ms-5 ms-lg-0">
                      Acrven
                    </h2>
                  </th>
                  <th>
                    {' '}
                    <h2 className="fw_700 fs_32 ff_Orbitron ln_40 clr_white ms-5 ms-lg-0">
                      Achivmanif
                    </h2>
                  </th>
                </tr>
                <div className="mt-3"></div>
                <tr className=" clr mt-4 ">
                  <td className=" pt-3 pb-3">
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white ms-4 me-4 me-lg-0">
                      1
                    </h2>
                  </td>
                  <td>
                    {' '}
                    <div className=" d-flex">
                      <div>
                        <img src={img_x} alt="" />
                      </div>
                      <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white me-4 me-lg-0">
                        Acrven
                      </h2>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">xx456xx42346</h2>
                  </td>
                  <td>
                    <div className=" d-flex align-items-center ">
                      <div>
                        <img className=" pe-2" src={emoji} alt="" />
                      </div>
                      <h2 className=" clr_white">x</h2>
                      <div>
                        <img className=" ps-2" src={emoji} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <div className=" bottim_border"></div>
                <tr className=" clr mt-4">
                  <td className=" pt-3 pb-3">
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white ms-4">2</h2>
                  </td>
                  <td>
                    {' '}
                    <div className=" d-flex">
                      <div>
                        <img src={img_x} alt="" />
                      </div>
                      <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">Acrven</h2>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">xx456xx42346</h2>
                  </td>
                  <td>
                    <div className=" d-flex align-items-center ">
                      <div>
                        <img className=" pe-2" src={emoji} alt="" />
                      </div>
                      <h2 className=" clr_white">x</h2>
                      <div>
                        <img className=" ps-2" src={emoji} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <div className=" bottim_border"></div>
                <tr className=" clr mt-4">
                  <td className=" pt-3 pb-3">
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white ms-4">3</h2>
                  </td>
                  <td>
                    {' '}
                    <div className=" d-flex">
                      <div>
                        <img src={img_x} alt="" />
                      </div>
                      <h2 className="fw_400 fs_24 ff_Orbitron ln_40 clr_white">Acrven</h2>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">xx456xx42346</h2>
                  </td>
                  <td>
                    <div className=" d-flex align-items-center ">
                      <div>
                        <img className=" pe-2" src={emoji} alt="" />
                      </div>
                      <h2 className=" clr_white">x</h2>
                      <div>
                        <img className=" ps-2" src={emoji} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <div className=" bottim_border"></div>
                <tr className=" clr mt-4">
                  <td className=" pt-3 pb-3">
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white ms-4">3</h2>
                  </td>
                  <td>
                    {' '}
                    <div className=" d-flex">
                      <div>
                        <img src={img_x} alt="" />
                      </div>
                      <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">Acrven</h2>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">xx456xx42346</h2>
                  </td>
                  <td>
                    <div className=" d-flex align-items-center ">
                      <div>
                        <img className=" pe-2" src={emoji} alt="" />
                      </div>
                      <h2 className=" clr_white">x</h2>
                      <div>
                        <img className=" ps-2" src={emoji} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <div className=" bottim_border"></div>
                <tr className=" clr mt-4">
                  <td className=" pt-3 pb-3">
                    {' '}
                    <h2 className="fw_400 fs_24 ff_Orbitron ln_40 clr_white ms-4">4</h2>
                  </td>
                  <td>
                    {' '}
                    <div className=" d-flex">
                      <div>
                        <img src={img_x} alt="" />
                      </div>
                      <h2 className="fw_400 fs_24 ff_Orbitron ln_40 clr_white">Acrven</h2>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">xx456xx42346</h2>
                  </td>
                  <td>
                    <div className=" d-flex align-items-center ">
                      <div>
                        <img className=" pe-2" src={emoji} alt="" />
                      </div>
                      <h2 className=" clr_white">x</h2>
                      <div>
                        <img className=" ps-2" src={emoji} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
                <div className=" bottim_border"></div>
                <tr className=" clr mt-4">
                  <td className=" pt-3 pb-3">
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white ms-4">5</h2>
                  </td>
                  <td>
                    {' '}
                    <div className=" d-flex">
                      <div>
                        <img src={img_x} alt="" />
                      </div>
                      <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">Acrven</h2>
                    </div>
                  </td>
                  <td>
                    {' '}
                    <h2 className=" fw_400 fs_24 ff_Orbitron ln_40 clr_white">xx456xx42346</h2>
                  </td>
                  <td>
                    <div className=" d-flex align-items-center ">
                      <div>
                        <img className=" pe-2" src={emoji} alt="" />
                      </div>
                      <h2 className=" clr_white">x</h2>
                      <div>
                        <img className=" ps-2" src={emoji} alt="" />
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <img className="img_s d-none d-lg-flex" src={img_s} alt="" />
        </div>

        <footer className="position-relative">
          <img className=" imgg d-none d-lg-flex" src={img_s} alt="" />
          <div className=" container">
            <div className=" text-center mt-5 pt-5">
              <img className="" src={min_logo} alt="" />
              <h2
                className="fs_21 fw_400 ln_31 clr_white ff_Poppins pt-3
 ">
                xTREME will be a crypto coin
              </h2>
              <img className=" ps-3 pt-3" src={nett} alt="" />
              <img className=" ps-3 pt-3" src={dec} alt="" />
              <img className=" ps-3 pt-3" src={twe} alt="" />
            </div>
          </div>
          <div className=" border mt-4"></div>
          <h2 className=" fw_400 fs_21 ff_Orbitron text-center pt-4">Design by 2022</h2>
        </footer>
      </div>
    );
  }
}

export default Team;
