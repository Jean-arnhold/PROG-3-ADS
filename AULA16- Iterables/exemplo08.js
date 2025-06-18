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

// O indexOf não funcionará pois se tratam de objetos diferentes.
// Apenas os valores das propriedades são iguais.
console.log( pessoas.indexOf(
    {
        nome: 'Lucas',
        idade: 23,
    }
));