// import React from 'react';
// import Comp3 from '../Components/Comp3';

// const Comp2 = (props) => {
//   return (
//     <>
//       <Comp3 fname={props.fname} chacnge={props.chacnge} />
//     </>
//   );
// };

// export default Comp2;
// import React from 'react';
// import Comp3 from '../Components/Comp3';

// const Comp2 = (props) => {
//   return (
//     <>
//       <Comp3 fname={props.fname} chacnge={props.chacnge} />
//     </>
//   );
// };

// export default Comp2;
// *************************************************
import { useState } from 'react';
import React from 'react';

const Comp2 = () => {
  const [first, setfirst] = useState('helo');

  const ChangeName = () => {
    let val = first;
    if (val === 'helo') {
      setfirst('Rinki Boora');
    } else {
      setfirst('helo');
    }
  };
  console.log(first);
  return (
    <div>
      <h2>{first}</h2>
      <button onClick={ChangeName}> click me plz</button>
    </div>
  );
};

export default Comp2;
