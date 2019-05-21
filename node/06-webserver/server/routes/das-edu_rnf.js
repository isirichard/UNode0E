const express = require('express');
let app = express();
let Edu_rnf = require('../models/edu_rnf');

// ======================
// Crear un nuevo edu_rnf
// =====================
app.post('/edu_rnf', (req, res) => {
    let body = req.body;
    let edu_rnf = new Edu_rnf({
        depende: body.depende,
        genera: body.genera,
        version: body.version,
        autor: body.autor,
        fuentes: body.fuentes,
        descripcion: body.descripcion,
        importancia:body.importancia,
        tipo_requerimientos:body.tipo_requerimientos,
        comentarios: body.comentarios,
        estado: body.estado,
    });
    edu_rnf.save((err, edu_rnfDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!edu_rnfDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            edu_rnf: edu_rnfDB
        });
    });

});

// ======================
// Obtener edu_rnf
// =====================
app.get('/edu_rnf', (req, res) => {
    // Trae todas las preguntas
    // let desde = req.query.desde || 0;
    // desde = Number(desde);
    Edu_rnf.find({ estado: true })
        // .skip(desde)
        // .limit(5)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        //populate -> cuando relacionamos tablas
        .exec((err, edu_rnf) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                edu_rnf: edu_rnf
            });
        })
});
// ======================
// Borrar un edu_rnf
// =====================
app.delete('/edu_rnf/:id', (req, res) => {
    let id = req.params.id;
    Edu_rnf.findById(id, (err, edu_rnfDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!edu_rnfDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        edu_rnfDB.estado = false;
        edu_rnfDB.save((err, edu_rnfBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                edu_rnf: edu_rnfBorrado,
                mensaje: 'Requisito no Funcional borrado'
            })
        });

    });
  
});
// ======================
// Obtener un rnf por ID
// =====================
app.get('/edu_rnf/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado
    let id = req.params.id;
    Edu_rnf.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, edu_rnfDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!edu_rnfDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                edu_rnf: edu_rnfDB
            })
        })
});
// ======================
// Buscar edu_rnf termino
// =====================
app.get('/edu_rnf/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    Edu_rnf.find({ edu_rnf: regex })
        //.populate('categoria', 'nombre')
        .exec((err, edu_rnf) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                edu_rnf: edu_rnf
            })
        })
});
// ======================
// Actualizar un nuevo rnf
// =====================
app.put('/edu_rnf/:id', (req, res) => {
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;
    let body = req.body;

    Edu_rnf.findById(id, (err, edu_rnfDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!edu_rnfDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        edu_rnfDB.depende = body.depende;
        edu_rnfDB.genera = body.genera;
        edu_rnfDB.version = body.version;
        edu_rnfDB.autor = body.autor;
        edu_rnfDB.fuentes=body.fuentes;
        edu_rnfDB.descripcion=body.descripcion;
        edu_rnfDB.importancia=body.importancia;
        edu_rnfDB.tipo_requerimientos=body.tipo_requerimientos;
        edu_rnfDB.comentarios=body.comentarios;
        edu_rnfDB.estado=body.estado;

        edu_rnfDB.save((err, edu_rnfGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                edu_rnf: edu_rnfGuardado
            })
        });

    });

});
module.exports = app;