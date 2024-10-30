import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Axco = () => {
  const [usrdata, setdata] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
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
      <div>
        <div className=" container">
          <div className=" row row-gap-4">
            {usrdata.map((data, i) => {
              return (
                <div key={i} className=" col-3">
                  <Link to={`details/${data.id}`}>
                    <div className=" boxdata">
                      <p>Id: {data.id}</p>
                      <p> Name: {data.name}</p>
                      <p> Email: {data.email}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Axco;
