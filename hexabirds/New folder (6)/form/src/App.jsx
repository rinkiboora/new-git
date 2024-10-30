'use client';
// import React, { useState } from 'react';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pasword, setPasword] = useState("");
//   const [number_no, setNumber] = useState("");
//   const [data, setData] = useState([]);
//   const [add, setAdd] = useState(false);
//   const [checkBox, setCheckBox] = useState(false);

//   function HandleFormData(e) {
//     e.preventDefault();
//     if (add !== false) {
//       let a = data.map((items, i) =>
//         add == i ? { name: name, email: email, Number: number_no, pasword: pasword } : items
//       );
//       setData(a);
//     } else {
//       const formData = {
//         name: name,
//         email: email,
//         pasword: pasword,
//         number_no: number_no,
//       };
//       if (checkBox) {
//         setData([...data, formData]);
//         setName('');
//         setEmail('');
//         setPasword('');
//         setNumber('');
//         setCheckBox('');
//       }
//     }
//   }
//   const deleteDataHandler = (index) => {
//     let acc = [...data];
//     acc.splice(index, 1);
//     setData(acc);
//   };
//   const addHandlr = (id) => {
//     setAdd(id);
//     let x = data.find((items, i) =>
//       i == id
//         ? (setName(items.name),
//           setEmail(items.email),
//           setNumber(items.number_no),
//           setPasword(items.pasword))
//         : ' '
//     );
//     console.log(x);
//   };

//   return (
//     <div>
//       <div className=" card">
//         <form onSubmit={HandleFormData} action="">
//           <h2 style={{ fontSize: '40px', color: 'white', textAlign: 'center' }}>FORM</h2>
//           <p style={{ color: 'white', fontSize: '18px' }}>NAME</p>
//           <input
//             className=" w_100"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//           />
//           <p style={{ color: 'white', fontSize: '18px' }}>Email</p>
//           <input
//             className=" w_100"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//           />
//           <p style={{ color: 'white', fontSize: '18px' }}>PASWORD</p>
//           <input
//             className=" w_100"
//             required
//             value={pasword}
//             onChange={(e) => setPasword(e.target.value)}
//             type="password"
//           />{' '}
//           <p style={{ color: 'white', fontSize: '18px' }}>NUMBER_PH</p>
//           <input
//             className=" w_100"
//             required
//             value={number_no}
//             onChange={(e) => setNumber(e.target.value)}
//             type="number"
//           />{' '}
//           <br />
//           <input
//             type="checkbox"
//             name="checkbox"
//             id="checkbox"
//             onChange={() => setCheckBox(!checkBox)}
//             checked={checkBox === true}
//           />
//           <div className="pt-5">
//             <button className="button" type="submit">
//               Click Me
//             </button>
//           </div>
//         </form>
//       </div>
//       <div>
//         {data.map((items, i) => {
//           return (
//             <div key={i}>
//               <div className=" card2">
//                 <h1>Name: {items.name}</h1>
//                 <h1>email: {items.email}</h1>
//                 <h1>number_no: {items.number_no}</h1>
//                 <h1>pasword: {items.pasword}</h1>
//               </div>
//               <button onClick={() => deleteDataHandler(i)}>delete</button>
//               <button onClick={() => addHandlr(i)}>ADD</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>

//   );

// }

// export default App;
import React from 'react';
import ChildC from './components/ChildC';
import ChildD from './components/ChildD';

const App = () => {
  return (
    <>
      <ChildA />

      <ChildB />
      {/* <ChildC /> */}
      {/* <ChildD /> */}
    </>
  );
};

export default App;
