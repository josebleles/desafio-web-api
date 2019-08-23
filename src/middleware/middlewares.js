const  repositorioFake = require('../repo/fake-repo.js');
 

exports.midExisteProjeto = (rq,rs,proseguir) =>{
    let { id } = rq.params; 
    if(id){
        if(repositorioFake.find(proj =>proj.id == id)){
            proseguir();
        }else{
            rs.json({mensagem: 'Não há nenhum projeto com este id'})    
        }
    }else{
        rs.json({mensagem: 'Paramêtro id não encontrado'});
    }
}

// ---------------------------------------------------------

exports.midNaoExisteProjeto = (rq,rs,proseguir) =>{
    let { id } = rq.body; 
    if(id){
        if(!repositorioFake.find(proj =>proj.id == id)){
            proseguir();
        }else{
            rs.json({mensagem: 'Já existe um projeto com este id'})    
        }
    }else{
        rs.json({mensagem: 'Paramêtro id não encontrado'});
    }
}

// ---------------------------------------------------------

exports.temTitleNoObjeto = (rq,rs,proseguir) =>{
    let { title } = rq.body; 
    if(title){
        proseguir();
    }else{
        rs.json({mensagem: 'Atributo title não encontrado'});
    }
}


// ------------------------------------------------------
exports.midExisteTasks = (rq,rs,proseguir) =>{
    let { id } = rq.params; 
    if(id){
        if(repositorioFake.find(proj =>proj.id == id)){
            proseguir();
        }else{
            rs.json({mensagem: 'Paramêtro id não encontrado'})    
        }
    }else{
        rs.json({mensagem: 'Paramêtro id não encontrado'});
    }
}

//-------------------------------------
var contador = 0;
exports.contaRequest = (rq,rs,proseguir) => {
    console.log(++contador); 
    proseguir();
}
