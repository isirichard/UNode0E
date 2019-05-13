const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let unidadMedidaSchema = new Schema({
    descripcion: {
        type: String,
        unique: true,
        required: [true, 'El objetivo es necesario']
    },
    estado: {
        type: Boolean,
        default: true
    }

});



module.exports = mongoose.model('UnidadMedida', unidadMedidaSchema);