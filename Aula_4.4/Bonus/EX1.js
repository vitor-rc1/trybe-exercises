// Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
function romanoToDec(romano){
    let numeroRomano = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    
    }
    let romanoSplit = romano.split("")
    let totalArray = []
    let total = 0
    for (let key in romanoSplit) {
        for (let chave in numeroRomano){
            if(romanoSplit[key] == chave){
                totalArray.push(numeroRomano[chave])
            }
        }
    }
    console.log(totalArray)
    for (let i = 0; i < totalArray.length; i += 1) {
        if (totalArray[i] < totalArray[i+1]){
            total += totalArray[i+1] - totalArray[i]
            i += 1;
        }
        else {
            total += totalArray[i]
        }
        
    }
    return total

}

console.log(romanoToDec("MDCCCXCII"))


