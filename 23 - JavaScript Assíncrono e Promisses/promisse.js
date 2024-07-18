/* Promessa de que algo vai acontecer, certo ou errado, mas vai acontecer */

// Promessa retorna com sucesso
// console.log('pedir uber') 
// const promessa = new Promise((resolve, reject) => {
// 	return resolve('carro chegou')
// })

// console.log('aguardando')

// promessa.then(result => console.log(result)) // descomentar

// Promessa é rejeitada e usamos o catch() para capturar o erro
// console.log('pedir uber') 
// const promessa2 = new Promise((resolve, reject) => {
// 	return reject('pedido negado!')
// })

// console.log('aguardando')

// promessa2.then(result => console.log(result)).catch(erro => console.log(erro))

let aceitar = true

console.log('pedir uber') 
const promessa = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('pedido aceito!')
	}

	return reject('pedido negado!')
})

console.log('aguardando')

promessa
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
	.finally(() => console.log('finalizada'))