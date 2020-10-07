    
const assert = require('assert');
const { on } = require('process');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  return names.reduce((acc, currentValue) => {
    const onlyACount = currentValue.toLocaleLowerCase()
    .split('')
    .reduce((accAux, letter) => {
      return (letter === 'a') ? accAux += 1: accAux;
    }, 0);
    return acc + onlyACount;
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);