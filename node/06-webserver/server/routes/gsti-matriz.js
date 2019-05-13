const express = require('express');
let app = express();
let Matriz = require('../models/matriz');
let Meta = require('../models/meta');
let TipoObjetivo = require('../models/tipoObjetivo');
let Responsable = require('../models/responsable');
let UnidadMedida = require('../models/unidadMedida');

// ======================
// Crear un matriz
// =====================
app.post('/matriz', (req, res) => {
    let body = req.body;
    let matriz = new Matriz({
        tipo: body.tipo,
        objetivo: body.objetivo,
        indicador: body.indicador,
        unidadMedida: body.unidadMedida,
        responsable: body.responsable,
        meta: body.metas

    });

    matriz.save((err, matrizDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!matrizDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.status(201).json({
            ok: true,
            matriz: matrizDB
        });
    });

});


// ======================
// Obtener matriz todos
// =====================
app.get('/matriz', (req, res) => {
    // Trae toos los productos
    // populate: Usuario categoria
    // paginado
    let desde = req.query.desde || 0;
    desde = Number(desde);
    Matriz.find({ estado: true })
        .skip(desde)
        //.limit(5)
        .populate('tipo', 'tipo')
        //.populate('unidadMedida', 'descripcion')
        .populate('responsable', 'cargo')
        .exec((err, matriz) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                matriz: matriz
            });
        })
});

// ======================
// Obtener matriz todos + meta
// =====================
app.post('/matrizPrueba', (req, res) => {
    // Trae toos los productos
    // populate: Usuario categoria
    // paginado
    res.send(req.body);



    // Meta.find({ estado: true })
    //     .populate('matriz', 'tipo objetivo indicador unidadMedida responsable')
    //     .populate({
    //         path: 'matriz',
    //         model: Matriz,
    //         populate: [{
    //             path: 'tipo',
    //             model: TipoObjetivo
    //         }, {
    //             path: 'responsable',
    //             model: Responsable
    //         }, {
    //             path: 'unidadMedida',
    //             model: UnidadMedida
    //         }],
    //     })
    //     .exec((err, meta) => {
    //         if (err) {
    //             return res.status(500).json({
    //                 ok: false,
    //                 err: err
    //             });
    //         }
    //         //console.log(meta[0].matriz.tipo);
    //         res.json({
    //             ok: true,
    //             meta: meta
    //         });
    //     })

});


// ======================
// Obtener un matriz por ID
// =====================
app.get('/matriz/:id', (req, res) => {
    // populate: Usuario categoria
    // paginado

    let id = req.params.id;
    Matriz.findById(id)
        //.populate('usuario', 'nombre email')
        //.populate('categoria', 'descripcion')
        .exec((err, matrizDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!matrizDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'ID no existe'
                    }
                });
            }

            res.json({
                ok: true,
                matriz: matrizDB
            })
        })
});

// ======================
// Buscar matriz
// =====================
app.get('/matriz/buscar/:termino', (req, res) => {
    let termino = req.params.termino;
    let regex = new RegExp(termino, 'i');

    Matriz.find({ objetivo: regex })
        //.populate('categoria', 'nombre')
        .exec((err, matriz) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                matriz: matriz
            })
        })
});



// ======================
// Actualizar un nuevo matriz
// =====================
app.put('/matriz/:id', (req, res) => {
    //console.log(req.body);
    // grabar el usuario
    // grabar una categoria del listado
    let id = req.params.id;

    let body = req.body;
    //console.log(id);
    //console.log(req.params.id);
    Matriz.findById(id, (err, matrizDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'Aqui el error'
                }
            });
        }
        if (!matrizDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        matrizDB.tipo = body.tipo;
        matrizDB.objetivo = body.objetivo;
        matrizDB.indicador = body.indicador;
        matrizDB.unidadMedida = body.unidadMedida;
        matrizDB.responsable = body.responsable;
        matrizDB.estado = true;
        //console.log("entre");
        //console.log(body.metas);
        matrizDB.meta = body.metas;

        matrizDB.save((err, matrizGuardado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err: {
                        message: 'Aqui el error de salida'
                    }
                });
            }

            res.json({
                ok: true,
                matriz: matrizGuardado
            })
        });

    });

});

// ======================
// Borrar un nuevo matriz
// =====================
app.delete('/matriz/:id', (req, res) => {
    let id = req.params.id;
    Matriz.findById(id, (err, matrizDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!matrizDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no existe'
                }

            });
        }

        matrizDB.estado = false;
        matrizDB.save((err, matrizBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }

            res.json({
                ok: true,
                matriz: matrizBorrado,
                mensaje: 'Matriz borrado'
            })
        });

    });
    // grabar el usuario
    // grabar una categoria del listado
    // cambiar el disponible
});


module.exports = app;