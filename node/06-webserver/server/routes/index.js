const express = require('express');
let app = express();
//helper
app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    //res.render('home');
    res.render('home', {
        nombre: 'isi'
    });

});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use(require('./pdf'));
app.use(require('./das'));
app.use(require('./io'));

app.get('/gsti-matriz', (req, res) => {
    res.render('gsti-matriz');
});
app.get('/gsti-indicadores', (req, res) => {
    res.render('gsti-indicadores');
});
app.get('/gsti-mapa', (req, res) => {
    res.render('gsti-mapa');
});
app.use(require('./gsti-responsable'));
app.use(require('./gsti-unidadMedida'));
app.use(require('./gsti-matriz'));
app.use(require('./gsti-meta'));
app.use(require('./gsti-tipoObjetivo'));

module.exports = app;