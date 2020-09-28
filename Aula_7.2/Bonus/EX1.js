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

const allLessons = () => {
  return Object.assign({'lesson1': lesson1}, {'lesson2': lesson2}, {'lesson3': lesson3});
}

// Item 1

const countStudentsMathClass = (param) => {
  let count = 0;
  const leassons = allLessons();
  
  for (const key in leassons) {
    if (leassons[key]['materia'] === param ) {
      count += leassons[key]['numeroEstudantes'];
    }
  }
  return count
}

console.log(countStudentsMathClass('Matemática'))

// Item 2

const report = (leasson, teacher) => {
  let classes = [];
  let students = 0;

  for (const key in leasson) {
    if (leasson[key]['professor'] === teacher ) {
      classes.push(leasson[key]['materia']);
      students += leasson[key]['numeroEstudantes'];
    }
  }

  return {
    'professor': teacher,
    'aulas': classes,
    'estudantes': students
  };

}

console.log(report(allLessons(), 'Maria Clara'))
