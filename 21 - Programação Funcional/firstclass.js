// Podem estar em qualquer lugar , inclusive como parâmetro de outra função
// A função poderá ser entendida como uma variável
const sayMyName = () => console.log('Paulo')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('Discover'))

console.log(runFunction(Math.random()))