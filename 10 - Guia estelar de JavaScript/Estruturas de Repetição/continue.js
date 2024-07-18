// Continue serve para parar o a estrutura de repetição em execução, mas seguir para o próximo looping
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue
    }
    console.log(i)
}