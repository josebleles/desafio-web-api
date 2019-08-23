const express = require('express');
const repositorioFake = require('../repo/fake-repo.js');
const middlewares = require('../middleware/middlewares.js');

const rota = express.Router();

// //adiciona um
rota.post('/',middlewares.midNaoExisteProjeto, (rq, rs)=>{
    let projeto = {};
    projeto.id = rq.body.id;
    projeto.title = rq.body.title;
    projeto.tasks = [];
    repositorioFake.push(projeto);
    rs.send(200);
});

//lista todos
rota.get('/', (rq, rs)=>{
    rs.json(repositorioFake);
});

//atualiza um
rota.put('/:id',[middlewares.midExisteProjeto,middlewares.temTitleNoObjeto], (rq, rs)=>{
    repositorioFake.find(projeto => projeto.id == rq.params.id).title = rq.body.title;
    rs.send(200);
});

// //deleta um
rota.delete('/:id',middlewares.midExisteProjeto, (rq, rs)=>{
    repositorioFake.splice(repositorioFake.findIndex(p=>p.id == rq.params.id), 1);
    rs.send(200);
});

//adiciona tasks a um projeto
rota.post('/:id/tasks',[middlewares.midExisteProjeto,middlewares.temTitleNoObjeto], (rq, rs)=>{
    let task = {};
    task.title = rq.body.title;
    repositorioFake.find(proj => proj.id == rq.params.id).tasks.push(task);
    rs.send(200);
});

module.exports = rota;