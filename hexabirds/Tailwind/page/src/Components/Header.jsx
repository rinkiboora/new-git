import React from 'react';
import car from '../assets/img/car.png';
import grop from '../assets/img/Group .png';
import phn from '../assets/img/Mask2 .png';
import img from '../assets/img/beutifull img.png';
import img_Organic from '../assets/img/Group (10).png';
import img_smoll from '../assets/img/small_long_right.png';
import fist_img from '../assets/img/fist img.png';
import secd_img from '../assets/img/secnd img.png';
import Product from './Product';
import Trending from './Trending';
import img_1 from '../assets/img/img_1.png';
import img_2 from '../assets/img/img_2.png';
import img_3 from '../assets/img/img_3.png';
import img_4 from '../assets/img/img_4.png';
import img_5 from '../assets/img/img_5.png';

const Header = () => {
  return (
    <div className=" items-center pt-6">
      <div className="bg-[url(./assets/img/Mask.png)] bg-center bg-cover  pb-40 ">
        <div className="max-w-[1140px]  mx-auto">
          <h2 className=" font-bold text-6xl text-fuchsia-50 pt-36 font-sans  ">
            Beautiful Color <span className="block">Contrast!</span>
          </h2>
          <p className=" font-normal text-base text-cyan-50 pt-6 font-sans">
            Over 50 Collections to Choose for !
          </p>
          <button className=" font-semibold text-lg py-3 font-sans px-5 bg-white text-red-600 mt-5">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className=" max-w-[1140px] mx-auto">
        <div className="flex flex-row flex-wrap justify-center">
          <div className=" w-4/12">
            <div className="py-6 px-6 shadow-[0px_0px_8px_0px_#000] shad ow -2xl mx-auto inline-block mt-20 ms-8">
              <img src={car} alt="car.png" />
            </div>
            <h3 className=" font-semibold  text-3xl text-zinc-950 font-sans pt-2">
              {' '}
              Free Delivery
            </h3>
            <h5 className=" font-normal text-xl text-zinc-700 pt-2 font-sans">
              For all orders above $35
            </h5>
          </div>
          <div className=" w-4/12">
            <div className="py-6 px-6 shadow-[0px_0px_8px_0px_#000] shad ow -2xl mx-auto inline-block mt-20 ms-8">
              <img src={grop} alt="car.png" />
            </div>
            <h3 className=" font-semibold  text-3xl text-zinc-950 font-sans pt-2 ">
              {' '}
              Secure Payment
            </h3>
            <h5 className=" font-normal text-xl text-zinc-700 pt-2 font-sans">
              100% Secure payment methods
            </h5>
          </div>
          <div className=" w-4/12">
            <div className="py-6 px-6 shadow-[0px_0px_8px_0px_#000] shad ow -2xl mx-auto inline-block mt-20 ms-8">
              <img src={phn} alt="car.png" />
            </div>
            <h3 className=" font-semibold  text-3xl text-zinc-950 font-sans pt-2 ">
              {' '}
              24/7 Support
            </h3>
            <h5 className=" font-normal text-xl text-zinc-700 pt-2 font-sans">
              We have dedicated Support
            </h5>
          </div>
        </div>
      </div>
      {/* ******************section Featured Product****************** */}
      <section>
        <div className=" max-w-[1140px] mx-auto">
          <h3 className=" font-semibold text-4xl text-black  ffont-sans mt-20">Featured Product</h3>
          <div className=" flex flex-wrap flex-row justify-between">
            <div className=" w-5/12">
              <img className=" mt-5" src={img} alt="" />
            </div>
            <div className=" w-7/12">
              <Product />
            </div>
          </div>
        </div>
      </section>
      {/* ****************section SHOW MORE*********************** */}
      <section>
        <div className=" max-w-[1140px] mx-auto">
          <div className=" text-center mt-20 ">
            <button className=" py-3 px-5 bg-red-800 text-white font-sans rounded-md ">
              SHOW MORE
            </button>
          </div>
          <div className=" flex flex-row flex-wrap items-center mt-16">
            <div className=" w-6/12">
              <h2 className=" font-bold text-4xl text-red-700 font-sans mt-3">
                Organic Cotton and Bamboo
              </h2>
              <p className=" font-normal text-base text-black font-sans leading-7 mt-4 w-4/6">
                Designed to please you with the best of Turkish’s heritage in fabrics.Made from
                bamboo and cotton fibers, these towels gathers the best from two worlds to offer
                soft, super-absorbent fabric that is also antibacterial thanks to the natural
                properties of bamboo.
              </p>
              <div className=" px-5 py-3 bg-black text-white rounded-md mt-6 inline-block">
                <div className=" flex items-center">
                  <button>SHOP NOW</button>
                  <div>
                    <img className=" ms-3" src={img_smoll} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-6/12">
              <img src={img_Organic} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ***************section Trending Product*************** */}
      <section>
        <div className=" max-w-[1140px] m-auto">
          <div className=" text-center mt-24">
            <h3 className=" font-semibold text-4xl text-black font-sans mb-14">Trending Product</h3>
          </div>
          <Trending />
          <div className="text-center mt-10 pb-20">
            <button className="font-semibold text-lg text-white bg-red-800 py-4 font-sans px-8 text-center rounded-lg">
              SHOW MORE
            </button>
            <h2 className=" font-semibold  text-4xl font-sans mt-14 mb-10">Our Testimonials</h2>
            <div className="bg-red-900 rounded-2xl text-center relative pb-16">
              <p className=" font-normal text-base text-white w-9/12 text-center m-auto pt-16 font-sans leading-9 ">
                The item is in a great quality and is shipped in the wonderful presentation box. The
                little brooches are needed to be removed before washing. As far as softness goes,
                IMHO, I’ve seen softer ones. I would definitely would by again if they had different
                color patterns. Not everyone is so big on pastel pink.
              </p>
              <h2 className=" font-semibold text-white text-2xl pt-8">-Valeriya</h2>
              <div className=" absolute top-6 left-7">
                <img className="" src={fist_img} alt="" />
              </div>
              <div className=" absolute top-36 right-10">
                <img src={secd_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* *****************section Product Gallery***************** */}
      <section>
        <div className=" max-w-[1140px] m-auto">
          <h2 className=" font-semibold text-4xl font-sans text-center">Product Gallery</h2>
          <div className=" grid">
            <div className=" col-span-4 grid">
              <img src={img_1} alt="" />
            </div>
            <div className=" row-span-1 col-span-1">
              <img src={img_2} alt="" />
            </div>
            <div className=" row-span- grid">
              <img src={img_3} alt="" />
            </div>
            <div className=" col-span-3 grid">
              <img src={img_4} alt="" />
            </div>
            <div className=" col-span-3 grid">
              <img src={img_5} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
