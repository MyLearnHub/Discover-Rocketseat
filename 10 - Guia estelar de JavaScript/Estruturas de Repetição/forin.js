// For in percorre um objeto é seleciona sua propriedade

let person = {
    name: 'John',
    age: 34,
    weigth: 88.6
}

for (const propriedade in person) {
    console.log(propriedade)
    console.log(person[propriedade])
}