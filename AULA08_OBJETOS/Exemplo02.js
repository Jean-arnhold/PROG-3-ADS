let pessoa = {
    nome: "Jean",
    idade: 20,
    cidade: "Bom Princípio",

    imprimir: function() {
        console.log(`${this.nome} tem ${this.idade} anos e mora em ${this.cidade}`);
    },

    aniversario: function() {
        this.idade++
    }
};

console.log(pessoa.nome, pessoa.idade, pessoa.cidade);

console.log(pessoa["nome"]);
console.log(pessoa["idade"]);
console.log(pessoa["cidade"]);

console.log(`Interpolação:  ${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}`);

pessoa.imprimir();
pessoa.aniversario();

pessoa.endereco = "Rua ABC 123";
pessoa.cpf = "000011222-33";

delete pessoa.cidade;
console.log(pessoa);
console.log(pessoa.cidade); 