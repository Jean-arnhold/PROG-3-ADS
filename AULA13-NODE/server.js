const express = require('express');

const app = express();

// isso aqui é o uso de um middleware
// o middleware é a arrow function
app.use((req, res, next) => {
    console.log("Middleware 1");
    res.setHeader('Content-Type', 'text/html');
    next(); // essa chamada é importante, pois ela diz que o middleware terminou e que o próximo middleware pode ser chamado
});

app.use((req, res, next) => {
    console.log("Middleware 2");
    res.send('<h1>Oi meu chapa!</h1>');
});

app.listen(3000);
console.log('Servidor rodando na porta 3000');



