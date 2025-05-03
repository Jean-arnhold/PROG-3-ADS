class Pessoa {
    constructor(nome,sobrenome,idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.cachorros = [];
    }

    adicionarCachorro(c) {
        this.cachorros.push(c);
    }
}