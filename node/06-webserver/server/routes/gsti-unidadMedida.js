const express = require('express');
let app = express();
let UnidadMedida = require('../models/unidadMedida');

// ======================
// Crear un unidadMedida
// =====================
app.post('/unidadMedida', (req, res) => {
    let body = req.body;
    let unidadMedida = new UnidadMedida({
        descripcion: body.descripcion,
    });

    unidadMedida.save((err, unidadMedidaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!unidadMedidaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            unidadMedida: unidadMedidaDB
        });
    });

});


// ======================
// Obtener unidadMedidas
// =====================
app.get('/unidadMedida', (req, res) => {
    // Trae toos los productos
    // populate: Usuario categoria
    // paginado
    let desde = req.query.desde || 0;
    desde = Number(desde);
    UnidadMedida.find({ estado: true })
        .skip(desde)
        .limit(5)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, unidadMedida) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                unidadMedida: unidadMedida
            });
        })
});

// ======================
// Obtener un unidadMedida por ID
// =====================
app.get('/unidadMedida/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado
    let id = req.params.id;
    UnidadMedida.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, unidadMedidaDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!unidadMedidaDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                unidadMedida: unidadMedidaDB
            })
        })
});

// ======================
// Buscar unidadMedida
// =====================
app.get('/unidadMedida/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    UnidadMedida.find({ descripcion: regex })
        //.populate('categoria', 'nombre')
        .exec((err, unidadMedida) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                unidadMedida
            })
        })
});



// ======================
// Actualizar un nuevo unidadMedida
// =====================
app.put('/unidadMedida/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;

    UnidadMedida.findById(id, (err, unidadMedidaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!unidadMedidaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        unidadMedidaDB.descripcion = body.descripcion;
        unidadMedidaDB.estado = body.estado;

        unidadMedidaDB.save((err, unidadMedidaGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                unidadMedida: unidadMedidaGuardado
            })
        });

    });

});

// ======================
// Borrar un nuevo responsable
// =====================
app.delete('/responsable/:id', (req, res) => {
    let id = req.params.id;
    UnidadMedida.findById(id, (err, unidadMedidaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!unidadMedidaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        unidadMedidaDB.estado = false;
        unidadMedidaDB.save((err, unidadMedidaBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                unidadMedida: unidadMedidaBorrado,
                mensaje: 'UnidadMedida borrado'
            })
        });

    });
    // grabar el usuario
    // grabar una categoria del listado
    // cambiar el disponible
});


module.exports = app;