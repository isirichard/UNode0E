//mongoatlas
//user: isinick
//pass: GMQjGNx54RnVHYlD
//MongoDB URL
//mongodb+srv://isinick:GMQjGNx54RnVHYlD@cluster0-7ewho.mongodb.net/cafe
require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//app.use( fileUpload({ useTempFiles: true }) );

// parse application/json
app.use(bodyParser.json())

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

//console.log(path.resolve(__dirname, '../public'));


//configuración global de rutas
app.use(require('./routes/index'));



mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (err, res) => {
    if (err) {
        console.log('No me conecte');
        throw err;
    }
    console.log('Base de datos ONLINE');
});
mongoose.set('useCreateIndex', true);


app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', process.env.PORT);
});