const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalName = Animals.find((animal) => animal.name === name);
      if (animalName) {
        return resolve(animalName);
      }

      return reject({ error: 'Não possui animal com esse nome.' });
    }, 100);
  })
)

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
}

console.log(getAnimal('Dorminhoo').catch(response => console.log(response)))