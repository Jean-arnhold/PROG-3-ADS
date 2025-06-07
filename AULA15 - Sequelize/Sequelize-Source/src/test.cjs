const Sequelize = require('sequelize');

const connection = new Sequelize('test','root','', {
    dialect: 'mysql',
    host: 'localhost',
});

connection.authenticate().then( () => {
    console.log('OK.');
}).catch( (err) => {
    console.err(err);
});