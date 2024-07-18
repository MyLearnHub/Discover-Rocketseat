// Deve ter pelo menos 1 argumento
// Deve retornar algo
// Nada que executa afeta o resto do código (local)
// Dados imutáveis 
// Não guarda estado
// Não se usa loop's e sim recursividade
const random = (number, Math) => Math.floor(Math.random() * number)

const factorial = x => {
    if (x === 0) {
        return 1
    }

    return x * factorial(x - 1)
}

console.log(random)
console.log(factorial(6))