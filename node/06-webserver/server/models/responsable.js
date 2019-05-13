const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let responsableSchema = new Schema({
    cargo: {
        type: String,
        unique: true,
        required: [true, 'El objetivo es necesario']
    },
    estado: {
        type: Boolean,
        default: true
    }

});



module.exports = mongoose.model('Responsable', responsableSchema);