import Computador from "./Computador com EXPORT ES6.js";

// Criando três objetos Computador
const computadores = [
    new Computador("Dell", "XPS 15", "Intel Core i7", "16GB", "512GB SSD"),
    new Computador("Apple", "MacBook Pro", "M1 Pro", "16GB", "1TB SSD"),
    new Computador("HP", "Pavilion", "AMD Ryzen 5", "8GB", "256GB SSD + 1TB HDD")
];

// Executando a função de imprimir para cada computador
computadores.forEach(computador => {
    computador.imprimirAtributos();
});