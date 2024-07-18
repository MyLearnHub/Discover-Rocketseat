/*
    Se baseia principalmente em 3 métodos:
    push() - adiciona um elemento a pilha
    pop() - remove o elemento do topo da pilha
    peek() - obtem o elemento do topo da pilha
*/

// Modelando
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }

    push(value) {
        this.top++
        this.data[this.top] = value
        return this.data
    }

    pop() {
        if (this.top < 0) return undefined
        const poppedTop = this.data[this.top]
        delete this.data[this.top]
        this.top--
        return poppedTop
    }

    peek() {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}


// Utilizando
const stack = new Stack()

stack.push('learning')
stack.push('data')
stack.push('structures')
console.log(stack)

console.log(stack.peek())
stack.pop()
console.log(stack.pop())
console.log(stack.peek())