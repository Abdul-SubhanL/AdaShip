const { numberToLetters } = require('./helpers/numbers-to-letters');

// Board class
class Board {
  constructor(size) {
    this.size = size;
    this.grid = this.createGrid();
  }

  // Method to create grid
  createGrid() {
    // Create 2D array with specified size as width and height
    const grid = [];
    for (let i = 0; i < this.size; i++) {
      grid.push(new Array(this.size).fill('O'));
    }
    return grid;
  }

  // Method to get value of coordinates on the grid
  getPosition(x, y) {
    // get the value of the cell at the specified coordinates
    return this.grid[y][x];
  }

  // Method to add boat to grid
  addBoat(x, y, boat_type) {
    // Update grid to add type of boat based on x and y coordinates
    this.grid[x][y] = boat_type;
  }

  get getGrid() {
    let x_axis = '     ';
    for (let j = 1; j <= this.size; j++) {
      x_axis += numberToLetters(j) + ' ';
    }
    console.log(x_axis, '\n');

    for (let i = 0; i < this.size; i++) {
      let k = (i + 1).toString();
      // Output differently for 2-digit numbers to keep formatting the same
      if (k.length > 1) {
        console.log(i + 1, ' ', this.grid[i].join(' '));
      } else {
        console.log(i + 1, '  ', this.grid[i].join(' '));
      }
    }

    return this.grid;
  }
}
