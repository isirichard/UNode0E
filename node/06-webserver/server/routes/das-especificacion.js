const express = require('express');
let app = express();
let Especificacion = require('../models/especificacion');

// ======================
// Crear una especificación
// =====================
app.post('/especificacion', (req, res) => {
    let body = req.body;
    let especificacion = new Especificacion({
        depende: body.depende,
        genera: body.genera,
        version: body.version,
        autor: body.autor,
        fuente: body.fuente,
        descripcion: body.descripcion,
        relaciona: body.relaciona,
        comentarios: body.comentarios
    });

    especificacion.save((err, especificacionDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!especificacionDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            especificacion: especificacionDB
        });
    });

});

// ======================
// Obtener especificacion todos
// =====================
app.get('/especificaciones', (req, res) => {
    // Trae todos los productos
    // populate: Usuario categoria
    // paginado
    //let desde = req.query.desde || 0;
    //desde = Number(desde);
    Especificacion.find({ estado: true })
        //.skip(desde)
        //.limit(5)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, especificacion) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                meta: especificacion
            });
        })
});

// ======================
// Obtener un especificacion por ID
// =====================
app.get('/especificacion/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado
    let id = req.params.id;
    Especificacion.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, especificacionDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!especificacionDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                especificacion: especificacionDB
            })
        })
});

// ======================
// Buscar especificacion
// =====================
app.get('/especificacion/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    Especificacion.find({ objetivo: regex })
        //.populate('categoria', 'nombre')
        .exec((err, especificacion) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                especificacion: especificacion
            })
        })
});



// ======================
// Actualizar un nuevo especificacion
// =====================
app.put('/especificacion/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;

    Especificacion.findById(id, (err, especificacionDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!especificacionDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        especificacionDB.depende = body.depende;
        especificacionDB.genera = body.genera;
        especificacionDB.version = body.version;
        especificacionDB.autor = body.autor;
        especificacionDB.fuente = body.fuente;
        especificacionDB.descripcion = body.descripcion;
        especificacionDB.relaciona = body.relaciona;
        especificacionDB.comentarios = body.comentarios;

        especificacionDB.save((err, especificacionGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                especificacion: especificacionGuardado
            })
        });

    });

});

// ======================
// Borrar un nuevo meta
// =====================
app.delete('/especificacion/:id', (req, res) => {
    let id = req.params.id;
    Especificacion.findById(id, (err, especificacionDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!especificacionDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        especificacionDB.estado = false;
        especificacionDB.save((err, especificacionBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                especificacion: especificacionBorrado,
                mensaje: 'especificacion borrado'
            })
        });

    });
    // grabar el usuario
    // grabar una categoria del listado
    // cambiar el disponible
});

module.exports = app;