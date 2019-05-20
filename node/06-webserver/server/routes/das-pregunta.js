const express = require('express');
let app = express();
let Pregunta = require('../models/pregunta');

// ======================
// Crear una nueva pregunta
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

// ======================
// Obtener meta
// =====================
app.get('/pregunta', (req, res) => {
    // Trae todas las preguntas
    // let desde = req.query.desde || 0;
    // desde = Number(desde);
    Pregunta.find({ estado: true })
        // .skip(desde)
        // .limit(5)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        //populate -> cuando relacionamos tablas
        .exec((err, pregunta) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                pregunta: pregunta
            });
        })
});

// ======================
// Borrar una nueva pregunta
// =====================
app.delete('/pregunta/:id', (req, res) => {
    let id = req.params.id;
    Pregunta.findById(id, (err, preguntaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!preguntaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        preguntaDB.estado = false;
        preguntaDB.save((err, preguntaBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                pregunta: preguntaBorrado,
                mensaje: 'pregunta borrado'
            })
        });

    });
  
});
// ======================
// Obtener un pregunta por ID
// =====================
app.get('/pregunta/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado
    let id = req.params.id;
    Pregunta.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, preguntaDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!preguntaDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                pregunta: preguntaDB
            })
        })
});
// ======================
// Buscar Pregunta
// =====================
app.get('/pregunta/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    Pregunta.find({ pregunta: regex })
        //.populate('categoria', 'nombre')
        .exec((err, pregunta) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                pregunta: pregunta
            })
        })
});


// ======================
// Actualizar una nueva pregunta
// =====================
app.put('/pregunta/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;

    Pregunta.findById(id, (err, preguntaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!preguntaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        preguntaDB.numero = body.numero;
        preguntaDB.pregunta = body.pregunta;
        preguntaDB.respuesta = body.respuesta;
        preguntaDB.estado = body.estado;

        preguntaDB.save((err, preguntaGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                pregunta: preguntaGuardado
            })
        });

    });

});


module.exports = app;