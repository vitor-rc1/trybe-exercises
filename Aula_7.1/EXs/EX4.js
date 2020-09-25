let replaceX = (string, param) => string.replace('x', param);

console.log(replaceX("Tryber x aqui!",'bebeto'))

let skills = ['JS', 'HTML', 'React', 'SQL', 'Python'];

let concat = (string, skills) => {
  let skillsOrder = skills.sort();
  return `${string} Minhas cinco principais habilidades são:
  *${skills[0]}
  *${skills[1]}
  *${skills[2]}
  *${skills[3]}
  *${skills[4]}`
}

console.log(concat(replaceX("Tryber x aqui!",'Vitor'),skills))