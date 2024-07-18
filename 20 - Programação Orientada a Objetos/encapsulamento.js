/*
    Código de cálculo de área estrutural
    let altura = 50
    let largura = 60

    function calcularArea(){
        return altura * largura
    }

    let area = calcularArea()
*/

// Cálculo de área com POO
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }
    
    #calcularArea() { // O sinal de # significa "private"
        return this.altura * this.largura
    }
}

// Criando objeto
let poligono = new Poligono(50, 60)
console.log(poligono.area) // Invocando o get area
// console.log(poligono.#calcularArea()) // Aqui dá erro pois o método é privado, garantindo a segurança