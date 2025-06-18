// No exemplo abaixo, o array de Strings é transformado
// em um array de objetos.
const produtosString = [
    'Mochila 110.50', 
    'Caneta 7.30', 
    'Borracha 5.10' 
];

// map() retorna uma array transformado (mapeado).
// O return da função é que define o novo formato de cada elemento.
const produtos = produtosString.map( (elemento, indice) => {
    const nomePreco = elemento.split(' ');
    const nome = nomePreco[0];
    const preco = parseFloat(nomePreco[1]);

    const p = {
        indice,
        nome,
        preco,
    };

    return p;
})

console.log(produtos);