import React from 'react';
import img from '../assets/img/img uns.png';
import img2 from '../assets/img/img 2.png';
import img3 from '../assets/img/img 3.png';

export const Valuable = () => {
  let card = [
    {
      img: img,
      Adamant: 'Adamant#785',
      Rating: 'Rating(4.8)',
      $7412: '$7412',
    },
    {
      img: img2,
      Adamant: 'Adamant#785',
      Rating: 'Rating(4.8)',
      $7412: '$7412',
    },
    {
      img: img3,
      Adamant: 'Adamant#785',
      Rating: 'Rating(4.8)',
      $7412: '$7412',
    },
  ];
  return (
    <div>
      <div className="castam_container">
        <div className=" row mt-5 pt-5">
          {card.map((items, i) => {
            return (
              <div className=" col-lg-4 col-11 mt-4 col-sm-8 col-md-6 m-auto" key={i}>
                <div className=" card_box ps-2 pe-2 pt-2">
                  <img className=" w-100" src={items.img} alt="" />
                  <div className=" d-flex justify-content-between">
                    <h2 className=" fw_700 fs_24 ff_Orbitron clr_white ln_30 pt-5">
                      {items.Adamant}
                    </h2>
                    <h2 className="  fw_500 fs_18 clr_white ln_23 ff_Orbitron pt-5">
                      {items.Rating}
                    </h2>
                  </div>
                  <h2 className=" fw_700 fs_24 ln_30 ff_Orbitron clr_white pt-3 pb-4">
                    {items.$7412}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
