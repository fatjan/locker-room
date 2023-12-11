import React from 'react';
import Locker from './Locker';
import './LockerRoom.css';
import { createLockerData } from '../helpers';
import { simulator } from '../helpers/constants';

const LockerRoom = () => {
  const numLockers = simulator.NUMBER_OF_LOCKERS;
  const lockers = createLockerData(numLockers);

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
