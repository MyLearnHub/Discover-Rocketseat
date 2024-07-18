/* 
    Sem rodar o código responda qual é a resposta do código abaixo e por que? 
    Após sua resposta, rode o código e veja se você acertou.
*/

console.log(a)
var a = 1

/* 
    Resposta: o console apontara como "undefined", pois var atua com o conceito promessa. 
    Isso significa que por de baixo dos panos o JavaScript está fazendo o seguinte: 

    var a
    console.log(a)
    a = 1

    Esse efeito é chamado de hoisting, e acontece por que var tem o escopo global.
*/