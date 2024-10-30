import React from 'react';
import { useEffect, useState } from 'react';
const userData = [{ name: 'Rinki' }, { name: 'Subham' }, { name: 'Ankita' }, { name: 'Mamta' }];

const ChildA = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(userData);
  }, []);
  const handlechage = (e) => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };
  return (
    <div>
      <div className=" box ">
        <div className=" container">
          <form className="form  ms-5 ps-5 pt-5 mt-5">
            <h2> All Select </h2>
            <div className="from_check mt-3">
              <input
                type="checkbox"
                className=" form-check-input"
                name="allSelect"
                checked={users.filter((user) => user?.isChecked !== true).length < 1}
                onChange={handlechage}
              />
              <label className="form-check-label  ms-2" htmlFor="Select">
                {' '}
                All Select
              </label>
            </div>
            {users.map((user) => (
              <div className="from_check mt-2">
                <input
                  type="checkbox"
                  className=" form-check-input"
                  name={user.name}
                  checked={user?.isChecked || false}
                  onChange={handlechage}
                />
                <label className="form-check-label  ms-2" htmlFor="Select">
                  {user.name}
                </label>
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChildA;
