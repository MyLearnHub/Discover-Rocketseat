// Conversão número = string
let string = '123'
let number = 456

console.log(string)
console.log(number)

console.log(Number(string) + number)
console.log(String(number) + string)

console.log("---------------------------------------------------------------")

// Substituição de caracteres
let fixar = 123.8909808212
console.log(fixar.toFixed(2).replace(".", ","))

console.log("---------------------------------------------------------------")

// Separar / Cortar caracteres (ou arrays) e uni-los
let frase = "Eu quero viver o amor!!!"
let meuArray = frase.split(" ") // Ao usar o split, a string é convertida em array
let fraseComSnake = meuArray.join("_") // Ao usar o join, o array é convertido em string
console.log(fraseComSnake)

console.log("---------------------------------------------------------------")

// Procurar combinação de caracteres
console.log(frase.includes("amor"))

console.log("---------------------------------------------------------------")

// Criando arrays com construtor
let arrayConstrutor = new Array("a", "b", "c", "d") // Aqui eu crio um array com construtor e posições definidas
let arrayConstrutorPosition = new Array(10) // Aqui eu crio um array com 10 posições vazias
console.log(arrayConstrutor)
console.log(arrayConstrutorPosition)

console.log("---------------------------------------------------------------")

// Transformando uma cadeia de caracteres em elementos de um array
let palavra = "paralelepipedo"
console.log(Array.from(palavra))