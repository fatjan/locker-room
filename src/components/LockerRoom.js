// LockerRoom.js
import React from 'react';
import Locker from './Locker';
import './LockerRoom.css';
import { createLockerData } from '../helpers';

const LockerRoom = () => {
  // Dummy data for demonstration
  const lockers = createLockerData(5*10);

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
