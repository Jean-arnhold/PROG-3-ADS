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

// Para encontrar objetos, podemos usar o find, que
// recebe uma função como parâmetro.
// Dentro dessa função fazemos a comparação da(s) propriedade(s).
const maria = pessoas.find( (pessoa) => {
    return pessoa.nome === 'Maria';
});

console.log(maria);