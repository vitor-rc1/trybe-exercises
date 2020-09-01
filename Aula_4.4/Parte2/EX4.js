// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function nomesLength(nomes){
    let maiorNome = ""
    for( nome in nomes){
        if(nomes[nome].length >= maiorNome.length){
            maiorNome = nomes[nome]
        }

    }
    console.log(maiorNome)
}
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
nomesLength(nomes)