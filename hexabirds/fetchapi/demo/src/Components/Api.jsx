import React, { useEffect, useState } from 'react';

const Api = () => {
  const [data, setData] = useState([]);

  async function getapi() {
    try {
      const res = await fetch('https://crud-django-c7ri.onrender.com/api/user/');
      const reseult = await res.json();
      setData(reseult.data);
      console.log(reseult);
    } catch (error) {
      console.log(error, 'dfjfikwejfwekf');
    }
  }
  useEffect(() => {
    getapi();
  }, []);

  async function deleteUser(id) {
    await fetch(`https://crud-django-c7ri.onrender.com/api/user/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setData((prevData) => prevData.filter((user) => user.id !== id));
      }
    });
  }

  return (
    <div>
      <h2>Get Method</h2>
      <div>
        <table border="2">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => (
              <tr key={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => deleteUser(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Api;
