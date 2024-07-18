// Se você precisa de um novo valor para a variável, você não muda, cria uma nova
const cart = {
    quality: 2,
    total: 200
}

cart.quality = 3 // Errado

const newCart = { ...cart, quality: 3 } // Certo