import React from 'react';
import img3 from '../assets/img/Mask Group (11).png';
import img4 from '../assets/img/Mask Group (13).png';
import img5 from '../assets/img/Mask Group (14).png';

const Trending = () => {
  let Trending = [
    {
      img: img3,
      perfect: 'PERFECT GIFT EVEN FOR YOURSELF!',
      lorem:
        'Well suited as a gift set, these cotton towelslook so decorative and soft that we won’t judgeif you want to keep them for your family and yourself.',
    },
    {
      img: img4,
      perfect: 'USE FOR ANYTHING',
      lorem:
        'Perfect for your hands, face and  body…and for your kids too! These towels’ softness isideal for toddler’s and baby’s delicate skin.And the best part? They’re washable,quick-dry towels that will last forever.',
    },
    {
      img: img5,
      perfect: 'EXTRA ABSORBENT',
      lorem:
        'Thanks to its natural properties, our 100%Turkish Cotton Towels are super absorbent,making the m perfect for drying off inany scenario.',
    },
  ];
  return (
    <div>
      <div className=" flex flex-row flex-wrap justify-between">
        {Trending.map((items, i) => {
          return (
            <div className="w-4/12  " key={i}>
              <div className="ms-5 bg-slate-100  shadow-[0px_0px_8px_0px_#000]  h-full  ">
                <img src={items.img} alt="" />
                <h3 className="font-bold text-2xl text-red-800 font-sans pt-4 ps-4">
                  {items.perfect}
                </h3>
                <h3 className=" font-normal text-base text-black font-sans leading-8 pt-4 ps-4 ">
                  {items.lorem}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trending;
