console.log(process.argv)

const firstName = process.argv[2]
const lastName = process.argv[3]

console.log(`Seu nome é ${firstName} ${lastName}`)

// É possível também passar flags como argumentos, usando --, por exemplo --name "Paulo Alvares" no terminal