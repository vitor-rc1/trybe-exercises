const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Item 1
const addParam = (object, key, keyValue) => {
  object[key] = keyValue;
};
addParam(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Item 2
const objectKeys = (object) =>{
  return Object.keys(object);
};
console.log(objectKeys(lesson2));

// Item 3
const objectLength = (object) => {
  return Object.keys(object).length;
};
console.log(objectLength(lesson2));

//Item 4
const objectValues = (object) => {
  return Object.values(object);
};
console.log(objectValues(lesson2));

// item 5
const allLessons = () => {
  return Object.assign({'lesson1': lesson1}, {'lesson2': lesson2}, {'lesson3': lesson3});
}
console.log(allLessons())

// Item 6
const countStudents = (object) => {
  return object.lesson1.numeroEstudantes + object.lesson2.numeroEstudantes + object.lesson3.numeroEstudantes;
}

console.log(countStudents(allLessons()));

// Item 7
const positionOfLesson = (lesson, position) => {
  return Object.values(allLessons()[lesson])[position];
}
console.log(positionOfLesson('lesson1', 1));

// Item 8
const verifyIfExist = (object, key, keyValue) => {
  return object[key] === keyValue;
}
console.log(verifyIfExist(lesson3, 'materia', 'Maria Clara'));