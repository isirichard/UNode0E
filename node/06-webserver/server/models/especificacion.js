const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let especificacion = new Schema({
    depende: {
        type: String
    },
    genera: {
        type: String
    },
    version: {
        type: Number,
        default: 1.0
    },
    autor: {
        type: String
    },
    fuente: {
        type: String
    },
    descripcion: {
        type: String
    },
    relaciona: {
        type: String
    },
    comentarios: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Especificacion', especificacion);