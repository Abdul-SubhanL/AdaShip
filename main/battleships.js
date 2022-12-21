const { printMenu, userChoice } = require('../libs/main-menu');

function main() {
  // Output welcome screen and game options
  printMenu();

  // User inputs gamemode option
  const user_selection = userChoice();
}

main();
