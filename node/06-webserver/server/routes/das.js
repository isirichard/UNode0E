const express = require('express');
let app = express();

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

app.get('/preguntas', (req, res) => {
    //res.send('Hola Mundo');
    //res.render('home');
    res.render('preguntas',{
        nombre:"yonathab"
    });
});


module.exports = app;