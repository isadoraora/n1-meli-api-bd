const mongoose = require('mongoose');


//schema de alunas
//representação das características do objeto aluna, que será utilizado no model

//Ex. de tipos de valores: String (texto), Number (Numérico), Date (Data), Booleano (Boolean)


const AlunasSchema = new mongoose.Schema({
    nome: { type: String },
    dateOfBirth: { type: String },
    nasceuEmSp: { type: String },
    livros: [{
        _id:false,
        titulo: String,
        leu: String,
    }]
}, {
    versionKey: false
})

//abaixo estamos falando pro mongoose que temos esse model e ele contêm as infos abaixo.
const Alunas = mongoose.model('Alunas', AlunasSchema);
module.exports = Alunas; 




const Alunas = mongoose.model('Alunas', AlunasSchema);

module.exports = Alunas;

//exemplo de schema com campos obrigatórios
//var sampleSchema = new Schema({ name: { type: String, required: true } });

