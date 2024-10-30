import React from 'react';

const HowTowCard = () => {
  let box = [
    {
      one: '01',
      nulla: 'Nulla massa quis',
      lorem:
        'Holding xTREME represents an understanding and willingness to accept the risks of spending money on blockchain technology and NFT technology.',
    },
    {
      one: '02',
      nulla: 'Odio at sit',
      lorem:
        'Holding xTREME represents an understanding and willingness to accept the risks of spending money on blockchain technology and NFT technology. ',
    },
    {
      one: '03',
      nulla: 'Id turpis habitant',
      lorem:
        'Holding xTREME represents an understanding and willingness to accept the risks of spending money on blockchain technology and NFT technology.',
    },
  ];
  return (
    <div>
      <div className=" castam_container">
        <div className=" ps-5 pb-5 pt-4 ">
          <div className=" row mt-5">
            {box.map((items, i) => {
              return (
                <div className="col-lg-4 col-12 col-sm-10 col-md-6 mt-4 m-auto " key={i}>
                  <div className="box_Nulla pt-2 ps-4 pe-4  ">
                    <h2 className=" fw_700  fs_32 ln_40 clr_white ff_Orbitron d-flex justify-content-center align-items-center  m-auto crcl_2 mt-4">
                      {items.one}
                    </h2>
                    <h2 className=" fw_700 fs_32 clr_white ff_Orbitron ln_40 text-center pt-5 ">
                      {items.nulla}
                    </h2>
                    <h2 className=" fw_400 fs_24 ln_29 clr_white ff_Montserrat text-center pt-sm-3 pb-5">
                      {items.lorem}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowTowCard;
