// Note que TesteFrase (default) não vai entre parênteses
import TesteFrase, { somar, multiplicar } from './misc.js';

const t = new TesteFrase('Olá Mundo!');
t.print();

console.log(somar(1,2));
console.log(multiplicar(3,4));
