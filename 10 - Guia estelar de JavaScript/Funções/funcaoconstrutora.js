/* 
    Servem para criar interações entre objetos e funções
*/

// Aqui padronizamos o objeto
function Person(name, age){
    this.name = name
    this.idade = age
    this.walk = function(){
        return this.name + ' está andando'
    }
}

// Com o "new", criamos um novo objeto
const paulo = new Person('Paulo', 19)
const joao = new Person('Joao', 20)
const pedro = new Person('Pedro', 16)

console.log(paulo.name)
console.log(joao.idade)
console.log(pedro.walk())

// O JavaScript possui por padrão funções construtoras também
let nome = new String("Paulo")
console.log(nome)

let datas = new Date("2023-01-09")
console.log(datas)