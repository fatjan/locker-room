// Locker.js
import React from 'react';
import './Locker.css'; // You can create a separate CSS file for styling if needed

const Locker = ({ id, occupied }) => {
  return (
    <div className={`locker ${occupied ? 'occupied' : 'vacant'}`}>
      <p>{`Locker ${id}`}</p>
      {occupied ? <p>Occupied</p> : <p>Vacant</p>}
    </div>
  );
};

export default Locker;
