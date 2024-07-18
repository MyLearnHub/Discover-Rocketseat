/*
    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
    Agora, crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia = {
    receitas: [345.78, 890.90, 678.35, 7633.43, 6543.78],
    despesas: [234.123, 980.51, 781.54, 6501.32, 6410.44]
}

function calcularFluxoDeCaixa(receitas, despesas){
    let valorDoSaldo = 0

    for (let receita of receitas) {
        valorDoSaldo += receita 
    }

    for (let despesa of despesas) {
        valorDoSaldo -= despesa 
    }

    return valorDoSaldo > 0 ? `Saldo Positivo: R$${valorDoSaldo.toFixed(2)}` : `Saldo Negativo R$${valorDoSaldo.toFixed(2)}`
}

console.log(calcularFluxoDeCaixa(familia.receitas, familia.despesas))