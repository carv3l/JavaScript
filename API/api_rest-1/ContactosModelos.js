var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var ContactoSchema = new Schema({
    nome: String,
    telefone: String,
    tipotelefone: String,
    email: String,
    tipoemail: String,
    endereco: String,
    tipoendereco: String,
    grupos: String,
});

module.exports = mongoose.model('contacto', ContactoSchema);

