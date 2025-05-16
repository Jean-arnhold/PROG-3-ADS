const http = require('http');
const { JSON } = require('stream/consumers');

const server = http.createServer( (req, res) => {

   let cidade = {
      nome: 'Feliz',
      estado: 'RS',
      pais: 'Brasil',
      populacao: 10000,
      pontosTuristicos: [
         'Praça Central',
         'Igreja Matriz',
         'Parque Natural'
      ],
      clima: 'Temperado',
      temperatura: {
         min: 10,
         max: 25
      }

   }
   

   // console.log(req.url, req.method, req.headers);

   res.write( JSON.stringify(cidade) );
   res.end();
})

server.listen(3000);
console.log('Servidor rodando na porta 3000');
