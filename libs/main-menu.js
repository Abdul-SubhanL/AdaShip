const chalk = require('chalk');
var prompt = require('prompt-sync')();

// Create an array of options
const options = [
  'Player vs Computer',
  'Player vs Player',
  'Player vs Computer (Salvo)',
  'Player vs Player (Salvo)',
  'Player vs Computer (Hidden Mines)',
  'Player vs Player (Hidden Mines)',
  'Computer vs Computer (Hidden Mines)',
  'Quit',
];

// Create a subroutine to display the menu
function printMenu() {
  console.log(
    chalk.red(`\n
    ░█████╗░██████╗░░█████╗░░██████╗██╗░░██╗██╗██████╗░
    ██╔══██╗██╔══██╗██╔══██╗██╔════╝██║░░██║██║██╔══██╗
    ███████║██║░░██║███████║╚█████╗░███████║██║██████╔╝
    ██╔══██║██║░░██║██╔══██║░╚═══██╗██╔══██║██║██╔═══╝░
    ██║░░██║██████╔╝██║░░██║██████╔╝██║░░██║██║██║░░░░░
    ╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝╚═╝░░░░░\n`)
  );
  console.log(
    chalk.yellow('\nWelcome to the game menu! Please choose an option:\n')
  );
  for (let i = 0; i < options.length; i++) {
    // Print options to screen
    console.log(chalk.cyan(`${i + 1}. ${options[i]}`));
  }
}

function userChoice() {
  let user_selection = prompt();
  let valid = false;
  let settings = {
    user_selection: user_selection,
    salvo_mode: false,
    two_player: false,
    hidden_mines: false,
    computer_v_computer: false,
  };

  while (valid == false) {
    if (user_selection == 1) {
      console.log(
        chalk.green(
          '\nYou have chosen to play a one player game against the computer!'
        )
      );
      valid = true;
    } else if (user_selection == 2) {
      console.log(chalk.green('\nYou have chosen to play a two player game!'));
      valid = true;
      settings.two_player = true;
    } else if (user_selection == 3) {
      console.log(
        chalk.green(
          '\nYou have chosen to play a one player game against the computer in salvo mode!'
        )
      );
      valid = true;
      settings.salvo_mode = true;
    } else if (user_selection == 4) {
      console.log(
        chalk.green(
          '\nYou have chosen to play a two player game in salvo mode!'
        )
      );
      valid = true;
      settings.salvo_mode = true;
      settings.two_player = true;
    } else if (user_selection == 5) {
      console.log(
        chalk.green(
          '\nYou have chosen to play a one player game against the computer with hidden mines enabled!'
        )
      );
      valid = true;
      settings.hidden_mines = true;
    } else if (user_selection == 6) {
      console.log(
        chalk.green(
          '\nYou have chosen to play a two player game with hidden mines enabled!'
        )
      );
      valid = true;
      settings.two_player = true;
      settings.hidden_mines = true;
    } else if (user_selection == 7) {
      console.log(
        chalk.green(
          '\nYou have chosen to watch a computer vs computer game with hidden mines enabled!'
        )
      );
      valid = true;
      settings.computer_v_computer = true;
      settings.hidden_mines = true;
    } else if (user_selection == 8) {
      console.log(chalk.hex('#FFA500')('\nThanks for playing! Goodbye.'));
      valid = true;
      process.exit(0);
    } else {
      console.log(chalk.red('\nInvalid user_selection. Please try again. \n'));
      user_selection = prompt();
    }
  }
  settings.user_selection = user_selection;
  return settings;
}

module.exports = {
  printMenu,
  userChoice,
};
