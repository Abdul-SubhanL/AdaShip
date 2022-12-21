// Returns a letter for the number inputted
function numberToLetters(num) {
  if (num <= 26) {
    // A-Z
    return String.fromCharCode(65 + (num - 1));
  } else {
    // AA-ZZ
    let quotient = Math.floor((num - 1) / 26);
    let remainder = (num - 1) % 26;
    return (
      String.fromCharCode(65 + quotient - 1) +
      String.fromCharCode(65 + remainder)
    );
  }
}

module.exports = {
  numberToLetters,
};
