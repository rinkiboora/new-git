// import React, { useState } from 'react';

// const ChildB = () => {
//   const [count, setCount] = useState(100);
//   let so = 1;
//   const incNum = () => {
//     so++;
//   };

//   return (
//     <div>
//       <h1>increment {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}>
//         click me
//       </button>{' '}
//       <br /> <br />
//       <h2>{so}</h2>
//       <button onClick={{ incNum }}>click</button>

//     </div>
//   );
// };

// export default ChildB;
import React, { useEffect, useState } from 'react';
const userData = [{ name: 'Rinki' }, { name: 'Mamta' }, { name: 'Ankita' }];

const ChildB = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(userData);
  }, []);
  const HandleChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempuser = users.map((user) => {
        return { ...user, ischecked: checked };
      });
      setUsers(tempuser);
    } else {
      let tempuser = users.map((user) =>
        user.name == name ? { ...user, ischecked: checked } : user
      );
      setUsers(tempuser);
    }
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="allSelect"
          onChange={HandleChange}
          checked={users.filter((user) => user?.ischecked !== true).length < 1}
        />
        <label htmlFor="">All Select</label>
      </div>
      {users.map((user) => (
        <div>
          <input
            type="checkbox"
            name="{user.name}"
            onChange={HandleChange}
            checked={user?.ischecked || false}
          />
          <label htmlFor="">{user.name}</label>
        </div>
      ))}
    </div>
  );
};

export default ChildB;
