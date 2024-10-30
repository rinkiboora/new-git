import React, { useState } from 'react';
import { json } from 'react-router-dom';

const Post = () => {
  const [name, setName] = useState('');
  const [mobail, setMobail] = useState('');
  const [pasword, setPasword] = useState('');
  function savedata() {
    console.log({ name, mobail, pasword });
    let data = { name, mobail, pasword };
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ' contant-type': 'application/json',
      },
      body: JSON.stringify(data)
    }).then((repos) => {
      //   console.log('repos',repos);
      repos.json().then((res) => {
        console.log('res', res);
      });
    });
  }
  return (
    <div className=" text-center">
      <h2>POST</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        name="name"
      />
      <br></br> <br></br>
      <input
        type="text"
        onChange={(e) => {
          setMobail(e.target.value);
        }}
        value={mobail}
        name="mobail"
      />
      <br></br> <br></br>
      <input
        type="text"
        onChange={(e) => {
          setPasword(e.target.value);
        }}
        value={pasword}
        name="pasword"
      />
      <br></br> <br></br>
      <button type="sumbit" onClick={savedata}>
        Sumbit
      </button>
    </div>
  );
};

export default Post;
