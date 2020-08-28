/* 
1. Ordene o array numbers em ordem crescente e imprima seus valores;
2. Ordene o array numbers em ordem decrescente e imprima seus valores;
3. Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo: 
*/

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = []

for (let i=0; i<array.length; i += 1){
    if(i<(array.length-1)){
       newArray.push(array[i]*array[i+1]) 
    }
    else{
        newArray.push(array[i]*2)
    }
    

}

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let position = array[i];
  
        array[i] = array[j];
        array[j] = position;
      }
    }
    
  }

console.log(newArray)
console.log(array)
console.log(array.reverse())
