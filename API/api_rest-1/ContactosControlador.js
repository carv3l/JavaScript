var contacto = require('./ContactosModelos');
{
exports.save = function(nome,telefone,tipotelefone,email,tipoemail,endereco,tipoendereco,grupos, callback){
    new contacto({
        'nome': nome,
        'telefone': telefone,
        'tipotelefone': tipotelefone,
        'email': email,
        'tipoemail': tipoemail,
        'endereco': endereco,
        'tipoendereco': tipoendereco,
        'grupos': grupos,
    }).save(function(error, contacto){
        if(error){
            callback({error: 'O Contacto não foi inserido com sucesso'});           
        }else{
            callback(contacto)
        }
    });
}

exports.list = function(callback){
    contacto.find({}, function(error, contacto){
        if(error){
            callback({error: 'O Contacto não se encontra na lista'});
        }else{
            callback(contacto);
        }
    });

}

exports.delete = function(id, callback){
    contacto.findById(id, function(error, contacto){
        if (error){
            callback({error: 'O Contacto não foi apagado com sucesso'}); 
        }else{
            contacto.remove(function(error){
                if(!error){
                    callback({resposta:"Contacto apagado com sucesso"})
                }
            });
        }
    })
}
}
