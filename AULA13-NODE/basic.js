const http = require('http');

const server = http.createServer( (req, res) => {


   // console.log(req.url, req.method, req.headers);

   res.write('Ola, dentro do HTML');
   res.end();
})

server.listen(3000);
console.log('Servidor rodando na porta 3000');
