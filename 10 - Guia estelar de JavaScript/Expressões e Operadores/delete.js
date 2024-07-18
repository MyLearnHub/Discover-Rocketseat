// Usamos o operador delete para excluir uma propriedade em um objeto
const person = {
    name: 'Paulo',
    age: 19,
    Kg: 89.9
}

delete person.Kg

console.log(person)