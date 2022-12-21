function boardSizeLimit(size) {
  if (size > 80) {
    throw Error('Board size cannot be greater than 80x80');
  } else if (size < 5) {
    throw Error('Board size cannot be smaller than 5x5');
  }
}

module.exports = { boardSizeLimit };
