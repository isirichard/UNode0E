const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let metaSchema = new Schema({
    anio: {
        type: String,
        required: [true, 'El año a gestionar es necesario']
    },
    valor: {
        type: Number,
        required: [true, 'El objetivo es necesario']
    },
    estado: {
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('Meta', metaSchema);