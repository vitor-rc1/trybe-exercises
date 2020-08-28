let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (i of numbers){
    soma += i
}
let media = soma/numbers.length
console.log(`A média desses valores é: ${media}`)

if (media>20){
    console.log("Valor maior que 20")
}
else{
    console.log("Valor igual ou menor que 20")
}