import React, { useMemo, useState } from 'react';

const ChildA = () => {
  const [add, setAdd] = useState(0);
  const [mius, setMius] = useState(100);
  const mdd = useMemo(function multipaly() {
      console.log('******************');
      return add * 0;
    },[add]
  );
  return (
    <div>
      <h1> {mdd}</h1>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add + 1)}>addition</button> <br />
      <br />
      <h1>{mius}</h1>
      <button onClick={() => setMius(mius - 1)}>substration</button>
    </div>
  );
};

export default ChildA;
