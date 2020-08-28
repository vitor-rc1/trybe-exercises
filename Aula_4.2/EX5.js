let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (i of numbers){
    if(i>maior){
        maior = i;
    }
}
console.log(maior)