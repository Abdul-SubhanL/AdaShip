// returns a number for the letter or letter combination entered
function lettersToNumber(letters) {
  if (letters.length === 1) {
    // A-Z
    return letters.charCodeAt(0) - 64;
  } else {
    // AA-ZZ
    let quotient = letters.charCodeAt(0) - 64;
    let remainder = letters.charCodeAt(1) - 64;
    return (quotient - 1) * 26 + remainder + 1;
  }
}

module.exports = {
  lettersToNumber,
};
