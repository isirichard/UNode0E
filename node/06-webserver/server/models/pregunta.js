const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let pregunta = new Schema({
    numero: {
        type: Number
        //required: [true, 'El año a gestionar es necesario']
    },
    pregunta: {
        type: String
        //required: [true, 'El objetivo es necesario']
    },
    respuesta: {
        type: String,
        default: true
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Pregunta', pregunta);