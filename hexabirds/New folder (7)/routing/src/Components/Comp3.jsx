// import React from 'react';

// const Comp3 = (props) => {
//   const handleclick = () => {
//     if (props.fname === 'rinki') {
//       props.chacnge('subham');
//     } else {
//       props.chacnge('rinki');
//     }
//   };
//   return (
//     <>
//       <p> name : {props.fname} </p>
//       <button onClick={handleclick}>click</button>
//     </>
//   );
// };

// export default Comp3;
import React from 'react';

const Comp3 = (props) => {
  const handleclick = () => {
    if (props.fname === 'rinki') {
      props.chacnge('subham');
    } else {
      props.chacnge('rinki');
    }
  };
  return (
    <>
      <h2>name:{props.fname}</h2>
      <button onClick={handleclick}>click</button>
    </>
  );
};

export default Comp3;
