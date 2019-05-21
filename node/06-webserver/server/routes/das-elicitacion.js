const express = require('express');
let app = express();
let Elicitacion = require('../models/elicitacion');

// ======================
// Crear una elicitacion
// =====================
app.post('/elicitacion', (req, res) => {
    let body = req.body;
    let elicitacion = new Elicitacion({
        dependeRF: body.dependeRF,
        dependeRNF: body.dependeRNF,
        genera: body.genera,
        version: body.version,
        autor: body.autor,
        fuente: body.fuente,
        descripcion: body.descripcion,
        secuenciaN: body.secuenciaN,
        postCondicion: body.postCondicion,
        excepciones: body.excepciones,
        comentarios: body.comentarios
    });

    elicitacion.save((err, elicitacionDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!elicitacionDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            elicitacion: elicitacionDB
        });
    });

});

// ======================
// Obtener elicitacion todos
// =====================
app.get('/elicitaciones', (req, res) => {
    // Trae todos los productos
    // populate: Usuario categoria
    // paginado
    //let desde = req.query.desde || 0;
    //desde = Number(desde);
    Elicitacion.find({ estado: true })
        //.skip(desde)
        //.limit(5)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, elicitacion) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                meta: elicitacion
            });
        })
});

// ======================
// Obtener un elicitacion por ID
// =====================
app.get('/elicitacion/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado
    let id = req.params.id;
    Elicitacion.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, elicitacionDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!elicitacionDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                elicitacion: elicitacionDB
            })
        })
});

// ======================
// Buscar elicitacion
// =====================
app.get('/elicitacion/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    Elicitacion.find({ objetivo: regex })
        //.populate('categoria', 'nombre')
        .exec((err, elicitacion) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                elicitacion: elicitacion
            })
        })
});



// ======================
// Actualizar un nuevo elicitacion
// =====================
app.put('/elicitacion/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;

    Elicitacion.findById(id, (err, elicitacionDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!elicitacionDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        elicitacionDB.dependeRF = body.dependeRF;
        elicitacionDB.dependeRNF = body.dependeRNF;
        elicitacionDB.genera = body.genera;
        elicitacionDB.version = body.version;
        elicitacionDB.autor = body.autor;
        elicitacionDB.fuente = body.fuente;
        elicitacionDB.descripcion = body.descripcion;
        elicitacionDB.secuenciaN = body.secuenciaN;
        elicitacionDB.postCondicion = body.postCondicion;
        elicitacionDB.excepciones = body.excepciones;
        elicitacionDB.comentarios = body.comentarios;

        elicitacionDB.save((err, elicitacionGuardada) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                elicitacion: elicitacionGuardada
            })
        });

    });

});

// ======================
// Borrar un nuevo meta
// =====================
app.delete('/elicitacion/:id', (req, res) => {
    let id = req.params.id;
    Elicitacion.findById(id, (err, elicitacionDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!elicitacionDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        elicitacionDB.estado = false;
        elicitacionDB.save((err, elicitacionBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                especificacion: elicitacionBorrado,
                mensaje: 'elicitacion borrado'
            })
        });

    });
    // grabar el usuario
    // grabar una categoria del listado
    // cambiar el disponible
});

module.exports = app;