/* Agora inverta o lado do triângulo. */

n = 5
let asteriscosArray = []
let espaçosArray = []
for (let i = 0; i < n; i += 1) {
    let espaço = ""
    let asteriscos = ""
    for (let j = 0; j <= i; j += 1) {
        asteriscos += "*"
        espaço += " "
        
        
    }
    asteriscosArray.push(asteriscos)
    espaçosArray.push(espaço)
    
}
for (let i = 1; i <= n; i += 1) {
    console.log(espaçosArray[n-i] + asteriscosArray[i-1])  
    
}