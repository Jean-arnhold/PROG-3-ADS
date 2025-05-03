import { Cachorro } from './Cachorro.js';
import { Pessoa } from './Pessoa.js';

const c1 = new Cachorro('Lessie','Pastor Alemão',4);
const c2 = new Cachorro('Rex','Border Collie',2);

const p = new Pessoa('Marcos','Machado',50);
p.adicionarCachorro(c1);
p.adicionarCachorro(c2);

console.log('Exemplo com ES6:', p);
