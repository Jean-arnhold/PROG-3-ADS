const a1 = [1, 2, 3, 4, 5];

// O primeiro parâmetro é o índice inicial (inclusive)
// O segundo parâmetro é o índice final (exclusivo)
const a2 =  a1.slice(2,4);

console.log('a1', a1);
console.log('a2', a2);

// Ao passar um número negativo, pegamos os -x últimos
const a3 = a1.slice(-2);
console.log(a3);