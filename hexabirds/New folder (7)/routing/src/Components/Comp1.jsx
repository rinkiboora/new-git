// import React from 'react';
// import Comp2 from '../Components/Comp2';
// import { useState } from 'react';

// const Comp1 = () => {
//   const [name, setName] = useState('rinki');
//   return (
//     <>
//       <Comp2 fname={name} chacnge={setName} />
//     </>
//   );
// };

// export default Comp1;

import React, { useState } from 'react';
import Comp2 from '../Components/Comp2';

const Comp1 = () => {
  const [name, setName] = useState('rinki');

  return (
    <>
      <Comp2 fname={name} chacnge={setName} />
    </>
  );
};

export default Comp1;
