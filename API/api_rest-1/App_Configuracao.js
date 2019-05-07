const express = require('express');
var bodyParser = require('body-parser');
var port = '8080';
const mongoose =require('mongoose');
var app = module.exports = express();


mongoose.connect('mongodb://JoaoP:qwerty123@ds155714.mlab.com:55714/listacontactos');
mongoose.connection.once('open', () => {
        console.log("A conexão à Base de Dados foi bem sucedida")
});

app.listen(port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
    next();
})
