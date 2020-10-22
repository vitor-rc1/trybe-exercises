const generateNumber = () => Math.round(Math.random() * 50);

const promise = new Promise((resolve, reject) => {
  const numberArray = [];
  for (let count = 0; count < 10; count += 1) {
    numberArray.push(generateNumber()**2);
  }
  const sumNumbers = numberArray
  .reduce((acumulator, value) => acumulator + value);
  if (sumNumbers > 8000) {
    return reject(console.log('Deu ruim rapazeada.'));
  }
  resolve(sumNumbers);
})
.then(number => {
  const divisionArray = [2, 3, 5, 10]
  const resultArray = divisionArray.map(value => Math.round(number/value))
  console.log(resultArray)

  const promiseSum = new Promise((resolve, reject) => {
    return resolve(resultArray)
  }).then(array => console.log(array.reduce((acumulator, value) => acumulator + value)))
})
.catch(msg2 => console.log('É mais de OITO MIL!!! Essa promise só pode estar quebrada'));