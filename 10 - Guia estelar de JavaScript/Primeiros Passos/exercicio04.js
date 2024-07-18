// A variável student abaixo é de que tipo de dados?
let student = {}

console.log(typeof student)

// Atribua a ela as mesmas propriedades e valores do exercício 3

student.name = 'Paulo'
student.age = 19
student.weight = 89.9
student.stars = 4.9
student.isSubscribed = true

/*
    Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weigth> kg.

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}kg`)