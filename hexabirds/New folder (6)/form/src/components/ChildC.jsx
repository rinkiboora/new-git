// import React, { createContext } from 'react';
// import ChildD from './ChildD';

// const data = createContext();
// const ChildC = () => {
//   const name = 'Rinki';
//   return (
//     <div>
//       <data.Provider value={name}>
//         <ChildD />
//       </data.Provider>
//     </div>
//   );
// };

// export default ChildC;
// export { data };

// ***********porop*************

// import React from 'react';
// import ChildD from './ChildD';

// const ChildC = () => {
//   return (
//     <div>
//       <ChildD name="RINKI BOORA" />
//     </div>
//   );
// };

// export default ChildC;

// import React from 'react';
// import ChildD from './ChildD';

// const ChildC = () => {
//   const getData = (data) => {
//     console.log(data);
//   };
//   return (
//     <div>
//       <ChildD myChild={getData} />
//     </div>
//   );
// };

// export default ChildC;

import React, { useEffect, useState } from 'react';

const userData = [{ name: 'Rinki' }, { name: 'Mamta' }, { name: 'Subham' }];

const ChildC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData.map((user) => ({ ...user, checked: false })));
  }, []);

  const HandleChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempUser = users.map((user) => ({ ...user, checked }));
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) => (user.name === name ? { ...user, checked } : user));
      setUsers(tempUser);
    }
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="allSelect"
          onChange={HandleChange}
          checked={users.filter((user) => user.checked !== true).length < 1}
        />
        <label htmlFor="allSelect">All select</label>
      </div>
      {users.map((user) => (
        <div key={user.name}>
          <input type="checkbox" name={user.name} onChange={HandleChange} checked={user.checked} />
          <label htmlFor={user.name}>{user.name}</label>
        </div>
      ))}
    </div>
  );
};

export default ChildC;

