const mongoose = require('mongoose');
let Meta = require('../models/meta');
let Schema = mongoose.Schema;

let metaSchema = new Meta();

let matrizSchema = new Schema({
    tipo: {
        type: Schema.Types.ObjectId,
        required: [true, 'El tipo es necesario'],
        ref: 'TipoObjetivo'
    },
    objetivo: {
        type: String,
        required: [true, 'El objetivo es necesario']
    },
    indicador: {
        type: String,
        unique: true,
        required: [true, 'El indicador es necesario']
    },
    unidadMedida: {
        type: String
    },
    responsable: {
        type: Schema.Types.ObjectId,
        ref: 'Responsable'
    },
    meta: {
        type: Array,
        "default": []
    },

    estado: {
        type: Boolean,
        default: true
    }
});



module.exports = mongoose.model('Matriz', matrizSchema);