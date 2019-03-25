const express = require('express');
const app = express();
//importar paquetes
const hbs = require('hbs');
//herencia
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');




app.set('view engine', 'hbs');

//helpers


app.get('/', (req, res) => {
    //res.send('Hola Mundo');

    res.render('home', {
        nombre: 'Fernando'
    });

});



app.get('/about', (req, res) => {
    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});