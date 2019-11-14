const mongoose = require('mongoose');

const AlunasSchema = new mongoose.Schema({
    nome: { type: String },
    dateOfBirth: { type: String },
    nasceuEmSp: { type: String },
    livros: [{
        titulo: String,
        leu: String,
    }]
})

//abaixo estamos falando pro mongoose que temos esse model e ele contêm as infos abaixo.
const Alunas = mongoose.model('Alunas', AlunasSchema);
module.exports = Alunas; 