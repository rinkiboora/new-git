import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from './firebase';
import { v4 as uuidv4 } from 'uuid';

const RGet = () => {
  const [Realtimedata, setRealtimedata] = useState('');
  const [RealEmail, setRealEmail] = useState('');

  function writeUserData(name, email) {
    const uuid = uuidv4();
    const dbRef = ref(database, 'users/' + uuid);
    set(dbRef, {
      username: name,
      email: email,
    });
  }

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (Realtimedata && RealEmail) {
      writeUserData(Realtimedata, RealEmail);
      setRealtimedata('');
      setRealEmail('');
      console.log('Submitted Name:', Realtimedata, 'Email:', RealEmail);
    }
  };

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <h3>Name</h3>
        <input
          value={Realtimedata}
          placeholder="Enter Your Name"
          onChange={(e) => setRealtimedata(e.target.value)}
          type="text"
          required
        />
        <h3>Email</h3>
        <input
          value={RealEmail}
          placeholder="Enter Your Email"
          onChange={(e) => setRealEmail(e.target.value)}
          type="email"
          required
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default RGet;
