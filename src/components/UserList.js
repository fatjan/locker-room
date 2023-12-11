// UserList.js
import React, { useState } from 'react';
import './UserList.css';
import { simulator } from '../helpers/constants';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const maxUsers = simulator.NUMBER_OF_USERS;
  const addUser = () => {
    if (users.length >= maxUsers) {
        toast.error('Maximum number of users reached!', {
            position: 'top-right',
            autoClose: 3000, // Close the toast after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
    } else {
        const newUserId = users.length + 1;
        setUsers([...users, { id: newUserId, name: `User ${newUserId}` }]);
    }
  };

  return (
    <div className="user-list-panel">
      <h2>User List</h2>
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <button key={user.id} className="user-button">
            {user.name}
          </button>
        ))}
      </ul>
      <button onClick={() => setUsers([])}>Clear Users</button>
    </div>
  );
};

export default UserList;
