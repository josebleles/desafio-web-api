const express = require('express');
const middlewares = require('./middleware/middlewares.js');
const rota = require('./routes/projeto-tarefa.js');

const servidor = express();

servidor.use(express.json());

servidor.use(middlewares.contaRequest);

servidor.use('/projects',rota);


servidor.listen(8080, ()=>{
    console.log("servidor iniciado!!! :)");
});