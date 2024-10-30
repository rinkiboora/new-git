import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const [usrdata, setdata] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        // console.log(response);
        setdata(response.data);
      } catch (err) {
        console.log(err, 'error');
      }
    }
    getData();
  }, []);
  return (
    <>
      <div key={id}>
        {usrdata ? (
          <div>
            <p>id :{usrdata.id}</p>
            <p>name :{usrdata.name}</p>
            <p>emal :{usrdata.email}</p>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Details;
