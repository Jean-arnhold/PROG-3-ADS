// let pessoa = {
//     nome: 'Maria',
//     idade: 34,
//     endereco: {
//         rua: 'Rua ABC',
//         numero: 213,
//         cidade: 'Feliz',

//     }
// }

// //let nome = pessoa.nome;

// let { nome } = 'Joana';
// let { nome } = nome: nome2;
// let { idade } = pessoa;
// let { rua, numero, cidade } = pessoa.endereco;

// console.log(nome, idade, rua, numero, cidade);

let carro = {
    marca: {
        nome: 'ford',
        pais: 'EUA',
    },

    modelo: {
        nome: 'Ranger',
        serie: 'XLT',
    },

    ano: 2020,
}

// let nomeMarca = carro.marca.nome;
// let pais = carro.marca.pais;
// let nomeModelo = carro.modelo.nome;
// let serie = carro.modelo.serie;
// let ano = carro.ano;

let {nome: nomeMarca, pais} = carro.marca;
let {nome: nomeModelo, serie} = carro.modelo;
let {ano} = carro;

let numeros = {
    0: 'feliz',
    1.5: 'Maratá',
    2: 'Vale Real',
};

console.log(numeros[0]);
console.log(numeros[1.5]);
console.log(numeros[2]);


