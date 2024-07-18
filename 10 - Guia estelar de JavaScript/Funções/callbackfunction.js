function sayMyName(name) {
    console.log('Antes do callback')

    name()

    console.log('Depois do callback')
}

//Callback function é quando uma função é passada como argumento. Sendo executada como um tipo de dado.
sayMyName(() => {
    console.log('Paulo')
})