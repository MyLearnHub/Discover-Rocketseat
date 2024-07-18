/*
    Se baseia principalmente em 2 métodos:
    enqueue() - adiciona um elemento ao final da fila
    dequeue() - remover o primeiro elemento a entrar na fila
*/

// Modelando
class Queue {
    constructor(){
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} entrou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}
// Utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')

fila.dequeue()
fila.dequeue()
fila.dequeue()
