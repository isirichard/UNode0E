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
app.use(require('./io'));

app.use(require('./gsti'));
app.use(require('./gsti-responsable'));
app.use(require('./gsti-unidadMedida'));
app.use(require('./gsti-matriz'));
app.use(require('./gsti-meta'));
app.use(require('./gsti-tipoObjetivo'));

app.use(require('./das'));
app.use(require('./das-pregunta'));
app.use(require('./das-edu_rnf'));
app.use(require('./das-especificacion'));

module.exports = app;