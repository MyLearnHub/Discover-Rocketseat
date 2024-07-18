/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// Contar o número de categorias e o número de livros em cada categoria
function contarCategoriaELivros() {
    let categorias = booksByCategory.length
    let textoFinal = `Ao todo temos ${categorias} categorias de livros diferentes, são elas:`

    for (let book of booksByCategory) {
        textoFinal += `
        Categoria: ${book.category} - ${book.books.length} livros`
    }

    return textoFinal
}

// Contar o número de autores
function contarAutores() {
    let autores = []

    for (let categoria of booksByCategory) {
        for (let book of categoria.books) {
            if (!autores.includes(book.author)) {
                autores.push(book.author)
            }
        }
    }

    return `O número de autores é: ${autores.length}`
}

// Mostrar livros do autor Augusto Cury
function mostrarLivrosdoAugustoCury() {
    let livrosDoAutor = []

    for (let categoria of booksByCategory) {
        for (let book of categoria.books) {
            if (book.author == "Augusto Cury") {
                livrosDoAutor.push(book.title)
            }
        }
    }

    let textoFinal = `Ao todo temos ${livrosDoAutor.length} livros do Augusto Cury, são eles:`
    for (let book of livrosDoAutor) {
        textoFinal += `
        ${livrosDoAutor.indexOf(book) + 1} - ${book}`
    }

    return textoFinal
}

// Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
function mostrarLivrosDoAutor(autor) {
    let livrosDoAutor = []

    for (let categoria of booksByCategory) {
        for (let book of categoria.books) {
            if (book.author == autor) {
                livrosDoAutor.push(book.title)
            }
        }
    }

    let textoFinal = `Ao todo temos ${livrosDoAutor.length} livros do(a) autor(a) ${autor}, são eles:`
    for (let book of livrosDoAutor) {
        textoFinal += `
        ${livrosDoAutor.indexOf(book) + 1} - ${book}`
    }

    return textoFinal
}


console.log(contarCategoriaELivros())
console.log("----------------------------------------------------------------")
console.log(contarAutores())
console.log("----------------------------------------------------------------")
console.log(mostrarLivrosdoAugustoCury())
console.log("----------------------------------------------------------------")
console.log(mostrarLivrosDoAutor("Robert T. Kiyosaki e Sharon L. Lechter"))