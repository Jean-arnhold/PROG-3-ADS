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

// Para encontrar índices de objetos, podemos usar o findIndex, que
// recebe uma função como parâmetro.
// Dentro dessa função fazemos a comparação da(s) propriedade(s).
const maria = pessoas.findIndex( (pessoa) => {
    return pessoa.nome === 'Maria';
});

console.log(maria);