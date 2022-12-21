const { printMenu, userChoice } = require('../libs/main-menu');

function main() {
  // Output welcome screen and game options
  printMenu();

  // User inputs gamemode option which returns a generated settings object
  const settings = userChoice();
}

main();
