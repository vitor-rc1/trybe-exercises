// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repete(Array){
    let uniqueKeys = Array.keys()
    let index = {};
    let greaterValue = 0
    for (let key of uniqueKeys) {
        
        let cont = 0;
        for(let chaves in Array){
            if(Array[chaves] == key){
                cont += 1
            }
        }
        if(cont>greaterValue){
            greaterValue =  key
        }

        index[key]=cont
    }
    return console.log(greaterValue)
    
}
let array = [2, 3, 2, 5, 5, 5, 5, 5, 8, 2, 3, 3, 3];
repete(array)