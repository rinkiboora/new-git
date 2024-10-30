// import React from 'react';
// import { data } from './ChildC';

// const ChildD = () => {
//   return (
//     <>
//       <data.Consumer>
//         {(name) => {
//                   return <h3>my name is {name}</h3>;
//         }}
//       </data.Consumer>
//     </>
//   );
// };

// export default ChildD;

// ***************props**********************
// import React from 'react';

// const ChildD = (props) => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//     </div>
//   );
// };

// export default ChildD;

// import React from 'react';

// const ChildD = (props) => {
//   const HandleData = (e) => {
//     e.preventDefault();
//       let dt = 'i am chick button';
//      props.myChild(dt)
//   };
//   return (
//     <div>
//       <button onClick={HandleData}> button chick</button>
//     </div>
//   );
// };

// export default ChildD;

// import React from 'react';
// import { useState } from 'react';

// const ChildD = () => {
//   const [num, setNum] = useState(5);
//   console.log('number', { num });
//   const HandleOnChange = () => {
//     setNum(9);
//   };

//   return (
//     <div>
//       <h2>number {num}</h2>
//       <button onClick={HandleOnChange}>numbtton</button>
//     </div>
//   );
// };

// export default ChildD;

import React, { useState } from 'react';

const ChildD = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount(count + 1);
  };
  const HandleResten = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>count:{count} </h2>
      <button onClick={handleCounter}>counter</button>
      <button onClick={HandleResten}>resnt</button>
    </div>
  );
};

export default ChildD;
