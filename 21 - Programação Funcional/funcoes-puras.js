// Não deve depender de nenhum dado externo a não ser aquele que foi passado como argumento
// Não deverá sofrer nenhuma interferência externa
// Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
// Não deve ter nenhum efeito colateral no código
// Não modifica nenhum dado
// Não guarda nenhum estado

// Função impura
// Exemplo 1: está dependendo de dado externo que não foi passado como parâmetro
function calcularCircunferencia(radius) {
    return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
    name: 'Rafael Camarda',
    age: 'jovem'
}

function mudarNome(name) {
    person.name = name
}

// Função pura
const calculateCircunference = function (pi, radius) {
    return pi * (radius + radius)
}

// Alternativa com arrow function
const calcularCirculo = (pi, radius) => pi * (radius + radius)

const changeName = (person, name) => ({ ...person, name })