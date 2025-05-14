//  Não funcionará no navegador pois eles não tem suporte 
// direto a CommonJS modules (apenas ES6 modules)
//
// executar no NodeJS   node .\app.js

const Cachorro = require('./Cachorro.js');
const Pessoa = require('./Pessoa.js');

const c1 = new Cachorro('Lessie','Pastor Alemão',4);
const c2 = new Cachorro('Rex','Border Collie',2);
const p = new Pessoa('Marcos','Machado',50);
p.adicionarCachorro(c1);
p.adicionarCachorro(c2);

console.log('Exemplo em CommonJS:', p);
