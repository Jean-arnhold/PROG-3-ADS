let carro = new Object();

carro.marca = "Honda";
carro.modelo = "Civic";
carro.ano = 2010;
carro.ligado = false;

for (const prop in carro) {
    console.log(prop, carro[prop]);
}

Object.keys(carro).forEach(item => {
    console.log(item, carro[item]);
});

let prop1 = 'nome-completo';
let prop2 = 'data-de-nascimento';

let pessoa = {
    [prop1]: 'maria',
    [prop2]: '12/12/1990',
}

console.log(pessoa[prop1]);
console.log(pessoa[prop2]);

let rua = 'Rua Voluntarios 123';
let cep = '95765-000';
let cidade = 'Bom princípio';
let estado = 'RS';

let endereco = {
    rua,
    cep,
    cidade,
    estado,

}

let cliente = {
    nome: 'Joaquim',
    endereco,
}

let e1 = cliente.endereco.estado;

let r1 = cliente.endereco.rua;

console.log(e1, r1);

console.log(cliente);

console.log(endereco);