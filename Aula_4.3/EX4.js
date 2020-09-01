//faça uma pirâmide com n asteriscos de base:

n = 9;
let asteriscosArray = ["*"];
let espaçosArray = [""];
let espaçosCont = Math.ceil((n-1)/2);

for (let i = 0; i < espaçosCont; i += 1) {

    let espaço = ""
    let asteriscos = "*"
    for (let j = 0; j <= i; j += 1) {
        asteriscos += "**"
        espaço += " "
        
    }
    asteriscosArray.push(asteriscos);
    espaçosArray.push(espaço);

}

for (let i = 0; i <= espaçosCont; i += 1) {
    console.log(espaçosArray[espaçosCont-i] + asteriscosArray[i])  
    
}