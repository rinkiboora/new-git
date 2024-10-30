import React, { useState } from 'react';

const ChildB = () => {
  const [success, setSuccess] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  function saveuser() {
    console.log(success, message, error);
    let data = { success, message, error };
    fetch('url = http://www.wised.in/api/v1/auth/authenticate', {
      method: 'POST', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log('result', result);
    });
  }

  return (
    <div className=" ">
      <div className=" div">
        <br />
        <br />
        <input
          type="text"
          value={success}
          onChange={(e) => {
            setSuccess(e.target.value);
          }}
          name="success"
        />
        <br />
        <br />
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          name="message" 
        />
        <br />
        <br />
        <input
          type="text"
          value={error}
          onChange={(e) => {
            setError(e.target.value);
          }}
          name="error"
        />
        <br />
        <br />
        <button onClick={saveuser}>Save Data</button>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ChildB;
