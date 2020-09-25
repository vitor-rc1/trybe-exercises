let fatorial = num => {
  let fatorial = 1;
  for (let cont = 1; cont <=num; cont += 1) {
    fatorial = fatorial * cont;
  }
  return fatorial;
}

console.log(fatorial(55));