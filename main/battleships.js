const { Board } = require('../libs/board-class');
const { Ship } = require('../libs/ship-class');
const { printMenu, userChoice } = require('../libs/main-menu');
const { boardSize, shipsArray } = require('../setup');
const { randomlyPlaceShip } = require('../libs/place-random-ship');
var prompt = require('prompt-sync')();

function main() {
  // Setup ---
  // Get board size from config
  const board_size = boardSize();
  // Get ships list
  const ships_array = shipsArray();

  // Output welcome screen and game options
  printMenu();

  // User inputs gamemode option which returns a generated settings object
  const settings = userChoice();

  // TODO: remove once other gamemodes are implemented
  if (settings.user_selection != 1) {
    console.log('Sorry this gamemode is not yet supported');
    return;
  }

  // Create new instance of Board class for user
  let user_board = new Board(board_size);

  // Create array of Ship instances
  const ship_instances = [];
  for (const ship of ships_array) {
    const [shipType, length] = ship;
    const newShip = new Ship(shipType, length);
    ship_instances.push(newShip);
  }

  console.clear();
  let ready_to_start = false;

  let options_array = [
    `\nPress A to autoplace all remaining ships`,
    `Press S to choose a ship to place on the board`,
    `Press R to reset the shipboard`,
    `Press Q to quit the game\n`,
  ];
  let confirm_statement = `Press C if you are happy with the ship placement`;

  while (!ready_to_start) {
    // Output grid to console
    user_board.getGrid();

    // Output options to console
    options_array.forEach((option) => {
      console.log(option);
    });

    // check if every ship has been placed down
    if (ship_instances.every((ship) => ship.placed === true)) {
      console.log(confirm_statement);
    }

    let user_option = prompt();

    if (user_option.toUpperCase() == 'R') {
      user_board.grid = user_board.createGrid();
      ship_instances.forEach((ship) => {
        ship.coordinates = [];
        ship.placed = false;
      });

      console.clear();
    } else if (user_option.toUpperCase() == 'Q') {
      process.exit(0);
    } else if (user_option.toUpperCase() == 'S') {
      // TODO: finish off addition of battleships
      console.clear();
      user_board.getGrid();

      console.log(
        `\nPlease choose the number of the ship you would like to move\n\n`
      );
      for (let i = 0; i < ship_instances.length; i++) {
        console.log(
          `${i + 1}. ${ship_instances[i].ship_type}, length: ${
            ship_instances[i].length
          }`
        );
      }

      let valid_position = false;

      while (valid_position == false) {
        // TODO: Sanitise inputs
        let ship_to_move = prompt();

        let vertical = prompt(
          '\n\nType V to place vertically or H to place horizontally: '
        );
        if (vertical == 'V') {
          vertical = true;
        } else {
          vertical = false;
        }

        const xCoord = prompt('Enter the x coordinate: ');
        const yCoord = prompt('Enter the y coordinate: ');

        // -1 as list started from 1
        let check = ship_instances[ship_to_move - 1].checkValidPosition(
          vertical,
          xCoord,
          yCoord,
          user_board.grid
        );

        if (check == true) {
          ship_instances[ship_to_move - 1].placeShip(
            vertical,
            xCoord,
            yCoord,
            user_board.grid
          );
        } else {
          console.log('You cannot place the ship here, please try again');
        }
      }
    } else if (user_option.toUpperCase() == 'A') {
      ship_instances.forEach((ship) => {
        if (ship.placed == false) {
          randomlyPlaceShip(user_board.grid, ship);
        }
        console.clear();
      });
    } else if (
      user_option.toUpperCase() == 'C' &&
      ship_instances.every((ship) => ship.placed === true)
    ) {
      ready_to_start = true;
      console.clear();
    } else {
      console.clear();
      console.log("That's not an option, please choose again! \n");

      continue;
    }
  }
}

main();
