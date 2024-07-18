// Roda uma função N vezes depois de X milissegundos
const timeout = 1000
const checking = () => console.log("Checando!")

let interval = setInterval(checking, timeout)

clearInterval(interval) // Comente essa linha
// setTimeout(() => clearInterval(interval), 3000) // Descomente essa