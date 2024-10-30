// import React, { useState } from 'react';

// import { useEffect } from 'react';

// const App2 = () => {
//   const [api, setApi] = useState([]);
//   useEffect;
//   async function getapi() {
//     await fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setApi(data);
//       })
//       .catch((are) => {
//         console.log(are, 'errjjjjjjjjjjjjor');
//       });
//   }
//   getapi();
//   return (
//     <div className=" container">
//       <div className=" row row-gap-4 ">
//         {api.map((items) => {
//           return (
//             <div className="col-3">
//               <div className=" card h-100 p-4">
//                 <img className=" w-100" src={items.image} alt="" />
//                 <p>{items.title}</p>
//                 <p>{items.price}</p>
//                 <p>{items.description}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//     </div>
//   );
// };
// export default App2;
