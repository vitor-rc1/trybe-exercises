let salarioBruto = 1500;
let INSS = 0;
let IR = 0;
//INSS
if(salarioBruto<=1556.94){
    INSS= salarioBruto*0.08
}
else if(salarioBruto>=1556.95 && salarioBruto<=2594.92){
    INSS= salarioBruto*0.09
}
else if(salarioBruto>=2594.93 && salarioBruto<=5189.82){
    INSS= salarioBruto*0.11
}
else{
    INSS= 570.88
}
let salarioBase = salarioBruto-INSS
//IR
if(salarioBase<=1903.98){
    IR= 0
}
else if(salarioBase>=1903.99 && salarioBase<=2826.65){
    IR= 142.8 - (salarioBase*0.075)
}
else if(salarioBase>=2826.66 && salarioBase<=3751.05){
    IR= 354.80 - (salarioBase*0.15)
}
else if(salarioBase>=3751.06 && salarioBase<=4664.68){
    IR= 636.13 - (salarioBase*0.225)
}
else{
    IR= 869.36 - (salarioBase*0.275)
}
console.log(INSS)
console.log(IR)
console.log(salarioBase)
console.log(`Seu salario liquido é de ${salarioBase + IR}`)