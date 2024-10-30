import React, { useRef, useState } from 'react';

const ChildC = () => {
  const refElement = useRef('');
  const [name, setName] = useState('Rinki');
  function Reset() {
    setName('');
    refElement.current.focus();
  }
  function hanldeinput() {
    refElement.current.style.color = 'red';
  }
  return (
    <div>
      <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={Reset}>Reset</button>
      <button onClick={hanldeinput}> handle input</button>
    </div>
  );
};

export default ChildC;
