//mongoatlas
//user: isinick
//pass: GMQjGNx54RnVHYlD
//MongoDB URL
//mongodb+srv://isinick:GMQjGNx54RnVHYlD@cluster0-7ewho.mongodb.net/cafe
require('./config/config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
    //configuración global de rutas
app.use(require('./routes/index'));



mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});