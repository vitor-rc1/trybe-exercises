const generateNumber = () => Math.round(Math.random() * 50);

async function promise () {
  const numberArray = [];
  for (let count = 0; count < 10; count += 1) {
    numberArray.push(generateNumber()**2);
  }
  const sumNumbers = numberArray
  .reduce((acumulator, value) => acumulator + value);
  if (sumNumbers > 8000) {
    throw new Error('Deu ruim rapazeada.');
  }
  return sumNumbers;
}

async function promiseSum(result) {
  return result
}

async function callPromiseSum(result) {
  return await promiseSum(result)
}


async function callPromise() {
  await promise()
  .then(number => {
    const divisionArray = [2, 3, 5, 10]
    const resultArray = divisionArray.map(value => Math.round(number/value))
    console.log(resultArray)
    
    callPromiseSum(resultArray)
    .then(array => console.log(array.reduce((acumulator, value) => acumulator + value)))
    
  })
  .catch(msg2 => console.log(msg2 + '\nÉ mais de OITO MIL!!! Essa promise só pode estar quebrada'));
}

callPromise()
