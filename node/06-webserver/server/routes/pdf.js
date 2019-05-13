const express = require('express');
const { descargarPdf } = require('../../pdfkit/pdf');
let app = express();
//usando body asd
app.post('/', (req, res) => {
    descargarPdf(req, res);
});
module.exports = app;