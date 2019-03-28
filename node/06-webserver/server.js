const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//importar paquetes
const hbs = require('hbs');
//herencia
require('./hbs/helpers');
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: false }));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
var path = require('path');
var mime = require('mime');

const fs = require('fs');
var PDFDocument = require('pdfkit');
const blobStream = require('./hbs/blob-stream');
var doc = new PDFDocument;



app.set('view engine', 'hbs');

//helper


app.get('/', (req, res) => {
    //res.send('Hola Mundo');

    res.render('home', {
        nombre: 'Fernando'
    });

});
//usando body asd
app.post('/pdf', (req, res) => {
    var resp1 = '1 ¿Quien usará el sistema? ' + req.body.pre1;
    var resp2 = '2 ¿Habrá varios tipos de usuario? ' + req.body.pre2;
    var resp3 = '3 ¿Cuál es el nivel de habilidad de cada tipo de usuario? ' + req.body.pre3;
    var resp4 = '4 ¿Qué clase de entrenamiento requerirá cada tipo de usuario? ' + req.body.pre4;
    var resp5 = '5 ¿Cuán fácil le será al usuario comprender y utilizar el sistema? ' + req.body.pre5;
    var resp6 = '6 ¿Cuán difícil le resultará al usuario hacer uso indebido del sistema? ' + req.body.pre6;
    var resp7 = '7 ¿Qué hará el sistema? ' + req.body.pre7;
    var resp8 = '8 ¿Cuándo lo hará?: ' + req.body.pre8;
    var resp9 = '9 ¿Cuán difícil le resultará al usuario hacer uso indebido del sistema? ' + req.body.pre9;
    var resp10 = '10 ¿Cómo y cuando puede cambiarse o mejorarse un sistema? ' + req.body.pre10;
    var resp11 = '11 ¿Existen restricciones de la velocidad de ejecución, tiempo de respuesta o rendimiento? ' + req.body.pre11;
    var resp12 = '12 ¿Cuál será el formato de los datos, tanto para la entrada como para la salida? ' + req.body.pre12;
    var resp13 = '13 ¿Cuán a menudo serán recibidos o enviados? ' + req.body.pre13;
    var resp14 = '14 ¿Cuán exactos deben ser? ' + req.body.pre14;
    var resp15 = '15 ¿Con qué grado de precisión deben hacerse los cálculos? ' + req.body.pre15;
    var resp16 = '16 ¿Cuántos datos fluyen a través del sistema? ' + req.body.pre16;
    var resp17 = '17 ¿Debe retenerse algún dato por algún período de tiempo? ' + req.body.pre17;
    var resp18 = '18 ¿Qué recursos materiales, personales o de otro tipo se requieren para construir, utilizar y mantener el sistema? ' + req.body.pre18;
    var resp19 = '19 ¿Qué habilidades deben tener los desarrolladores? ' + req.body.pre19;
    var resp20 = '20 ¿Cuánto espacio físico será ocupado por el sistema? ' + req.body.pre20;
    var resp21 = '21 ¿Cuáles son los requerimientos de energía, calefacción o acondicionamiento de aire? ' + req.body.pre21;
    var resp22 = '22 ¿Existe un cronograma prescrito para el desarrollo? ' + req.body.pre22;
    var resp23 = '23 ¿Existe un límite sobre la cantidad de dinero a gastar en el desarrollo o en hardware y software? ' + req.body.pre23;
    var resp24 = '24 ¿Dónde esta el equipo que el sistema necesita para funcionar? ' + req.body.pre24;
    var resp25 = '25 ¿Existe una localización o varias? ' + req.body.pre25;
    var resp26 = '26 ¿Hay restricciones ambientales como temperatura, humedad o interferencia magnética? ' + req.body.pre26;
    var resp27 = '27 ¿La entrada proviene de uno o más sistemas? ' + req.body.pre27;
    var resp28 = '28 ¿La salida va a uno o más sistemas? ' + req.body.pre28;
    var resp29 = '29 ¿Existe una manera preestablecida en que deben formatearse los datos? ' + req.body.pre29;
    var resp30 = '30 ¿Cuáles son los requerimientos para la confiabilidad, disponibilidad, facilidad de mantenimiento, seguridad y demás atributos de calidad? ' + req.body.pre30;
    var resp31 = '31 ¿Cómo deben demostrarse las características del sistema a terceros? ' + req.body.pre31;
    var resp32 = '32 ¿La salida va a uno o más sistemas? ' + req.body.pre32;
    var resp33 = '33 ¿Cuál es el promedio de tiempo prescrito entre fallas? ' + req.body.pre33;
    var resp34 = '34 ¿Existe un tiempo máximo permitio para la recuperación del sistema después de una falla ? ' + req.body.pre34;
    var resp35 = '35 ¿El mantenimiento corregirá los errores, o incluirá también el mejoramiento del sistema? ' + req.body.pre35;
    var resp36 = '36 ¿Qué medidas de eficiencia se aplicarán al uso de recursos y al tiempo de respuesta? ' + req.body.pre36;
    var resp37 = '37 ¿Cuán fácil debe ser mover el sistema de una ubicación a otra de un tipo de computadora a otro? ' + req.body.pre37;
    var resp38 = '38 ¿Cuán fácil debe ser mover el sistema de una ubicación a otra de un tipo de computadora a otro? ' + req.body.pre38;
    var resp39 = '39 ¿Debe controlarse el acceso al sistema o a la información? ' + req.body.pre39;
    var resp40 = '40 ¿Cómo podrán aislarse los programas de usuario de los otros programas y del sistema operativo? ' + req.body.pre40;
    var resp41 = '41 ¿Con qué frecuencia deben hacerse copias de respaldo? ' + req.body.pre41;
    var resp42 = '42 ¿Las copias de respaldo deben almacenarse en un lugar diferente? ' + req.body.pre42;
    var resp43 = '43 ¿Deben tomarse precauciones contra el fuego, el daño provocado por agua o el robo? ' + req.body.pre43;

    //var stream = doc.pipe(blobStream());
    doc.pipe(fs.createWriteStream('Requerimientos.pdf'));

    // Establecemos un titulo y le pasamos las coordenadas X y Y.

    doc.fontSize(15).text('Requerimientos', 50, 50);
    doc.text('Usuarios y Factores Humanos', {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    // Establecemos la anchura y el tipo de alineación de nuestros parrafos.
    doc.text(resp1, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp2, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp3, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp4, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp5, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp6, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp7, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp8, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp9, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp10, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp11, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp12, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp13, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp14, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp15, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp16, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp17, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp18, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp19, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp20, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp21, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp22, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp23, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp24, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp25, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp26, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp27, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp28, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp29, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp30, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp31, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp32, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp33, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp34, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp35, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp36, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp37, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp38, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp39, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp40, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp41, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp42, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.text(resp43, {
        width: 410, // anchura en px
        align: 'left' // tipo de alineación (left, center, right o justify)
    });

    console.log(resp1);
    doc.end();

    // var data = fs.readFileSync('Requerimientos.pdf');
    // res.contentType("application/pdf");
    // res.send(data)

    var file = __dirname + '/Requerimientos.pdf';

    var filename = path.basename(file);
    var mimetype = mime.lookup(file);

    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
    res.setHeader('Content-type', mimetype);



    var filestream = fs.createReadStream(file);
    filestream.pipe(res);


    // stream.on('finish', function() {
    //     iframe.src = stream.toBlobURL('application/pdf');
    // });




});

app.get('/about', (req, res) => {
    res.render('about');

});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});