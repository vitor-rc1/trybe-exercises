// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(Array){
    let index = 0;
    for (const key in Array) {
        if (Array[key]<=Array[index]) {
            index = key;
            
        }

    }
    return console.log(index)
    
}
menorValor([2, 4, 6, -7, 10, 0, -3])