// O throw tem como função disparar algo
function sayMyName(name){
    if(name === ''){
        throw 'Nome é necessário'
    } else{
        console.log(name)
    }
}

// Try tem como função tentar fazer algo
try {
    sayMyName('')
} catch (e) {
    // O catch pega o resultado do try em caso de erro, ou seja, oque o throw lançou
    console.log(e)
}