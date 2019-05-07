var app = require('./App_Configuracao');
var Base = require('./BaseDados_Configuracao');
var contacto = require('./ContactosModelos')
var contactocontrolador = require('./ContactosControlador');

app.get('/',function(request, response){
    response.sendfile('contactoInterface.html');
});


//route
app.get('/contacto',function(req, res){
    contactocontrolador.list(function(resp){
        res.json(resp);
    })
});

app.post('/registo',function(req, res){
    var nome = req.body.nome;
    var telefone = req.body.telefone;
    var tipotelefone = req.body.tipotelefone;
    var email = req.body.email;
    var tipoemail = req.body.tipoemail;
    var endereco = req.body.endereco;
    var tipoendereco = req.body.tipoendereco;
    var grupos = req.body.grupos;

    contactocontrolador.save(nome,telefone,tipotelefone,email,tipoemail,endereco,tipoendereco,grupos, function(resp){
        res.json(resp);
    });

});

app.delete('/eliminar/:id', function(req, res){
    var id = req.params.id;
    
    contactocontrolador.delete(id, function(resp){
        res.json(resp);
    });
});
