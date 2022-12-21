const fs = require('fs');
const { boardSizeLimit } = require('./libs/validation/board-size-limit');

// Open and store ini file as string
const ini_string = fs.readFileSync('adaship_config.ini', 'utf8');
// Parse ini_string as Array using new line as deliminers
const ini_array = ini_string.split('\n');

function boardSize() {
  // Get board size string in separate array
  let board_size_string = ini_array[0];

  // Remove leading text to leave board size eg 10x10
  // Split array on the character 'x' to get two arrays containing length and width
  // Can choose either of returned arrays as the grid is a square
  const board_size = board_size_string.replace('Board: ', '').split('x')[0];

  boardSizeLimit(board_size);

  return parseInt(board_size);
}

function shipsArray() {
  // Get all ships in an array
  let ship_array = [...ini_array].splice(1);

  // Sanitise array
  // Remove leading 'Boat: ' tag
  // Convert commas into semicolons
  ship_array = ship_array.map((str) =>
    str.replace('Boat: ', '').replace(',', ':')
  );

  // Convert ships array into 2d array in the format [[ship, size of ship]]
  ship_array = ship_array.map((str) => {
    const [ship, size] = str.split(':');
    return [ship, parseInt(size)];
  });

  return ship_array;
}

console.log(boardSize());

module.exports = {
  boardSize,
  shipsArray,
};
