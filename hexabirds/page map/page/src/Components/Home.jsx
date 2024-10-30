import React from 'react';
import nav_img from '../assets/img/logo.png';
import white_concret from '../assets/img/white-concrete.png';
import icon_1 from '../assets/img/Icon1.png';
import icon_2 from '../assets/img/Group 9179.png';
import icon_3 from '../assets/img/icon3.png';
import icon_4 from '../assets/img/icon4.png';
import boy from '../assets/img/boy1.png';
import woman1 from '../assets/img/woman1.png';
import woman2 from '../assets/img/woman2.png';
import woman3 from '../assets/img/moman3.png';
import facsbook from '../assets/img/facsbook.png';
import vector from '../assets/img/Vector.png';
import insta from '../assets/img/insta.png';
import linkdin from '../assets/img/linkdin.png';
import f_img from '../assets/img/facs.png';
import t_img from '../assets/img/twet.png';
import n_img from '../assets/img/linnk.png';
import i_img from '../assets/img/instagraam.png';

const Home = () => {
  let card = [
    {
      lorem: 'By John Deo l Aug 23, 2021',
      figma: '8 Figma design systems that you can download for free today',
    },
    {
      lorem: 'By John Deo l Aug 23, 2021',
      figma: '8 Figma design systems that you can download for free today',
    },
    {
      lorem: 'By John Deo l Aug 23, 2021',
      figma: '8 Figma design systems that you can download for free today',
    },
    {
      lorem: 'By John Deo l Aug 23, 2021',
      figma: '8 Figma design systems that you can download for free today',
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
  let box_2 = [
    {
      img2: boy,
      Floyd: ' Floyd Miles',
      Content: 'Content Writer @Company',
      img: facsbook,
    },
    {
      img2: woman1,
      Floyd: ' Dianne Russell',
      Content: 'Content Writer @Company',
      img: facsbook,
    },
    {
      img2: woman2,
      Floyd: ' Jenny Wilson',
      Content: 'Content Writer @Company',
      img: facsbook,
    },
    {
      img2: woman3,
      Floyd: 'Leslie Alexander',
      Content: 'Content Writer @Company',
      img: facsbook,
    },
  ];

  return (
    <div>
      <div>
        {/* ************************section Step-by-step **************************** */}
        <section className=" bg_img">
          <div className="bg_color">
            <div className=" container ">
              <div className=" position-relative z-3 pt-5">
                <h2 className=" fw_600 fs_16 clr_white ff_inter pt-5 ">Posted on startup</h2>
                <h2 className=" fw_700 fs_56 clr_white ff_inter pt-4 col-10 ps-5">
                  Step-by-step guide to choosing great font pairs
                </h2>
                <h4 className=" fw_400 fs_16 clr_white ff_inter pt-4 ">
                  By <span className=" fw_400 fs_16 clr_yellow ff_inter ">James West</span> | May
                  23, 2022{' '}
                </h4>
                <p className=" clr_white fw_400 fs_16 ff_inter col-7 pt-4 pb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <a className="fw_700 fs_18 clr_blue ff_sen btn_read ps-5 pe-5 " href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* **************section Featured Post************ */}
        <section>
          <div className=" container">
            <div className=" row justify-content-between pt-5">
              <div className=" col-6">
                <h2 className=" fw_700 fs_36 clr_blue ff_sen pb-4">Featured Post</h2>
                <img className=" w-100" src={white_concret} alt="" />
                <p className=" fw_500 fs_14 clr_black ff_inter pt-4">
                  By <span className=" fw_500 fs_14 clr_blue ff_inter">John Doe</span> l May 23,
                  2022{' '}
                </p>
                <h3 className=" fw_700 fs_28 clr_black ff_sen">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </h3>
                <p className=" fw_400 fs_16 clr_grye ff_inter pb-4">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <a className="fw_700 fs_18 clr_blue ff_sen btn_read ps-5 pe-5 " href="">
                  Read More
                </a>
              </div>
              <div className=" col-4 ps-5">
                <h2 className=" fw_700 fs_36 clr_blue ff_sen">All Posts</h2>
                <div>
                  {card.map((items, i) => {
                    return (
                      <div key={i}>
                        <p className=" fw_500 fs_14 clr_black ff_inter">{items.lorem}</p>
                        <p className="  fw_700 fs_24 clr_black ff_sen">{items.figma}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" col-2">
                <h2 className=" fw_400 fs_16 clr_blue2 ff_inter">View All</h2>
              </div>
            </div>
          </div>
        </section>
        {/* **************section Choose A Catagory****************** */}
        <section>
          <div className=" container">
            <h2 className="fw_700 fs_36 ff_sen clr_blue text-center pt-5 mt-4">
              Choose A Catagory
            </h2>
            <div className="row mt-5">
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
        {/* *****************section List of Authors***************** */}
        <section className=' mb-5'>
          <div className=" container">
            <h2 className=" fw_700 fs_36 clr_blue ff_sen text-center pt-5 mt-5">List of Authors</h2>
            <div className=" row mt-5 pt-5">
              {box_2.map((item, i) => {
                return (
                  <div className=" col-3" key={i}>
                    <div className=" box2 ps-3 pt-4 pb-4 pe-3 text-center">
                      <div>
                        <img src={item.img2} alt="" />
                      </div>
                      <div>
                        <h1 className="fw_700 fs_24 clr_blue pt-4 ff_sen">{item.Floyd}</h1>
                        <p className=" fw_400 fs_14 clr_grye ff_inter ">{item.Content}</p>
                      </div>
                      <div className=" text-center">
                        <img src={facsbook} alt="" />
                        <img className=" ps-3" src={vector} alt="" />
                        <img className=" ps-3" src={insta} alt="" />
                        <img className=" ps-3" src={linkdin} alt="" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <footer className=" bg_clr pt-2">
          <div className=" container">
            <div className=" d-flex justify-content-between pt-3 pb-4">
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
    </div>
  );
};

export default Home;
