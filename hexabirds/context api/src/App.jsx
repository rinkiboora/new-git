// import React, { useEffect, useState } from 'react';
// import Data from './Components/Data';
// import Gogi from './Components/Gogi';

// const App = () => {
//   const [api, setApi] = useState([]);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [age, setAge] = useState('');
//   const [id, setId] = useState(0);
//   const [update, setUpdate] = useState(false);

//   useEffect(() => {
//     setApi(Data);
//   }, []);

//   const handleEdit = (id) => {
//     const dt = api.find((item) => item.id === id);
//     if (dt) {
//       setUpdate(true);
//       setId(id);
//       setFirstName(dt.firstName);
//       setLastName(dt.lastName);
//       setAge(dt.age);
//     }
//   };

//   const handleDelete = (id) => {
//     if (id > 0) {
//       if (window.confirm('Are you sure to delete this item?')) {
//         const dt = api.filter((item) => item.id !== id);
//         setApi(dt);
//       }
//     }
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     let error = '';
//     if (firstName === '') error += 'First name is required. ';
//     if (lastName === '') error += 'Last name is required. ';
//     if (age <= 0 || isNaN(age)) error += 'Age is required . ';

//     if (error === '') {
//       const newObject = {
//         id: api.length + 1,
//         firstName: firstName,
//         lastName: lastName,
//         age: parseInt(age),
//       };
//       setApi([...api, newObject]);
//       handleClear();
//     } else {
//       alert(error);
//     }
//   };

//   const handleUpdate = () => {
//     const index = api.findIndex((item) => item.id === id);
//     const dt = [...api];
//     dt[index].firstName = firstName;
//     dt[index].lastName = lastName;
//     dt[index].age = parseInt(age);
//     setApi(dt);
//     handleClear();
//   };

//   const handleClear = () => {
//     setId(0);
//     setFirstName('');
//     setLastName('');
//     setAge('');
//     setUpdate(false);
//   };

//   return (
//     <div className="container form  ">
//       <h1 className="fs-1 fw-bold text-center pt-4">FROM</h1>
//       <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
//         <div>
//           <label className="ms-3 me-3" htmlFor="firstName">
//             First Name
//             <input
//               className=" ms-3"
//               type="text"
//               placeholder="Enter your name"
//               onChange={(e) => setFirstName(e.target.value)}
//               value={firstName}
//             />
//           </label>
//         </div>
//         <div>
//           <label className="ms-3 me-3" htmlFor="lastName">
//             Last Name
//             <input
//               className=" ms-3"
//               type="text"
//               placeholder="Enter Last name"
//               onChange={(e) => setLastName(e.target.value)}
//               value={lastName}
//             />
//           </label>
//         </div>

//         <div>
//           <label className="ms-3 me-3" htmlFor="age">
//             Age
//             <input
//               className=" ms-3"
//               type="text"
//               placeholder="Enter age"
//               onChange={(e) => setAge(e.target.value)}
//               value={age}
//             />
//           </label>
//         </div>

//         <div>
//           {!update ? (
//             <button className="btn bg-primary me-3 ms-3" onClick={handleSave}>
//               Save
//             </button>
//           ) : (
//             <button className="btn bg-primary me-3 ms-3" onClick={handleUpdate}>
//               Update
//             </button>
//           )}

//           <button className="btn bg-danger" onClick={handleClear}>
//             Clear
//           </button>
//         </div>
//       </div>
//       <table className="w-100 table table-hover mt-5  ">
//         <thead>
//           <tr>
//             <td className=" pt-3 fs-5 fw-bold">Sr. No</td>
//             <td className=" fs-5 fw-bold">ID</td>
//             <td className=" fs-5 fw-bold">First Name</td>
//             <td className=" fs-5 fw-bold">Last Name</td>
//             <td className=" fs-5 fw-bold">Age</td>
//             <td className=" fs-5 fw-bold">Actions</td>
//           </tr>
//         </thead>
//         <tbody>
//           {api.map((item, i) => (
//             <tr key={i}>
//               <td className=" fs-6 fw-bolder">{i + 1}</td>
//               <td className=" fs-6 fw-bolder">{item.id}</td>
//               <td className=" fs-6 fw-bolder">{item.firstName}</td>
//               <td className=" fs-6 fw-bolder">{item.lastName}</td>
//               <td className=" fs-6 fw-bolder">{item.age}</td>
//               <td>
//                 <button className="btn bg-primary me-3" onClick={() => handleEdit(item.id)}>
//                   Edit
//                 </button>
//                 <button className="btn bg-danger" onClick={() => handleDelete(item.id)}>
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// };

// export default App;
// import React, { createContext } from 'react';
import ChildA from './Components/ChildA';
import ChildC from './Components/ChildC';
import ChildB from './Components/ChildB';
import React, { createContext, useState } from 'react';
import ChildD from './Components/ChildD';

export const MyData = createContext();

const App = () => {
  const [add, setAdd] = useState(0);

  return (
    <div>
      {/* <ChildA /> */}
      {/* <ChildB />
      <ChildC /> */}
      <MyData.Provider value={{ add, setAdd }}>
        <ChildD />
      </MyData.Provider>
    </div>
  );
};

export default App;

// import React from 'react';

// const App = () => {
//   return <Gogi />;
// };

// export default App;
