// LockerRoom.js
import React from 'react';
import Locker from './Locker';
import './LockerRoom.css';

const LockerRoom = () => {
  // Dummy data for demonstration
  const lockers = [
    { id: 1, occupied: false },
    { id: 2, occupied: true },
    { id: 3, occupied: false },
    { id: 4, occupied: false },
    { id: 5, occupied: true },
    { id: 6, occupied: false },
    { id: 7, occupied: false },
    { id: 8, occupied: true },
    { id: 9, occupied: false },
    { id: 10, occupied: false },
    { id: 11, occupied: true },
    { id: 12, occupied: false },
  ];

  return (
    <div>
      <h1>Locker Room Simulator</h1>
      <div className="locker-room-grid">
        {lockers.map((locker) => (
          <Locker key={locker.id} id={locker.id} occupied={locker.occupied} />
        ))}
      </div>
    </div>
  );
};

export default LockerRoom;
