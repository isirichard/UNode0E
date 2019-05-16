const express = require('express');
let app = express();
let Pregunta = require('../models/pregunta');

// ======================
// Crear un Meta
// =====================
app.post('/pregunta', (req, res) => {
    let body = req.body;
    let pregunta = new Pregunta({
        numero: body.numero,
        pregunta: body.pregunta,
        respuesta: body.respuesta,
        
    });

    pregunta.save((err, preguntaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!preguntaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            pregunta: preguntaDB
        });
    });

});



module.exports = app;