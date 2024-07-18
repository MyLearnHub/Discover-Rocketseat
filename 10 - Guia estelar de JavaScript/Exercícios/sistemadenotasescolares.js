/*
    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C
    
    * de 90 para cima -   A
    * entre 80 - 89   -   B
    * entre 70 - 79   -   C
    * entre 60 - 69   -   D
    * menor que 60    -   F
*/

function converterNota(nota) {
    let notaA = nota >= 90
    let notaB = nota >= 80
    let notaC = nota >= 70
    let notaD = nota >= 60
    let notaF = nota < 60
    let notaValida = nota >= 0 && nota <= 100

    let notaConvertida

    if (notaValida) {
        if (notaA) {
            notaConvertida = "A"
        } else if (notaB) {
            notaConvertida = "B"
        } else if (notaC) {
            notaConvertida = "C"
        } else if (notaD) {
            notaConvertida = "D"
        } else if (notaF) {
            notaConvertida = "F"
        }
    } else {
        notaConvertida = "Nota inválida"
    }

    return `Sua nota convertida é: ${notaConvertida}`
}

console.log(converterNota(i))