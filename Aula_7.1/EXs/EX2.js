let longestWord = (phrase) => {
  let arrayWords = phrase.split(' ');
  let longestWord = '';
  for (let index = 0; index < arrayWords.length; index += 1) {
    if (arrayWords[index].length > longestWord.length) {
      longestWord = arrayWords[index];
    }
  }
  return longestWord;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));