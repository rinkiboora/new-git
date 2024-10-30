import React from 'react';
import img from '../assets/img/cheryey.png';
import img2 from '../assets/img/Mask (2).png';
import img3 from '../assets/img/Mask  (3).png';
import img4 from '../assets/img/image  (4).png';

const Product = () => {
  let product = [
    {
      img: img,
      lorem:
        'Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and ganic BambooRobes 12 PC set ',
      set: '$169.99',
      set2: '$199.99',
      add: 'ADD CART',
    },
    {
      img: img2,
      lorem:
        'Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and ganic BambooRobes 12 PC set',
      set: '$59.99',
      set2: '$199.99',
      add: 'ADD CART',
    },
    {
      img: img3,
      lorem: 'Concetti Di-Lusso Luxury 100% TurkishBamboo Shawl Spa Robe in PremiumGift Box',
      set: '$159.99',
      set2: '$199.99',
      add: 'ADD CART',
    },
    {
      img: img4,
      lorem:
        'Concetti Di-Lusso ANNA Luxury 100% Turkish Organic Cotton VIP Spa Robe/Towels 10 PC Set ',
      set: '$59.99',
      set2: '$199.99',
      add: 'ADD CART',
    },
  ];

  return (
    <div className=" flex flex-row flex-wrap justify-between  ms-4  ">
      {product.map((items, i) => {
        return (
          <div className=" w-6/12 mt-5" key={i}>
            <div className=" bg-slate-200 pt-4 pb-9 me-4 ps-2 pe-2 rounded-md   h-full ">
              <img className="w-full" src={items.img} alt="rty" />
              <h2 className="  pt-3 ps-3 font-sans">{items.lorem}</h2>
              <div className=" flex items-center pt-3 ">
                <h2 className=" font-semibold text-2xl text-red-600 font-sans ">{items.set}</h2>
                <h2 className=" font-normal text-base text-gray-500  ms-4 font-sans">
                  {items.set2}
                </h2>
                <button className=" py-3 px-5 rounded-md text-white bg-black ms-4 font-semibold font text-base font-sans">
                  {items.add}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
