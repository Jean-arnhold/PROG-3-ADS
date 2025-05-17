const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use((req, res, next) => {
    let info = req.headers.info;
    let num = req.headers.num;

    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;

    let cidade = req.body.cidade;


    res.send(`
        <h1>Dados:</h1>
        <p>Header Param 1: info = ${info}</p>
        <p>Header Param 2: num = ${num}</p>
        <p>Query Param 1: nome = ${nome}</p>
        <p>Query Param 2: sobrenome = ${sobrenome}</p>
        <p>Body: cidade = ${cidade}</p>
  
    `);
});

app.listen(3000);
console.log('Servidor rodando na porta 3000');



