//  Não funcionará no navegador pois eles não tem suporte 
// direto a CommonJS modules (apenas ES6 modules)
//
// executar no NodeJS   node .\app.js

const f = require('./functions.js');
const {somar, multiplicar} = require('./functions.js');

console.log( f.somar(10,20), f.multiplicar(10,20) );
console.log( somar(10,20), multiplicar(10,20) );


// require pode ser colocado dentro de um if
// if(1 === 1) { const x = require(...); ... }