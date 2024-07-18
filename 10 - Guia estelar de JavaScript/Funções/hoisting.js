// A seguinte função recebe o efeito de hoisting.
sayMyName()

function sayMyName() {
    console.log('Paulo')
}

// Funções anônimas não tem efeito de hoisting, um erro será apontado.
sum()

var sum = function (number1, number2) {
    let total = number1 + number2
    return total
}