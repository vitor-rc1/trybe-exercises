let Custo = 2
let Venda = -1

if(Custo<0 || Venda<0){
    console.log("Um dos valores inseridos é inválido")
}
else{
    console.log(`Seu lucro será de: R$${Venda-(Custo*1.2)}`)
}
