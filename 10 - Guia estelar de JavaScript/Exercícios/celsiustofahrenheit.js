/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
        C = (F - 32) * 5/9 
        F = C * 9/5 + 32
*/
function converterTemperatura(temperatura) {
    let temperaturaTransformada = temperatura.toUpperCase()
    let temperaturaValida = temperaturaTransformada.includes("Cº") || temperaturaTransformada.includes("Fº")
    let temperaturaConvertida = 0.0
    let unidadeDaTemperatura

    if (!temperaturaValida) {
        return "Valor de temperatura inválido, por favor insira um valor com Cº ou Fº (Ex: 34Fº)"
    }

    temperaturaConvertida = Number(temperaturaTransformada.replace("Cº", "")) * 9 / 5 + 32
    unidadeDaTemperatura = "Fº"

    if (temperaturaTransformada.includes("Fº")) {
        temperaturaConvertida = (Number(temperaturaTransformada.replace("Fº", "")) - 32) * 5 / 9
        unidadeDaTemperatura = "Cº"
    }

    return `${temperatura} convertido em ${unidadeDaTemperatura}: ${temperaturaConvertida.toFixed(2) + unidadeDaTemperatura}`
}

console.log(converterTemperatura("50efZº"))