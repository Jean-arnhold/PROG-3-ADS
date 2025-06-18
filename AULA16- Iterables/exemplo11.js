const pessoas = [
    {
        nome: 'Lucas',
        idade: 23,
    },
    {
        nome: 'Maria',
        idade: 19,
    },
    {
        nome: 'Martina',
        idade: 43,
    },
];

// O método forEach recebe como parâmetro
// uma função, cujo parâmetro é o elemento do
// array e seu índice, sendo que este último
// pode ser omitido.
pessoas.forEach( (elemento, indice) => {
    console.log(indice, elemento.nome, elemento.idade);
});
