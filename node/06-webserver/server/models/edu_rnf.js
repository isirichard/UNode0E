const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let edu_rnf = new Schema({
    depende: {
        type: String
        //required: [true, 'El año a gestionar es necesario']
    },
    genera: {
        type: String
        //required: [true, 'El objetivo es necesario']
    },
    version: {
        type: Number
        //default: true
    },
    autor: {
        type: String
        //default: true
    },
    fuentes: {
        type: String
        //default: true
    },
    descripcion: {
        type: String
        //default: true
    },
    importancia: {
        type: String
        //default: true
    },
    tipo_requerimientos: {
        type: String
        //default: true
    },
    comentarios: {
        type: String
        //default: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    

});

module.exports = mongoose.model('Edu_rnf', edu_rnf);