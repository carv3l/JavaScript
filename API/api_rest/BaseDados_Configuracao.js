var mongoose = require('mongoose');

var urlString = 'mongodb://JoaoP:qwerty123@ds155714.mlab.com:55714/listacontactos';

//var urlString = 'mongodb://localhost/API';

mongoose.connect(urlString, function(err, res){
    if(err){
        console.log('Não foi possível a conexão a:' + urlString);
    }
    else{
        console.log('Conexão bem sucedida a:' + urlString);
    }
});