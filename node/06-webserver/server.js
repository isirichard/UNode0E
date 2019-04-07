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

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});