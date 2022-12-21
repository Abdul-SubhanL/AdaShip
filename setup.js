const fs = require('fs');

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

  return parseInt(board_size);
}

module.exports = {
  boardSize,
};
