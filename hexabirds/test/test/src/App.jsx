import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState(false);
  const [name, setName] = useState('');
  const [pasword, setPasword] = useState('');
  const [number, setNumber] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);

  function handelFormData(e) {
    e.preventDefault();
    if (add !== false) {
      let a = data.map((items, i) =>
        add == i ? { name: name, pasword: pasword, number: number } : items
      );
      setData(a);
    } else {
      const fromData = {
        name: name,
        pasword: pasword,
        number: number,
      };
      if (checkbox) {
        setData([...data, fromData]);
        setName('');
        setNumber('');
        setPasword('');
        setCheckbox('');
      }
    }
  }
  const deleteDataHandler = (index) => {
    let acc = [...data];
    acc.splice(index, 1);
    setData(acc);
  };
  const addHandlr = (id) => {
    setAdd(id);
    let x = data.find((items, i) =>
      i == id ? (setName(items.name), setNumber(items.number), setPasword(items.pasword)) : ' '
    );
    console.log(x);
  };

  return (
    <div>
      {state ? <h2>HELO RINKI BOORA</h2> : null}
      {/* <button onClick={() => setState(false)}>hide</button>
      <button onClick={() => setState(true)}>show</button> */}
      <button onClick={() => setState(!state)}>Toggle</button>
      <div className=" container">
        <form onSubmit={handelFormData} action="">
          <p>name</p>
          <input value={name} onChange={(e) => setName(e.target.value)} type="name" />
          <p>pasword</p>
          <input value={pasword} onChange={(e) => setPasword(e.target.value)} type="pasword" />
          <p>number</p>
          <input value={number} onChange={(e) => setNumber(e.target.value)} type="number" /> <br />
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            onChange={() => setCheckbox(!checkbox)}
            checked={checkbox == true}
          />
          <button className=" mt-3">sumit</button>
        </form>
      </div>
      <div>
        {data.map((items, i) => {
          return (
            <div key={i}>
              <h1>name:{items.name}</h1>
              <h1>pasword{items.pasword}</h1>
              <h1>number{items.number}</h1>
              <button onClick={() => deleteDataHandler(i)}>delete</button>
              <button onClick={() => addHandlr(i)}>ADD</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
