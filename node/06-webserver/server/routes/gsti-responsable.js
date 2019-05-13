const express = require('express');
let app = express();
let Responsable = require('../models/responsable');

// ======================
// Crear un Responsable
// =====================
app.post('/responsable', (req, res) => {
    let body = req.body;
    let responsable = new Responsable({
        cargo: body.cargo,
    });

    responsable.save((err, responsableDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!responsableDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            responsable: responsableDB
        });
    });

});


// ======================
// Obtener responsables
// =====================
app.get('/responsable', (req, res) => {
    // Trae toos los productos
    // populate: Usuario categoria
    // paginado
    let desde = req.query.desde || 0;
    desde = Number(desde);
    Responsable.find({ estado: true }).sort({ cargo: 1 })
        .skip(desde)
        //.limit(5)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, responsable) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                responsable
            });
        })
});

// ======================
// Obtener un reponsable por ID
// =====================
app.get('/responsable/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado
    let id = req.params.id;
    Responsable.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, responsableDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!responsableDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                responsable: responsableDB
            })
        })
});

// ======================
// Buscar responsables
// =====================
app.get('/responsable/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    Responsable.find({ cargo: regex })
        //.populate('categoria', 'nombre')
        .exec((err, responsable) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                responsable
            })
        })
});



// ======================
// Actualizar un nuevo responsable
// =====================
app.put('/responsable/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;

    Responsable.findById(id, (err, responsableDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!responsableDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        responsableDB.cargo = body.cargo;
        responsableDB.estado = body.estado;

        responsableDB.save((err, responsableGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                responsable: responsableGuardado
            })
        });

    });

});

// ======================
// Borrar un nuevo responsable
// =====================
app.delete('/responsable/:id', (req, res) => {
    let id = req.params.id;
    Responsable.findById(id, (err, responsableDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!responsableDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        responsableDB.estado = false;
        responsableDB.save((err, responsableBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                responsable: responsableBorrado,
                mensaje: 'Responsable borrado'
            })
        });

    });
    // grabar el usuario
    // grabar una categoria del listado
    // cambiar el disponible
});


module.exports = app;