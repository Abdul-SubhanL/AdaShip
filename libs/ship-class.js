const { lettersToNumber } = require('./helpers/letters-to-numbers');

// Ship class
class Ship {
  constructor(ship_type, length) {
    this.sunk_status = false;
    this.length = length;
    this.ship_type = ship_type;
    this.isVertical = true;
    this.placed = false;
    this.coordinates = [];
  }

  // get status of a ship
  get sunk_status() {
    return this.sunk_status;
  }

  // change status of a ship
  set sunk_status(result) {
    this._sunk_status = result;
  }

  placeShip(grid, x, y, isVertical) {
    // Place the ship on the grid
    for (let i = 0; i < this.length; i++) {
      let xCoord = isVertical ? x : x + i;
      let yCoord = isVertical ? y + i : y;
      grid[xCoord][yCoord] = ship_letter;
      this.coordinates.push([xCoord, yCoord]);
    }
    this.isVertical = isVertical;
    this.placed = true;
    placed = true;
  }

  // Method to check ship can be placed in specified position
  checkValidPosition(isVertical, x, y, grid) {
    x = lettersToNumber(x.toUpperCase());
    // Check if the ship fits on the grid at the generated position
    if (isVertical) {
      if (y + this.length <= grid[0].length) {
        return false;
      }
    } else {
      if (x + this.length <= grid.length) {
        return false;
      }
    }

    // Check if there is overlap with any other ships
    let overlap = false;
    for (let i = 0; i < this.length; i++) {
      let xCoord = isVertical ? x : x + i;
      let yCoord = isVertical ? y + i : y;
      if (grid[xCoord][yCoord] !== '\u00B7') {
        overlap = true;
        return false;
      }
    }
    if (overlap) {
      return false;
    }
    return true;
  }
}

module.exports = { Ship };
