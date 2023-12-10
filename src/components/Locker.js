// Locker.js
import React, { useState } from 'react';
import './Locker.css'; 

const Locker = ({ id, occupied }) => {
  const [isShown, setIsShown] = useState(false);
  const lockerStatus = isShown ? (occupied ? 'occupied' : 'vacant') : 'neutral';
  return (
    <div className={`locker ${lockerStatus}`} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
      <p>{`Locker ${id}`}</p>
    </div>
  );
};

export default Locker;
