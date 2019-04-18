const express = require('express');
const app = express();
const { descargarPdf } = require('./pdf/pdf');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//importar paquetes
const hbs = require('hbs');
//herencia
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

//helper
app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    //res.render('home');
    res.render('home', {
        nombre: 'isi'
    });

});
app.get('/educcion', (req, res) => {
    //res.send('Hola Mundo');
    //res.render('home');

    res.render('educcion');
});
app.get('/elicitacion', (req, res) => {
    //res.send('Hola Mundo');
    //res.render('home');
    var query = require('url').parse(req.url, true).query;
    res.render('elicitacion', {
        num: query.num
    });
});

app.get('/especificacion', (req, res) => {
    //res.send('Hola Mundo');
    //res.render('home');
    res.render('especificacion');
});


//usando body asd
app.post('/', (req, res) => {
    descargarPdf(req, res);
});

app.get('/about', (req, res) => {
    res.render('about');

});

app.get('/ioperacion', (req, res) => {
    res.render('ioperacion');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
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