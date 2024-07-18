// Cancela um timeout
const timeout = 3000
const finished = () => console.log("Feito!")

let timer = setTimeout(finished, timeout)
clearTimeout(timer)