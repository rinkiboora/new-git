import React from 'react';
import img from './assets/img/gif.gif';
import insta from './assets/img/insta.png';
import tweter from './assets/img/tweter.png';
import dec from './assets/img/dec.png';
import ellipse from './assets/img/Ellipse 3.png';
import ellipse1 from './assets/img/Ellipse 3.png';
import ellipse_left from './assets/img/shawdo legt.png';
import art from './assets/img/img 1.png';
import img1 from './assets/img/6 (1).png';
import img2 from './assets/img/6 (2).png';
import img3 from './assets/img/6 (4).png';
import img4 from './assets/img/6 (5).png';
import img5 from './assets/img/6 (6).png';
import cercl from './assets/img/crcl.png';
import Accordion from 'react-bootstrap/Accordion';
import image from './assets/img/1 img.png';
import image1 from './assets/img/2 img.png';
import imagepage from './assets/img/3 img.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <header className="hero_img  pb-lg-5">
        <div className=" container pb-lg-5">
          <div>
            <Navbar expand="lg" className="">
              <Container>
                <Navbar.Brand href="#home">
                  <li className=" fs_21  fw_600 ff_Poppins  clr_white">Logo</li>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-end">
                  <Nav className="">
                    <Nav.Link href="#home">
                      <li>
                        <a className=" fs_18  fw_500 clr_white ff_Poppins  ps-5" href="">
                          Minting
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <li>
                        <a className=" fs_18  fw_500 clr_white ff_Poppins ps-5" href="">
                          Road Map
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <li>
                        <a className=" fs_18  fw_500 clr_white ff_Poppins  ps-5" href="">
                          Faq
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <li>
                        <a className=" fs_18  fw_500 clr_white ff_Poppins ps-5 " href="">
                          Team
                        </a>
                      </li>
                    </Nav.Link>
                    <Nav.Link href="#link">
                      <li>
                        <a className=" fs_18  fw_500 clr_white ff_Poppins ps-5 " href="">
                          Join Us
                        </a>
                      </li>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
          <h2 className=" fs_70 fw_400 clr_white ff_Poppins col-lg-7 col-md-9 pt-5 pt-lg-5 mt-lg-5">
            Vitae nunc, <span className=" fs_70 fw_700 clr_white ff_Poppins">blandit a odio</span>
          </h2>
          <p className=" fs_20 fw_500 ff_Poppins clr_white col-lg-6 col-md-10 pt-4">
            Semper in egestas risus id tempus. Pellentesque dolor eros sollicitudin feugiat ut odio
            semper. Mattis fermentum eget ut vestibulum dolor diam
          </p>
          <div className=" pb-3 text-center  text-lg-start pb-lg-5">
            <button className=" fs_25 fw_500 clr_blue ff_Poppins border-0 btn_get mt-3">
              Get Started
            </button>
          </div>
        </div>
      </header>
      {/*============= section Mint Your Bat============ */}
      <div className=" bg_clr pt-5">
        <section className=" position-relative pb-5 ">
          <div className=" container">
            <div className=" row justify-content-between align-items-center">
              <div className=" col-lg-7 col-10">
                <img className=" w-100" src={img} alt="" />
              </div>
              <div className=" col-lg-5 col-12 pt-5 pt-lg-0 text-center text-lg-start">
                <h2 className=" fs_50 fw_500 ff_Poppins clr_white pt-lg-5 mt-lg-5">
                  Mint Your Bat
                </h2>
                <h2 className=" fs_30 fw_500 clr_white ff_Poppins pt-5">Minting: 1,5 SOL</h2>
                <h4 className=" clr_white line_throt fw_400 fs_16 clr_grye">Before 2 SOL</h4>
                <h2 className=" fs_30 fw_500 clr_white ff_Poppins pt-4">Whitelist: 0,88 SOL</h2>
                <h4 className=" clr_white line_throt fw_400 fs_16 clr_grye pb-lg-5">
                  Before 1 SOL
                </h4>
                <button className=" fs_25 fw_500 clr_blue ff_Poppins border-0 btn_get mt-5 d-block m-auto m-lg-0">
                  Coming soon
                </button>
                <div className=" text-center text-lg-start">
                  <img className=" pt-5" src={insta} alt="" />
                  <img className=" pt-5 ps-4" src={tweter} alt="" />
                  <img className=" pt-5 ps-4" src={dec} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className=" w-100 h-100 position-absolute shadow d-none d-lg-flex"
              src={ellipse}
              alt=""
            />
          </div>
        </section>
        <section className=" pt-5">
          <div className=" container">
            <div className=" row justify-content-center ">
              <div className=" col-lg-4 mt-4 mt-lg-0 col-12 col-sm-6 col-md-6 text-center text-md-start ">
                <div className=" box ps-4">
                  <img className=" pt-3" src={art} alt="" />
                  <h2 className=" fw_600 fs_30 ff_Poppins clr_white pt-4">ART COLLECTION</h2>
                  <p className=" fw_400 fs_16 clr_white ff_Poppins pt-3 pb-4 ">
                    Complete the art collection in full with +70 unique traits, and publish our
                    rarity chart on our webpage.
                  </p>
                </div>
              </div>
              <div className=" col-lg-4 mt-4 mt-lg-0 col-12 col-sm-6 col-md-6 text-center text-md-start">
                <div className=" box ps-4 ">
                  <img className=" pt-3" src={img1} alt="" />
                  <h2 className=" fw_600 fs_30 ff_Poppins clr_white pt-4">SPECIAL BULLIES</h2>
                  <p className=" fw_400 fs_16 clr_white ff_Poppins pt-3 pb-4">
                    20 Buddybullies out of 10k will have a very special and ersonalized resembling
                    of famous people who are into NFTs those will be available after the minting.
                  </p>
                </div>
              </div>
              <div className=" col-lg-4 mt-4 mt-lg-0 col-12 col-sm-6 col-md-6 text-center text-md-start">
                <div className=" box ps-4 ">
                  <img className=" pt-3" src={img2} alt="" />
                  <h2 className=" fw_600  fs_30 ff_Poppins clr_white pt-4">BREEDING</h2>
                  <p className=" fw_400 fs_16 clr_white ff_Poppins pt-3 pb-4">
                    Our BuddyBullies will not come alone, as we will announce the breeding function
                    after the minting and you will be able to get a PuppyBully .
                  </p>
                </div>
              </div>
              <div className=" col-lg-4  mt-4 col-12 col-sm-6 col-md-6 text-center text-md-start">
                <div className=" box ps-4 ">
                  <img className=" pt-3" src={img3} alt="" />
                  <h2 className=" fw_600  fs_30 ff_Poppins clr_white pt-4">DIGITALMARKETS</h2>
                  <p className=" fw_400 fs_16 clr_white ff_Poppins pt-3 pb-4">
                    Communicate with all the digital markets available in the Solana NFT world for
                    getting our collection successfully listed.
                  </p>
                </div>
              </div>
              <div className=" col-lg-4  mt-4 col-12 col-sm-6 col-md-6 text-center text-md-start">
                <div className=" box ps-4 ">
                  <img className=" pt-3" src={img4} alt="" />
                  <h2 className=" fw_600  fs_30 ff_Poppins clr_white pt-4">MERCH</h2>
                  <p className=" fw_400 fs_16 clr_white ff_Poppins pt-3 pb-4">
                    The team is working on the future merch thet will be available for the community
                    members directly on our webpage.
                  </p>
                </div>
              </div>
              <div className=" col-lg-4 text-center text-md-start mt-4 mt-4 col-12 col-sm-6 col-md-6">
                <div className=" box ps-4 ">
                  <img className=" pt-3" src={img5} alt="" />
                  <h2 className=" fw_600  fs_30 ff_Poppins clr_white pt-4">CHARITY</h2>
                  <p className=" fw_400 fs_16 clr_white ff_Poppins pt-3 pb-4">
                    We will be giving 30% of the royalties to charity permanently and we will keep
                    spending on marketing, promotions and partnership.50% of the riyalties will go
                    back to the community as rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ================section Roadmap============== */}
        <section className=" position-relative">
          <img
            className=" w-100 h-100 position-absolute shadow_left d-none"
            src={ellipse_left}
            alt=""
          />
          <div className=" container pt-lg-5">
            <h2 className=" fw_600 fs_50 ff_Poppins clr_white text-center pt-5 mt-lg-5 pb-lg-5">
              Roadmap
            </h2>
            <div className="line_roadmap mt-5 mb-5  ">
              <img className="img_crcl" src={cercl} alt="" />
              <div className="d-md-flex justify-content-md-end ">
                <div className="  m _end ms-5 ps-md-5 w-50   ">
                  <h2 className=" fw_600 fs_30 ff_Poppins clr_white">Q-4, 2021</h2>
                  <p className=" fw_400 fs_16 ff_Poppins clr_white col-md-10 ">
                    Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat
                    dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus
                    tristique.
                  </p>
                </div>
              </div>

              <div className="  text-md-end  pe-sm-5 me-3 pt-5 mt-5 ">
                <img className="img_crcl" src={cercl} alt="" />
                <div className=" ms-5 w-50 pe-md-5">
                  <h2 className=" fw_600 fs_30 ff_Poppins clr_white pe-sm-5 me-4 ">Q-1, 2022</h2>
                  <p className=" fw_400 fs_16 ff_Poppins clr_white col-lg-10">
                    Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat
                    dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus
                    tristique.
                  </p>
                </div>
              </div>
              <div className=" d-md-flex justify-content-md-end pt-5 mt-5  ">
                <img className="img_crcl" src={cercl} alt="" />
                <div className=" ms-5 w-50 ps-md-5  ">
                  <h2 className=" fw_600 fs_30 ff_Poppins clr_white">Q-2, 2022</h2>
                  <p className=" fw_400 fs_16 ff_Poppins clr_white col-md-10">
                    Blandit sed penatibus elit tortor fermentum velit donec. Id eleifend volutpat
                    dolor netus auctor at. Volutpat sed auctor non in commodo, felis viverra risus
                    tristique.
                  </p>
                </div>
              </div>
            </div>
            <h2 className=" fs_30 fw_500 clr_white ff_Poppins col-lg-9 text-center m-auto pt-5">
              And this just the begining , the team is working on more suprises for our community.
              Buddybullies stronger together !!
            </h2>
          </div>
        </section>
        {/* *****************section FAQs********************* */}
        <section className=" position-relative pt-lg-5 ">
          <div className=" w-50">
            <img className=" w-100 h-100 position-absolute shadow2 " src={ellipse1} alt="" />
          </div>
          <div className=" container">
            <h2 className=" fs_50 fw_600 clr_white ff_Poppins text-center pt-5 mt-5">FAQs</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h2 className=" fw_500 fs_20 clr_white ff_Poppins">
                    What’s the blockchain the buddybullies call home ?
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <p className=" fw_500 fs_16 clr_white ff_Poppins">
                    Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing
                    ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque
                    turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <h2 className=" fw_500 fs_20 clr_white ff_Poppins">
                    What’s the blockchain the buddybullies call home ?
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <p className=" fw_500 fs_16 clr_white ff_Poppins">
                    Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing
                    ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque
                    turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <h2 className=" fw_500 fs_20 clr_white ff_Poppins">
                    What’s the blockchain the buddybullies call home ?
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <p className=" fw_500 fs_16 clr_white ff_Poppins">
                    Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing
                    ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque
                    turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <h2 className=" fw_500 fs_20 clr_white ff_Poppins">
                    What’s the blockchain the buddybullies call home ?
                  </h2>
                </Accordion.Header>
                <Accordion.Body>
                  <p className=" fw_500 fs_16 clr_white ff_Poppins">
                    Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus mattis adipiscing
                    ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat neque
                    turpis. Fringilla dui donec nullam faucibus vitae non, integer. Non.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>
        {/* ****************section Our Team******************** */}
        <section className=" pb-5 pt-lg-5 mt-lg-3">
          <div className=" container">
            <h2 className=" fs_50 fw_600 clr_white ff_Poppins text-center pt-5 mt-5">Our Team</h2>
            <div className="row pt-5 justify-content-center">
              <div className=" col-lg-4 col-10 text-center col-sm-6 col-md-4">
                <img className=" w-100" src={image} alt="" />
                <h2 className=" fs_600 fw_600 clr_white ff_Poppins text-center pt-3">
                  Prime Bullister{' '}
                </h2>
                <h4 className=" fw_400 fs_18 clr_white ff_Poppins text-center">Pruduct Designer</h4>
              </div>
              <div className=" col-lg-4 col-10 text-center col-sm-6 col-md-4 pt-5 pt-sm-0">
                <img className=" w-100" src={image1} alt="" />
                <h2 className=" fs_600 fw_600 clr_white ff_Poppins text-center pt-3">
                  Solvador Bulli{' '}
                </h2>
                <h4 className=" fw_400 fs_18 clr_white ff_Poppins text-center">Artist</h4>
              </div>
              <div className=" col-lg-4 col-10 text-center col-sm-6 col-md-4  pt-5 pt-md-0">
                <img className=" w-100" src={imagepage} alt="" />
                <h2 className=" fs_600 fw_600 clr_white ff_Poppins text-center pt-3">
                  Meta Bully{' '}
                </h2>
                <h4 className=" fw_400 fs_18 clr_white ff_Poppins text-center">Developer</h4>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer_img ">
          <div className=" mt-5 ">
            <h2 className=" fw_600 fs_50 clr_white ff_Poppins text-center mt-5 pt-lg-5">JOIN US</h2>
          </div>
          <div className=" container ">
            <div className=" row pt-5 mt-5 align-items-center justify-content-center">
              <div className=" col-lg-7 col-12 text-center col-sm-6 text-sm-start col-md-5">
                <h2 className=" fw_500 fs_30 clr_white ff_Poppins  mt-5 ">LOGO</h2>
                <p className=" fw_400 fs_16 clr_white ff_Poppins col-lg-8 ">
                  Aenean arcu sed rhoncus sapien euismod cursus morbi lacus, blandit. Placerat
                  tortor duis fames cras pellentesque dui adipiscing neque gravida. Sociis neque
                  consectetur id quis pharetra.
                </p>
                <p className=" fw_400 fs_16 clr_white ff_Poppins">Email@gmail.com</p>
              </div>
              <div className="col-lg-3 col-12 text-center col-sm-6 text-sm-start col-md-5">
                <ul>
                  <li className=" pt-lg-5 pt-3">
                    <a className=" fw_500 fs_16 clr_white ff_Poppins " href="">
                      Resources
                    </a>
                  </li>
                  <li className=" pt-2">
                    <a className="fw_400 fs_16 clr_white ff_Poppins" href="">
                      Roadmap
                    </a>
                  </li>
                  <li className=" pt-2">
                    <a className="fw_400 fs_16 clr_white ff_Poppins" href="">
                      FAQs
                    </a>
                  </li>
                  <li className=" pt-2">
                    <a className="fw_400 fs_16 clr_white ff_Poppins" href="">
                      Mint your Bully
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-lg-2 col-12 text-center pt-3 pt-lg-0 col-sm-6 text-sm-start col-md-5">
                <li>
                  <a className=" fw_500 fs_16 clr_white ff_Poppins" href="">
                    Community
                  </a>
                </li>
                <a href="">
                  <img className=" pt-3" src={insta} alt="" />
                </a>
                <a href="">
                  <img className=" pt-3 ps-4" src={tweter} alt="" />
                </a>
                <a href="">
                  <img className=" pt-3 ps-4" src={dec} alt="" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
