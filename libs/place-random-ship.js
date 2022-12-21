function randomlyPlaceShip(grid, ship) {
  let placed = false;
  let ship_letter = ship.ship_type[0];

  // Keep trying to place the ship until it is successfully placed
  while (!placed) {
    // Generate a random position and orientation for the ship
    let x = Math.floor(Math.random() * grid.length);
    let y = Math.floor(Math.random() * grid[0].length);
    let isVertical = Math.random() < 0.5;

    // Check if the ship fits on the grid at the generated position
    if (isVertical) {
      if (y + ship.length > grid[0].length) {
        continue;
      }
    } else {
      if (x + ship.length > grid.length) {
        continue;
      }
    }

    // Check if there is overlap with any other ships
    let overlap = false;
    for (let i = 0; i < ship.length; i++) {
      let xCoord = isVertical ? x : x + i;
      let yCoord = isVertical ? y + i : y;
      if (grid[xCoord][yCoord] !== '\u00B7') {
        overlap = true;
        break;
      }
    }
    if (overlap) {
      continue;
    }

    // Place the ship on the grid
    for (let i = 0; i < ship.length; i++) {
      let xCoord = isVertical ? x : x + i;
      let yCoord = isVertical ? y + i : y;
      grid[xCoord][yCoord] = ship_letter;
      ship.coordinates.push([xCoord, yCoord]);
    }
    ship.isVertical = isVertical;
    ship.placed = true;
    placed = true;
  }
}

module.exports = { randomlyPlaceShip };
