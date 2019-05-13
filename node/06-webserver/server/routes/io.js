const express = require('express');
let app = express();
app.get('/ioperacion', (req, res) => {
    res.render('ioperacion');
});

app.post('/solver', (req, res) => {
    let body = req.body;
    console.log(body);
    var javascriptLpSolver = require("javascript-lp-solver"),
        results,
        model = {
            "optimize": "ganancia",
            "opType": "max",
            "constraints": {
                "conCafe": { "max": body.rf1 }, //120
                "sinCafe": { "max": body.rf2 } //180
            },
            "variables": {
                "TipoA": {
                    "ganancia": body.z1, //6
                    "conCafe": body.r11, //3
                    "sinCafe": body.r21 //3
                },
                "TipoB": {
                    "ganancia": body.z2, //5
                    "conCafe": body.r12, //2
                    "sinCafe": body.r22 //4
                },

            }
        };
    results = javascriptLpSolver.Solve(model);

    console.log(results);

    res.send(results);

});


module.exports = app;