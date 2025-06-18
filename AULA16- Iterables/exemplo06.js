const a1 = [1, 2, 3];
const a2 = a1;

// Note que a2 é uma referência para a1.
a2.push(666);
console.log('a1', a1);
console.log('a2', a2);

// Podemos copiar um array com slice().
// Trata-se de uma cópia e não uma referência.
const a3 = a1.slice();
a3.push(2112);
console.log('a1', a1);
console.log('a3', a3);