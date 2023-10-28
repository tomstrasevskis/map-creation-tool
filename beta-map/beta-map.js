const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const land = [];

let mapSize = 15;

for (let row = 0; row < mapSize; row++) {
    for (let col = 0; col < mapSize; col++) {
        const id = uuidv4();
        const position = generateRandomPosition(row, col);
        const owner = null;
        land.push({ id, position, owner });
    }
}

function generateRandomPosition(row, col) {
    const x = col - Math.floor(mapSize / 2);
    const y = row - Math.floor(mapSize / 2);
    return [x, y];
}

const data = { "land": land };
const jsonData = JSON.stringify(data, null, 2);

fs.writeFile('beta-map/mapData.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing JSON file: ', err);
    } else {
        console.log('JSON file has been created.');
    }
});