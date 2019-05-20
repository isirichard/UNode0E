const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let elicitacion = new Schema({
    dependeRF: {
        type: String
    },
    dependeRNF: {
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
    secuenciaN: {
        type: String
    },
    postCondicion: {
        type: String
    },
    excepciones: {
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

module.exports = mongoose.model('Elicitacion', elicitacion);