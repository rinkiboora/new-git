import React, { useContext, useState, useEffect } from 'react';
import { MyData } from '../App';

const ChildD = () => {
  const { add, setAdd } = useContext(MyData);
  const [mius, setMius] = useState(100);
  const [mdd, setMdd] = useState(0);

  useEffect(() => {
    setMdd(add * 10);
  }, [add]);

  return (
    <div>
      <h3>{mdd}</h3>
      <h2>{add}</h2>
      <button onClick={() => setAdd(add + 1)}>add</button>
      <h2>{mius}</h2>
      <button onClick={() => setMius(mius - 1)}>mius</button>

      <details style={{ color: 'red' }}>
        <td style={{ color: 'blue' }}>come</td>
        <br />
        <td>come</td>
        <br />
        <td>come</td>
        <br />
      </details>
    </div>
  );
};

export default ChildD;
