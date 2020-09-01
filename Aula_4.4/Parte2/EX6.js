// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio(N){
    let somatorio=0;
    for (let i = 1; i <= N; i++) {
        somatorio += i
        
    }
    return somatorio
}
console.log(somatorio(6))