const express = require('express');
let app = express();

app.get('/gsti-matriz', (req, res) => {
    res.render('gsti-matriz');
});
app.get('/gsti-indicadores', (req, res) => {
    res.render('gsti-indicadores');
});
app.get('/gsti-mapa', (req, res) => {
    res.render('gsti-mapa');
});

module.exports = app;