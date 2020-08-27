let a = 60;
let b = 60;
let c = 60;

/* // Calculo dos angulos para qualquer triangulo
let acosA = Math.acos(((a**2)-(b**2)-(c**2))/(-2*b*c))
let acosB = Math.acos(((b**2)-(a**2)-(c**2))/(-2*a*c))
let acosC = Math.acos(((c**2)-(b**2)-(a**2))/(-2*b*a))

let pi = Math.PI
let angulos = acosA + acosB + acosC
console.log(acosA)
console.log(acosB)
console.log(acosC)
console.log(angulos)
console.log(pi)

if (angulos==pi){
    console.log("É um triângulo")
}
else {
    console.log("Não é um triângulo")
} */

if ((a+b+c)==180){
    console.log("É um triângulo")
}
else {
    console.log("Não é um triângulo")
}