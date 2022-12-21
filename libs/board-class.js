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
      grid.push(new Array(this.size).fill('\u00B7'));
    }
    return grid;
  }

  // Method to get value of coordinates on the grid
  getPosition(x, y) {
    // get the value of the cell at the specified coordinates
    return this.grid[y][x];
  }

  // Method to add ship to grid
  addShip(x, y, ship_type, isVertical) {
    // Update grid to add type of ship based on x and y coordinates
    this.grid[x][y] = ship_type;
  }

  getGrid() {
    // Create x axis and output at top of grid
    let x_axis = '     ';
    for (let j = 1; j <= this.size; j++) {
      x_axis += numberToLetters(j) + ' ';
    }
    console.log(x_axis, '\n');

    // Create Y axis and concatenate with joined array row
    for (let i = 0; i < this.size; i++) {
      let k = (i + 1).toString();
      // Output with less spaces for 2-digit numbers to keep formatting the same
      if (k.length > 1) {
        console.log(i + 1, ' ', this.grid[i].join(' '));
      } else {
        console.log(i + 1, '  ', this.grid[i].join(' '));
      }
    }
  }

  get grid() {
    return this._grid;
  }

  set grid(newGrid) {
    this._grid = newGrid;
  }
}

module.exports = { Board };
