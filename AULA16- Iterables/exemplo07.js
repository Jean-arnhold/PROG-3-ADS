const a1 = [1, 2, 3, 2, 3, 2, 3, 1];

// Retorna o índice do primeiro "3" encontrado.
console.log('First Index of 3: ', a1.indexOf(3));

// Retorna o último do primeiro "3" encontrado.
console.log('Last Index of 3: ', a1.lastIndexOf(3));

// Quando um elemento não for encontrado, será retornado -1
console.log('O 5 não será encontrado: ', a1.indexOf(5));
