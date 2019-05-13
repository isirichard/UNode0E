const express = require('express');
let app = express();
let Meta = require('../models/meta');

// ======================
// Crear un Meta
// =====================
app.post('/meta', (req, res) => {
    let body = req.body;
    let meta = new Meta({
        anio: body.anio,
        valor: body.valor,
    });

    meta.save((err, metaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!metaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            meta: metaDB
        });
    });

});


// ======================
// Obtener meta
// =====================
app.get('/meta', (req, res) => {
    // Trae toos los productos
    // populate: Usuario categoria
    // paginado
    let desde = req.query.desde || 0;
    desde = Number(desde);
    Meta.find({ estado: true })
        .skip(desde)
        .limit(5)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, meta) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                meta: meta
            });
        })
});

// ======================
// Obtener un meta por ID
// =====================
app.get('/meta/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado
    let id = req.params.id;
    Meta.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, metaDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!metaDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                meta: metaDB
            })
        })
});

// ======================
// Buscar meta
// =====================
app.get('/meta/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    Meta.find({ objetivo: regex })
        //.populate('categoria', 'nombre')
        .exec((err, meta) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                meta: meta
            })
        })
});



// ======================
// Actualizar un nuevo meta
// =====================
app.put('/meta/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;

    Meta.findById(id, (err, metaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!metaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        metaDB.anio = body.anio;
        metaDB.valor = body.valor;
        metaDB.estado = body.estado;

        metaDB.save((err, metaGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                meta: metaGuardado
            })
        });

    });

});

// ======================
// Borrar un nuevo meta
// =====================
app.delete('/meta/:id', (req, res) => {
    let id = req.params.id;
    Meta.findById(id, (err, metaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!metaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        metaDB.estado = false;
        metaDB.save((err, metaBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                meta: metaBorrado,
                mensaje: 'meta borrado'
            })
        });

    });
    // grabar el usuario
    // grabar una categoria del listado
    // cambiar el disponible
});


module.exports = app;