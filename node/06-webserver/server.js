const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'))

//Express HBS engine
app.set('view engine', 'hbs');

// app.get('/', (req, res) => {
//     //res.send('Hola Mundo');
//     let salida = {
//         nombre: 'fernando',
//         edad: 32,
//         url: req.url
//     };
//     res.send(salida);

// });

// app.get('/data', (req, res) => {
//     res.send('Hola data');

// });

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});