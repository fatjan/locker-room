const createLockerData = (numLockers) => {
    const lockers = [];
    for (let i = 1; i <= numLockers; i++) {
        const occupied = getRandomInt(2) === 1;
        lockers.push({ id: i, occupied });
    }
    return lockers;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

export { createLockerData };