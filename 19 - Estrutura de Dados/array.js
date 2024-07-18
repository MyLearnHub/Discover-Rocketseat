const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// Encontrar Senna
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// Deletar um elemento
pilotos.splice(1, 1)

for (const piloto of pilotos) {
    console.log(piloto)
}