// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (String(n)[0] === '-') {
    let absoluteNumber = Math.abs(n)
    return Number(String(absoluteNumber).split('').reverse().join('')) * -1;

  }
  return Number(String(n).split('').reverse().join(''));
}

module.exports = reverseInt;
