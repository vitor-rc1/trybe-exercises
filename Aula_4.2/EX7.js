let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
for (i of numbers){
    if(menor>i){
        menor = i;
    }
}
console.log(menor)