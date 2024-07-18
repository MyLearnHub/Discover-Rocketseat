let tecnologias = ["HTML", "CSS", "JS"]

// Adicionando um elemento no final do array
tecnologias.push("SQL")

// Adicionando um elemento no começo do array
tecnologias.unshift("Java")

// Remover o último elemento do array
tecnologias.pop()

// Remover o primeiro elemento do array
tecnologias.shift()

// Retornar somente o elemento pedido
console.log(tecnologias.slice(1, 2)) 
/* 
    ele aqui aceita dois parâmetros, o primeiro indica o início da busca (posição 1), 
    e o segundo indica a quantidade a partir do início do array 
*/

// Remover 1 ou mais itens em qualquer posição do array
tecnologias.splice(1, 2)

// Remover um elemento pelo index
let tecnologias2 = ["HTML", "CSS", "JS"]
let index = tecnologias2.indexOf("CSS")
tecnologias2.splice(index, 1)

console.log(tecnologias) // ao passar por várias transformações, aqui só chega o HTML 
console.log(tecnologias2) 