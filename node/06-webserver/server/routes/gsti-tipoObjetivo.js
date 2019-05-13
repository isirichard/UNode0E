const express = require('express');
let app = express();
let TipoObjetivo = require('../models/tipoObjetivo');

// ======================
// Crear un tipoObjetivoDB
// =====================
app.post('/tipoObjetivo', (req, res) => {
    let body = req.body;
    let tipoObjetivo = new TipoObjetivo({
        tipo: body.tipo,
    });

    tipoObjetivo.save((err, tipoObjetivoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!tipoObjetivoDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            tipoObjetivo: tipoObjetivoDB
        });
    });

});


// ======================
// Obtener tipoObjetivo
// =====================
app.get('/tipoObjetivo', (req, res) => {
    // Trae toos los productos
    // populate: Usuario categoria
    // paginado
    let desde = req.query.desde || 0;
    desde = Number(desde);
    TipoObjetivo.find({ estado: true })
        .skip(desde)
        .limit(5)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, tipoObjetivo) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                tipoObjetivo: tipoObjetivo
            });
        })
});

// ======================
// Obtener un tipoObjetivo por ID
// =====================
app.get('/tipoObjetivo/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado
    let id = req.params.id;
    TipoObjetivo.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, tipoObjetivoDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!tipoObjetivoDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                tipoObjetivo: tipoObjetivoDB
            })
        })
});

// ======================
// Buscar tipoObjetivo
// =====================
app.get('/tipoObjetivo/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    TipoObjetivo.find({ cargo: regex })
        //.populate('categoria', 'nombre')
        .exec((err, tipoObjetivo) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                tipoObjetivo: tipoObjetivo
            })
        })
});



// ======================
// Actualizar un nuevo tipoObjetivo
// =====================
app.put('/tipoObjetivo/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;

    TipoObjetivo.findById(id, (err, tipoObjetivoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!tipoObjetivoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        tipoObjetivoDB.tipo = body.tipo;
        tipoObjetivoDB.estado = body.estado;

        tipoObjetivoDB.save((err, tipoObjetivoGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                tipoObjetivo: tipoObjetivoGuardado
            })
        });

    });

});

// ======================
// Borrar un nuevo tipoObjetivo
// =====================
app.delete('/tipoObjetivo/:id', (req, res) => {
    let id = req.params.id;
    TipoObjetivo.findById(id, (err, tipoObjetivoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!tipoObjetivoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        tipoObjetivoDB.estado = false;
        tipoObjetivoDB.save((err, tipoObjetivoBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                tipoObjetivo: tipoObjetivoBorrado,
                mensaje: 'tipoObjetivoDB borrado'
            })
        });

    });
    // grabar el usuario
    // grabar una categoria del listado
    // cambiar el disponible
});


module.exports = app;