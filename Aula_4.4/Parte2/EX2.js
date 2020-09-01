// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(Array){
    let index = 0;
    for (const key in Array) {
        if (Array[key]>=Array[index]) {
            index = key;
            
        }

    }
    return console.log(index)
    
}
maiorValor([2, 3, 6, 7, 10, 1])