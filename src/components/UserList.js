// UserList.js
import React, { useState } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const addUser = () => {
    const newUserId = users.length + 1;
    setUsers([...users, { id: newUserId, name: `User ${newUserId}` }]);
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
