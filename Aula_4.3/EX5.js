//faça uma pirâmide com n asteriscos de base:

n = 11;
let asteriscosArray = ["*"];
let espaçosArray = [""];
let espaçosCont = Math.ceil((n-1)/2);
let espaçosIntArray = [""," "]

for (let i = 0; i < espaçosCont; i += 1) {

    let espaçoInterno = " "
    let espaço = ""
    let asteriscos = "*"
    for (let j = 0; j <= i; j += 1) {
        asteriscos += "**"
        espaço += " "
        espaçoInterno += "  "
    }
    espaçosIntArray.push(espaçoInterno)
    asteriscosArray.push(asteriscos);
    espaçosArray.push(espaço);

}

for (let i = 0; i <= espaçosCont; i += 1) {
    if(i == 0 ){
        console.log(espaçosArray[espaçosCont-i] + asteriscosArray[0]) 

    }
    else if (i>0 && i<espaçosCont) {
        console.log(espaçosArray[espaçosCont-i] + asteriscosArray[0] + espaçosIntArray[i] + asteriscosArray[0])
        
    }
    else{
        console.log(espaçosArray[espaçosCont-i] + asteriscosArray[i]) 

    }
      
    
}