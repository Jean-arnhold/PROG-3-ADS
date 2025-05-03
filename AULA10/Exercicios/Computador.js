class Computador {
    constructor(marca, modelo, processador, memoriaRAM, armazenamento) {
        this.marca = marca;
        this.modelo = modelo;
        this.processador = processador;
        this.memoriaRAM = memoriaRAM;
        this.armazenamento = armazenamento;
    }

    imprimirAtributos() {
        console.log("=== Especificações do Computador ===");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Processador: ${this.processador}`);
        console.log(`Memória RAM: ${this.memoriaRAM}`);
        console.log(`Armazenamento: ${this.armazenamento}`);
        console.log("====================================");
    }
}

module.exports = Computador;