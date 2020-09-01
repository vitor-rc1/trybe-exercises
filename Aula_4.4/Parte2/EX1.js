// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo(param) {
    let reverse = ""
    for (let i = 1; i <= param.length; i += 1) {
        reverse += param[param.length - i]
        
    }
    //console.log(reverse)
    if (param == reverse){
        return console.log("true");
    }
    else{
        return console.log("false");
    }
}

palindromo("tenet")

