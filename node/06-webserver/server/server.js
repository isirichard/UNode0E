//const port = process.env.PORT || 3000;
require('./config/config');
//herencia
require('../hbs/helpers');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const path = require('path');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//importar paquetes
const hbs = require('hbs');

app.use(express.static(path.resolve(__dirname, '../public')));


//Express HBS engine
hbs.registerPartials(path.resolve(__dirname, '../views/parciales'));
//console.log(path.resolve(__dirname, '../views/parciales'));

app.set('view engine', 'hbs');

//configuración global de rutas
app.use(require('./routes/index'));

//Conexión a base de datos
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (err, res) => {
    if (err) {
        console.log('No me conecte');
        throw err;
    }
    console.log('Base de datos ONLINE');
});
mongoose.set('useCreateIndex', true);


app.listen(process.env.PORT, () => {
    console.log(`Escuchando peticiones en el puerto ${process.env.PORT}`);
});