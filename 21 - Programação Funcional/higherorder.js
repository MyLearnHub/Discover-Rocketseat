// Funções que recebem funções como argumentos
// Funções que podem retornar outras funções
const numbers = [2, 4, 8, 16]
const square = n => n * n
const squaredNumber = numbers.map(square)

// Exemplo de um retorno de função
const pause = wait => fn => setTimeout(fn, wait)
pause(600)(() => console.log('Esperando 600ms'))

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('Esperando 200ms'))
wait1000(() => console.log('Esperando 1s'))