const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let tipoObjetivoSchema = new Schema({
    tipo: {
        type: String,
        unique: true,
        required: [true, 'El tipo objetivo es necesario']
    },
    estado: {
        type: Boolean,
        default: true
    }

});



module.exports = mongoose.model('TipoObjetivo', tipoObjetivoSchema);