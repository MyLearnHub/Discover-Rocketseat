// Encadeamento de funções
// Uma função que retorna algo e vai para outra função, que retorna um dado e vai para outra função...
const people = ['Rafa', 'Diego', 'Dani', 'Paulo', 'Mayk']
const pessoasComLetraD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())
console.log(pessoasComLetraD)