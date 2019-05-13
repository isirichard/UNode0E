const fs = require('fs');
var PDFDocument = require('pdfkit');
let descargarPdf = (req, res) => {
    var doc = new PDFDocument({
        size: [
            595.28, 841.89 //A4
        ],
        margin: 1
    });

    var resp1 = '1 ¿Quien usará el sistema?';
    var resp2 = '2 ¿Habrá varios tipos de usuario?';
    var resp3 = '3 ¿Cuál es el nivel de habilidad de cada tipo de usuario?';
    var resp4 = '4 ¿Qué clase de entrenamiento requerirá cada tipo de usuario?';
    var resp5 = '5 ¿Cuán fácil le será al usuario comprender y utilizar el sistema?';
    var resp6 = '6 ¿Cuán difícil le resultará al usuario hacer uso indebido del sistema?';
    var resp7 = '7 ¿Qué hará el sistema? ';
    var resp8 = '8 ¿Cuándo lo hará?: ';
    var resp9 = '9 ¿Existen varios modos de operación? ';
    var resp10 = '10 ¿Cómo y cuando puede cambiarse o mejorarse un sistema? ';
    var resp11 = '11 ¿Existen restricciones de la velocidad de ejecución, tiempo de respuesta o rendimiento? ';
    var resp12 = '12 ¿Cuál será el formato de los datos, tanto para la entrada como para la salida? ';
    var resp13 = '13 ¿Cuán a menudo serán recibidos o enviados? ';
    var resp14 = '14 ¿Cuán exactos deben ser? ';
    var resp15 = '15 ¿Con qué grado de precisión deben hacerse los cálculos? ';
    var resp16 = '16 ¿Cuántos datos fluyen a través del sistema? ';
    var resp17 = '17 ¿Debe retenerse algún dato por algún período de tiempo? ';
    var resp18 = '18 ¿Qué recursos materiales, personales o de otro tipo se requieren para construir, utilizar y mantener el sistema? ';
    var resp19 = '19 ¿Qué habilidades deben tener los desarrolladores? ';
    var resp20 = '20 ¿Cuánto espacio físico será ocupado por el sistema? ';
    var resp21 = '21 ¿Cuáles son los requerimientos de energía, calefacción o acondicionamiento de aire? ';
    var resp22 = '22 ¿Existe un cronograma prescrito para el desarrollo? ';
    var resp23 = '23 ¿Existe un límite sobre la cantidad de dinero a gastar en el desarrollo o en hardware y software? ';
    var resp24 = '24 ¿Dónde esta el equipo que el sistema necesita para funcionar? ';
    var resp25 = '25 ¿Existe una localización o varias? ';
    var resp26 = '26 ¿Hay restricciones ambientales como temperatura, humedad o interferencia magnética? ';
    var resp27 = '27 ¿La entrada proviene de uno o más sistemas? ';
    var resp28 = '28 ¿La salida va a uno o más sistemas? ';
    var resp29 = '29 ¿Existe una manera preestablecida en que deben formatearse los datos? ';
    var resp30 = '30 ¿Cuáles son los requerimientos para la confiabilidad, disponibilidad, facilidad de mantenimiento, seguridad y demás atributos de calidad? ';
    var resp31 = '31 ¿Cómo deben demostrarse las características del sistema a terceros? ';
    var resp32 = '32 ¿El sistema debe detectar y aislar defectos? ';
    var resp33 = '33 ¿Cuál es el promedio de tiempo prescrito entre fallas? ';
    var resp34 = '34 ¿Existe un tiempo máximo permitio para la recuperación del sistema después de una falla ? ';
    var resp35 = '35 ¿El mantenimiento corregirá los errores, o incluirá también el mejoramiento del sistema? ';
    var resp36 = '36 ¿Qué medidas de eficiencia se aplicarán al uso de recursos y al tiempo de respuesta? ';
    var resp37 = '37 ¿Cuán fácil debe ser mover el sistema de una ubicación a otra de un tipo de computadora a otro? ';
    var resp38 = '38 ¿Debe controlarse el acceso al sistema o a la información? ';
    var resp39 = '39 ¿Cómo se podrán aislar los datos de un usuario de los de otros?';
    var resp40 = '40 ¿Cómo podrán aislarse los programas de usuario de los otros programas y del sistema operativo? ';
    var resp41 = '41 ¿Con qué frecuencia deben hacerse copias de respaldo? ';
    var resp42 = '42 ¿Las copias de respaldo deben almacenarse en un lugar diferente? ';
    var resp43 = '43 ¿Deben tomarse precauciones contra el fuego, el daño provocado por agua o el robo? ';
    var resp44 = '44 ¿¿Cuánta documentación se requiere? ';
    var resp45 = '45 ¿Debe estar en línea, en papel o en ambos? ';
    var resp46 = '46 ¿A que audiencia está orientado cada tipo de información? ';


    doc.pipe(fs.createWriteStream('Requerimientos.pdf').on('finish', function() {
        console.log('Archivo creado satisfactoriamente ....')
        var file = fs.createReadStream('Requerimientos.pdf');
        var stat = fs.statSync('Requerimientos.pdf');
        res.setHeader('Content-Length', stat.size);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=Requerimientos.pdf');
        file.pipe(res);



    }));

    //Funciones de tabla y contenido
    function textInRowFirst(doc, text, heigth) {
        doc.font('Helvetica');
        //doc.fontSize(10);
        doc.y = heigth;
        doc.x = 35;
        doc.fillColor('black')
        doc.text(text, {
            paragraphGap: 5,
            width: 340,
            indent: 0,
            align: 'justify',
            columns: 1,
            lineGap: 0
        });
        doc.fontSize(10);
        doc.font('Helvetica');
        return doc
    }

    function textInRowResp(doc, text, heigth) {
        doc.fontSize(10);
        doc.font('Helvetica-Bold');
        doc.y = heigth;
        doc.x = 382;
        doc.fillColor('black')
        doc.text(text, {
            paragraphGap: 5,
            width: 100,
            indent: 0,
            align: 'left',
            columns: 1,
            lineGap: 0
        });
        doc.x = 35;
        doc.font('Helvetica');
        doc.fontSize(10);
        return doc
    }

    function textInRowReq(doc, text, heigth) {
        doc.fontSize(10);
        doc.font('Helvetica');
        doc.y = heigth;
        doc.x = 482;
        doc.fillColor('black')
        doc.text(text, {
            paragraphGap: 5,
            width: 100,
            indent: 0,
            align: 'left',
            columns: 1,
            lineGap: 0
        });
        doc.x = 35;
        doc.font('Helvetica');
        doc.fontSize(10);
        return doc
    }

    function textInRowObs(doc, text, heigth) {
        doc.fontSize(10);
        doc.font('Helvetica-Oblique');
        doc.y = heigth;
        doc.x = 35;
        doc.fillColor('black')
        doc.text(text, {
            paragraphGap: 5,
            width: 380,
            indent: 0,
            align: 'left',
            columns: 1,
            lineGap: 0
        });
        doc.x = 35;
        doc.font('Helvetica');
        doc.fontSize(10);
        return doc
    }


    function row(doc, heigth, tam) {
        doc.lineJoin('miter')
            .rect(30, heigth, 540, tam)
            .stroke()
        return doc
    }

    //Establecemos un titulo y le pasamos las coordenadas X y Y.
    doc.fontSize(15).text('Requerimientos', 30, 30);

    doc.font('Helvetica-Bold');
    doc.fontSize(12)
    doc.text('Usuarios y Factores Humanos', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });

    doc.font('Helvetica');
    doc.lineCap('butt')
        .moveTo(480, 60)
        .lineTo(480, 228)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 60)
        .lineTo(380, 228)
        .stroke()
    doc.fontSize(10);
    row(doc, 60, 28); //1
    row(doc, 88, 28); //2
    row(doc, 116, 28); //3
    row(doc, 144, 28); //4
    row(doc, 172, 28); //5
    row(doc, 200, 28); //6


    //doc.text('Observación: ' + req.body.pre2Obs);
    textInRowFirst(doc, resp1, 65); //1
    textInRowResp(doc, req.body.pre1, 65);
    textInRowReq(doc, 'RNF -> Externo -> Interoperabilidad', 65);
    //textInRowObs(doc, `Observación: ${req.body.pre2Obs}`, 76)

    textInRowFirst(doc, resp2, 93); //2
    switch (req.body.pre2) {
        case 'option1':
            textInRowResp(doc, 'Sólo Admin', 93)
            break;
        case 'option2':
            textInRowResp(doc, 'Admin y user', 93)
            break;
        case 'option3':
            textInRowResp(doc, 'Admin, user u other', 93)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Externo -> Legis - Seguridad', 93);
    textInRowObs(doc, `Observación: ${req.body.pre2Obs}`, 104);


    textInRowFirst(doc, resp3, 121); //3
    switch (req.body.pre3) {
        case 'option1':
            textInRowResp(doc, 'inicial', 121)
            break;
        case 'option2':
            textInRowResp(doc, 'intermedio', 121)
            break;
        case 'option3':
            textInRowResp(doc, 'avanzado', 121)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Producto -> Usabilidad', 121);
    textInRowObs(doc, `Observación: ${req.body.pre3Obs}`, 132);

    textInRowFirst(doc, resp4, 149); //4
    if (req.body.pre4 == 'on') {
        textInRowResp(doc, 'Es requerido', 149)
    } else {
        textInRowResp(doc, 'No es requerido', 149)
    }
    textInRowReq(doc, 'RNF -> Producto -> Usabilidad', 149);
    textInRowObs(doc, `Observación: ${req.body.pre4Obs}`, 160);


    textInRowFirst(doc, resp5, 177); //5
    if (req.body.pre5 == 'on') {
        textInRowResp(doc, 'Fácil para el usuario', 177)
    } else {
        textInRowResp(doc, 'Dificil para el usuario', 177)
    }
    textInRowReq(doc, 'RNF -> Organiz -> Implementación', 177);
    textInRowObs(doc, `Observación: ${req.body.pre5Obs}`, 188);


    textInRowFirst(doc, resp6, 205); //6
    if (req.body.pre6 == 'on') {
        textInRowResp(doc, 'Uso indebido', 205)
    } else {
        textInRowResp(doc, 'Ningun uso indebido', 205)
    }
    textInRowReq(doc, 'RNF -> Organiz -> Implementación', 205);
    textInRowObs(doc, `Observación: ${req.body.pre6Obs}`, 216);


    doc.font('Helvetica-Bold');
    doc.y = 238;
    doc.x = 30;
    doc.fontSize(12)
    doc.text('Funcionalidad', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });

    doc.lineCap('butt')
        .moveTo(480, 250)
        .lineTo(480, 418)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 250)
        .lineTo(380, 416)
        .stroke()

    row(doc, 250, 42); //7
    row(doc, 292, 28); //8
    row(doc, 320, 28); //9
    row(doc, 348, 28); //10
    row(doc, 376, 40); //11

    doc.fontSize(10);
    textInRowFirst(doc, resp7, 255);
    textInRowResp(doc, 'Predefinido por el cliente', 255)
    textInRowReq(doc, 'RF', 255);
    textInRowObs(doc, `Observación: ${req.body.pre7}`, 266);

    textInRowFirst(doc, resp8, 297);
    switch (req.body.pre8) {
        case 'option1':
            textInRowResp(doc, '24 horas x 7 días', 297)
            break;
        case 'option2':
            textInRowResp(doc, '8 horas x 7 días', 297)
            break;
        case 'option3':
            textInRowResp(doc, '8 horas x 5 días', 297)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RF', 297);
    textInRowObs(doc, `Observación: ${req.body.pre8Obs}`, 308);


    textInRowFirst(doc, resp9, 325);
    switch (req.body.pre9) {
        case 'option1':
            textInRowResp(doc, 'Admin (super root)', 325)
            break;
        case 'option2':
            textInRowResp(doc, 'Admin - Usuario', 325)
            break;
        case 'option3':
            textInRowResp(doc, 'Admin - Usuario - Cliente', 325)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RF', 325);
    textInRowObs(doc, `Observación: ${req.body.pre9Obs}`, 336);

    textInRowFirst(doc, resp10, 353);
    if (req.body.pre10 == 'on') {
        textInRowResp(doc, 'Si para mejoras', 353)
    } else {
        textInRowResp(doc, 'No para mejoras', 353)
    }
    textInRowReq(doc, 'RF', 353);
    textInRowObs(doc, `Observación: ${req.body.pre10Obs}`, 364);

    textInRowFirst(doc, resp11, 381);
    var text = '';

    if (req.body.pre11x1 == 'on') {
        text = text + 'VEjecución ';
    }
    if (req.body.pre11x2 == 'on') {
        text = text + 'TRespuesta ';
    }
    if (req.body.pre11x3 == 'on') {
        text = text + 'Rendimiento ';
    }
    if (text == "") {
        textInRowResp(doc, 'Ninguna restricción', 381)
    } else {
        textInRowResp(doc, text, 381)
    }

    textInRowReq(doc, 'RNF -> Producto -> Efici - Espacio', 381);
    textInRowObs(doc, `Observación: ${req.body.pre11Obs}`, 403);

    doc.font('Helvetica-Bold');
    doc.y = 426;
    doc.x = 30;
    doc.fontSize(12)
    doc.text('Datos', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });

    doc.lineCap('butt')
        .moveTo(480, 438)
        .lineTo(480, 606)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 438)
        .lineTo(380, 606)
        .stroke()

    row(doc, 438, 28); //12
    row(doc, 466, 28); //13
    row(doc, 494, 28); //14
    row(doc, 522, 28); //15
    row(doc, 550, 28); //16
    row(doc, 578, 28); //17

    doc.fontSize(8);
    textInRowFirst(doc, resp12, 443);

    text = '';
    if (req.body.pre12x1 == 'on') {
        text = text + 'Tecl-Pant, ';
    }
    if (req.body.pre12x2 == 'on') {
        text = text + 'csv- xls- pdf, ';
    }
    if (req.body.pre12x3 == 'on') {
        text = text + 'Not- venta ';
    }
    if (text == "") {
        textInRowResp(doc, 'Ninguna formato especificado', 443)
    } else {
        textInRowResp(doc, text, 443)
    }
    textInRowReq(doc, 'RNF -> Producto -> Fiabilidad', 443);
    textInRowObs(doc, `Observación: ${req.body.pre12Obs}`, 454);

    textInRowFirst(doc, resp13, 471);
    switch (req.body.pre13) {
        case 'option1':
            textInRowResp(doc, '0-50 Movimientos', 471)
            break;
        case 'option2':
            textInRowResp(doc, '50-100 Movimientos', 471)
            break;
        case 'option3':
            textInRowResp(doc, '100+ Movimientos', 471)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Producto -> Fiabilidad', 471);
    textInRowObs(doc, `Observación: ${req.body.pre13Obs}`, 482);

    textInRowFirst(doc, resp14, 499);
    switch (req.body.pre14) {
        case 'option1':
            textInRowResp(doc, 'Sin redondeo', 499)
            break;
        case 'option2':
            textInRowResp(doc, 'Redon a la dec sig', 499)
            break;
        case 'option3':
            textInRowResp(doc, 'Redon a la cent sig', 499)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Producto -> Fiabilidad', 499);
    textInRowObs(doc, `Observación: ${req.body.pre14Obs}`, 510);

    textInRowFirst(doc, resp15, 527);
    switch (req.body.pre15) {
        case 'option1':
            textInRowResp(doc, 'Céntimos', 527)
            break;
        case 'option2':
            textInRowResp(doc, 'Decimales', 527)
            break;
        case 'option3':
            textInRowResp(doc, 'Enteros', 527)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Producto -> Fiabilidad', 527);
    textInRowObs(doc, `Observación: ${req.body.pre15Obs}`, 538);

    textInRowFirst(doc, resp16, 555);
    switch (req.body.pre16) {
        case 'option1':
            textInRowResp(doc, '0 - 100 datos', 555)
            break;
        case 'option2':
            textInRowResp(doc, '100 - 300 datos', 555)
            break;
        case 'option3':
            textInRowResp(doc, '+ 300 datos', 555)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RF', 555);
    textInRowObs(doc, `Observación: ${req.body.pre16Obs}`, 566);

    textInRowFirst(doc, resp17, 583);
    if (req.body.pre17 == 'on') {
        textInRowResp(doc, 'Si con persistencia', 583)
    } else {
        textInRowResp(doc, 'No con persistencia', 583)
    }
    textInRowReq(doc, 'RF', 583);
    textInRowObs(doc, `Observación: ${req.body.pre17Obs}`, 594);

    doc.font('Helvetica-Bold');
    doc.y = 616;
    doc.x = 30;
    doc.fontSize(12)
    doc.text('Recursos', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.lineCap('butt')
        .moveTo(480, 628)
        .lineTo(480, 796)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 628)
        .lineTo(380, 796)
        .stroke()
    row(doc, 628, 28); //18
    row(doc, 656, 28); //19
    row(doc, 684, 28); //20
    row(doc, 712, 28); //21
    row(doc, 740, 28); //22
    row(doc, 768, 28); //23

    doc.fontSize(6.5);
    textInRowFirst(doc, resp18, 633);
    if (req.body.pre18 == 'on') {
        textInRowResp(doc, 'Con acceso a internet', 633)
    } else {
        textInRowResp(doc, 'Sin acceso a internet', 633)
    }
    textInRowReq(doc, 'RNF -> Organiza -> Implementación', 633);
    textInRowObs(doc, `Observación: ${req.body.pre18Obs}`, 644);

    textInRowFirst(doc, resp19, 661);
    switch (req.body.pre19) {
        case 'option1':
            textInRowResp(doc, 'Alto conocimiento Anális - Program', 661)
            break;
        case 'option2':
            textInRowResp(doc, 'Medio conocimiento Anális - Program', 661)
            break;
        case 'option3':
            textInRowResp(doc, 'Bajo conocimiento Anális - Program', 661)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Organiza -> Implementación', 661);
    textInRowObs(doc, `Observación: ${req.body.pre19Obs}`, 672);

    textInRowFirst(doc, resp20, 689);
    if (req.body.pre20 == 'on') {
        textInRowResp(doc, 'Espacio necesario', 689)
    } else {
        textInRowResp(doc, 'No hay espacio', 689)
    }
    textInRowReq(doc, 'RNF -> Organiza -> Implementación', 689);
    textInRowObs(doc, `Observación: ${req.body.pre20Obs}`, 700);

    doc.fontSize(8);
    textInRowFirst(doc, resp21, 717);
    text = '';
    if (req.body.pre21x1 == 'on') {
        text = text + 'Corte luz, ';
    }
    if (req.body.pre21x2 == 'on') {
        text = text + 'Ext calor, ';
    }

    if (text == "") {
        textInRowResp(doc, 'Ningun requerimiento', 717)
    } else {
        textInRowResp(doc, text, 717)
    }
    textInRowReq(doc, 'RNF -> Externo -> Interoperabilidad', 717);
    textInRowObs(doc, `Observación: ${req.body.pre21Obs}`, 728);

    textInRowFirst(doc, resp22, 745);
    switch (req.body.pre22) {
        case 'option1':
            textInRowResp(doc, 'No se dio fecha límite', 745)
            break;
        case 'option2':
            textInRowResp(doc, 'Fecha límite del curso', 745)
            break;
        case 'option3':
            textInRowResp(doc, 'Ajustado al alcance', 745)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Organiza -> Estandares', 745);
    textInRowObs(doc, `Observación: ${req.body.pre22Obs}`, 756);

    doc.fontSize(7);
    textInRowFirst(doc, resp23, 773);
    if (req.body.pre23 == 'on') {
        textInRowResp(doc, 'Existe un límite', 773)
    } else {
        textInRowResp(doc, 'No existe un límite', 773)
    }
    textInRowReq(doc, 'RNF -> Organza -> Entrega', 773);
    textInRowObs(doc, `Observación: ${req.body.pre23Obs}`, 784);

    doc.addPage();
    doc.font('Helvetica-Bold');
    doc.y = 30;
    doc.x = 30;
    doc.fontSize(12)
    doc.text('Ambiente Físico', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.lineCap('butt')
        .moveTo(480, 42)
        .lineTo(480, 126)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 42)
        .lineTo(380, 126)
        .stroke()
    row(doc, 42, 28); //24
    row(doc, 70, 28); //25
    row(doc, 98, 28); //26

    doc.fontSize(10);

    textInRowFirst(doc, resp24, 47);
    switch (req.body.pre24) {
        case 'option1':
            textInRowResp(doc, 'Recepción', 47)
            break;
        case 'option2':
            textInRowResp(doc, 'Almacen', 47)
            break;
        case 'option3':
            textInRowResp(doc, 'Predefinido por el cliente', 47)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Externo -> Interoperabilidad', 47);
    textInRowObs(doc, `Observación: ${req.body.pre24Obs}`, 58);

    textInRowFirst(doc, resp25, 75);
    switch (req.body.pre25) {
        case 'option1':
            textInRowResp(doc, '1 localización', 75)
            break;
        case 'option2':
            textInRowResp(doc, '2 localizaciones', 75)
            break;
        case 'option3':
            textInRowResp(doc, '3+ localizaciones', 75)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Externo -> Interoperabilidad', 75);
    textInRowObs(doc, `Observación: ${req.body.pre25Obs}`, 86);

    doc.fontSize(8)
    textInRowFirst(doc, resp26, 103);
    text = '';
    if (req.body.pre26x1 == 'on') {
        text = text + 'R-Calent, ';
    }
    if (req.body.pre26x2 == 'on') {
        text = text + 'R-Agua, ';
    }
    if (req.body.pre26x3 == 'on') {
        text = text + 'R-Inter-Mag ';
    }
    if (text == "") {
        textInRowResp(doc, 'Ninguna Restricción', 103)
    } else {
        textInRowResp(doc, text, 103)
    }
    textInRowReq(doc, 'RNF -> Externo -> Interoperabilidad', 103);
    textInRowObs(doc, `Observación: ${req.body.pre26Obs}`, 114);

    doc.font('Helvetica-Bold');
    doc.y = 136;
    doc.x = 30;
    doc.fontSize(12)
    doc.text('Interfaces', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.lineCap('butt')
        .moveTo(480, 148)
        .lineTo(480, 232)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 148)
        .lineTo(380, 232)
        .stroke()
    row(doc, 148, 28); //27
    row(doc, 176, 28); //28
    row(doc, 204, 28); //29

    doc.fontSize(10);

    textInRowFirst(doc, resp27, 153);
    switch (req.body.pre27) {
        case 'option1':
            textInRowResp(doc, 'Ninguno', 153)
            break;
        case 'option2':
            textInRowResp(doc, 'Uno', 153)
            break;
        case 'option3':
            textInRowResp(doc, 'Más sistemas', 153)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RF', 153);
    textInRowObs(doc, `Observación: ${req.body.pre27Obs}`, 164);

    textInRowFirst(doc, resp28, 181);
    switch (req.body.pre28) {
        case 'option1':
            textInRowResp(doc, 'Ninguno', 181)
            break;
        case 'option2':
            textInRowResp(doc, 'Uno', 181)
            break;
        case 'option3':
            textInRowResp(doc, 'Más sistemas', 181)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RF', 181);
    textInRowObs(doc, `Observación: ${req.body.pre28Obs}`, 192);

    doc.fontSize(8);

    textInRowFirst(doc, resp29, 209);
    switch (req.body.pre29) {
        case 'option1':
            textInRowResp(doc, 'No hay formato', 209)
            break;
        case 'option2':
            textInRowResp(doc, 'Predefinido por el cliente', 209)
            break;

        default:
            break;
    }
    textInRowReq(doc, 'RF', 209);
    textInRowObs(doc, `Observación: ${req.body.pre29Obs}`, 220);

    doc.font('Helvetica-Bold');
    doc.y = 242;
    doc.x = 30;
    doc.fontSize(12)
    doc.text('Aseguramiento de la calidad', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.lineCap('butt')
        .moveTo(480, 254)
        .lineTo(480, 490)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 254)
        .lineTo(380, 490)
        .stroke()
    row(doc, 254, 40); //30
    row(doc, 294, 28); //31
    row(doc, 322, 28); //32
    row(doc, 350, 28); //33
    row(doc, 378, 28); //34
    row(doc, 406, 28); //35
    row(doc, 434, 28); //36
    row(doc, 462, 28); //37

    doc.fontSize(10);

    textInRowFirst(doc, resp30, 259);
    text = '';
    if (req.body.pre30x1 == 'on') {
        text = text + 'Pri- Confia, ';
    }
    if (req.body.pre30x2 == 'on') {
        text = text + 'Pri- Dispon, ';
    }
    if (req.body.pre30x3 == 'on') {
        text = text + 'Pri- Mant, ';
    }
    if (req.body.pre30x4 == 'on') {
        text = text + 'Pri- Seguridad ';
    }
    if (text == "") {
        textInRowResp(doc, 'Ninguna requerimientos', 259)
    } else {
        textInRowResp(doc, text, 259)
    }
    textInRowReq(doc, 'RNF -> Organiza -> Estandares', 259);
    textInRowObs(doc, `Observación: ${req.body.pre30Obs}`, 281);

    textInRowFirst(doc, resp31, 299);
    text = '';
    if (req.body.pre31x1 == 'on') {
        text = text + 'Intuición, ';
    }
    if (req.body.pre31x2 == 'on') {
        text = text + 'Guia en el soft, ';
    }
    if (req.body.pre31x3 == 'on') {
        text = text + 'Manual';
    }

    if (text == "") {
        textInRowResp(doc, 'No se demuestran', 299)
    } else {
        textInRowResp(doc, text, 299)
    }
    textInRowReq(doc, 'RNF -> Organiza -> Implementación', 299);
    textInRowObs(doc, `Observación: ${req.body.pre31Obs}`, 310);

    textInRowFirst(doc, resp32, 327);
    if (req.body.pre32 == 'on') {
        textInRowResp(doc, 'Detectar y aislar', 327)
    } else {
        textInRowResp(doc, 'No detectar y asilar', 327)
    }
    textInRowReq(doc, 'RNF -> Producto -> Fiabilidad', 327);
    textInRowObs(doc, `Observación: ${req.body.pre32Obs}`, 338);

    textInRowFirst(doc, resp33, 355);
    if (req.body.pre33 == 'on') {
        textInRowResp(doc, 'Menor a 1 segundo', 355)
    } else {
        textInRowResp(doc, 'No definido', 355)
    }
    textInRowReq(doc, 'RNF -> Producto -> Fiabilidad', 355);
    textInRowObs(doc, `Observación: ${req.body.pre33Obs}`, 366);

    doc.fontSize(8);

    textInRowFirst(doc, resp34, 383);
    if (req.body.pre34 == 'on') {
        textInRowResp(doc, 'No precisado', 383)
    } else {
        textInRowResp(doc, 'Predefinido por el cliente', 383)
    }
    textInRowReq(doc, 'RNF -> Producto -> Fiabilidad', 383);
    textInRowObs(doc, `Observación: ${req.body.pre34Obs}`, 394);

    doc.fontSize(8);

    textInRowFirst(doc, resp35, 411);
    if (req.body.pre35 == 'on') {
        textInRowResp(doc, 'Mant con mejoras', 411)
    } else {
        textInRowResp(doc, 'Mant sin mejoras', 411)
    }
    textInRowReq(doc, 'RNF -> Organiza -> Entrega', 411);
    textInRowObs(doc, `Observación: ${req.body.pre35Obs}`, 422);

    doc.fontSize(8);

    textInRowFirst(doc, resp36, 439);
    if (req.body.pre36 == 'on') {
        textInRowResp(doc, 'Sujeto a estandares', 439)
    } else {
        textInRowResp(doc, 'Sin estandares', 439)
    }
    textInRowReq(doc, 'RNF -> Producto -> Efic-Espa-Rend', 439);
    textInRowObs(doc, `Observación: ${req.body.pre36Obs}`, 450);

    doc.fontSize(7.5);

    textInRowFirst(doc, resp37, 467);
    switch (req.body.pre37) {
        case 'option1':
            textInRowResp(doc, 'Sin ayuda', 467)
            break;
        case 'option2':
            textInRowResp(doc, 'Con ayuda', 467)
            break;
        case 'option3':
            textInRowResp(doc, 'No se puede mover', 467)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Producto -> Efic-Portabilidad', 467);
    textInRowObs(doc, `Observación: ${req.body.pre37Obs}`, 478);

    doc.font('Helvetica-Bold');
    doc.y = 500;
    doc.x = 30;
    doc.fontSize(12)
    doc.text('Seguridad', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.lineCap('butt')
        .moveTo(480, 512)
        .lineTo(480, 680)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 512)
        .lineTo(380, 680)
        .stroke()
    row(doc, 512, 28); //38
    row(doc, 540, 28); //39
    row(doc, 568, 28); //40
    row(doc, 596, 28); //41
    row(doc, 624, 28); //42
    row(doc, 652, 28); //43

    doc.fontSize(7.5);

    textInRowFirst(doc, resp38, 517);
    switch (req.body.pre38) {
        case 'option1':
            textInRowResp(doc, 'Acceso Restringido', 517)
            break;
        case 'option2':
            textInRowResp(doc, 'Acceso al publico', 517)
            break;
        case 'option3':
            textInRowResp(doc, 'Totalmente privado', 517)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Externos -> Legisl-Segu', 517);
    textInRowObs(doc, `Observación: ${req.body.pre38Obs}`, 528);

    textInRowFirst(doc, resp39, 545);
    switch (req.body.pre39) {
        case 'option1':
            textInRowResp(doc, 'Restricción por contraseña', 545)
            break;
        case 'option2':
            textInRowResp(doc, 'Restricción por IP', 545)
            break;
        case 'option3':
            textInRowResp(doc, 'Restricción por celular', 545)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Externos -> Legisl-Priva', 545);
    textInRowObs(doc, `Observación: ${req.body.pre39Obs}`, 556);

    doc.fontSize(7.5);

    textInRowFirst(doc, resp40, 573);
    switch (req.body.pre40) {
        case 'option1':
            textInRowResp(doc, 'Ninguno', 573)
            break;
        case 'option2':
            textInRowResp(doc, 'Encapsulamiento Parcial', 573)
            break;
        case 'option3':
            textInRowResp(doc, 'Encapsulamiento total', 573)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Externos -> Legisl-Segu', 573);
    textInRowObs(doc, `Observación: ${req.body.pre40Obs}`, 584);

    textInRowFirst(doc, resp41, 601);
    switch (req.body.pre41) {
        case 'option1':
            textInRowResp(doc, 'Diario', 601)
            break;
        case 'option2':
            textInRowResp(doc, 'Semanal', 601)
            break;
        case 'option3':
            textInRowResp(doc, 'Mes', 601)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Externos -> Legisl-Segu', 601);
    textInRowObs(doc, `Observación: ${req.body.pre41Obs}`, 612);

    textInRowFirst(doc, resp42, 629);
    switch (req.body.pre42) {
        case 'option1':
            textInRowResp(doc, 'En la misma PC', 629)
            break;
        case 'option2':
            textInRowResp(doc, 'Servidor ( google , aws )', 629)
            break;
        case 'option3':
            textInRowResp(doc, 'Ambos', 629)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Externos -> Legisl-Segu', 629);
    textInRowObs(doc, `Observación: ${req.body.pre42Obs}`, 640);

    doc.fontSize(8.5);

    textInRowFirst(doc, resp43, 657);
    text = '';
    if (req.body.pre43x1 == 'on') {
        text = text + 'P- Fuego, ';
    }
    if (req.body.pre43x2 == 'on') {
        text = text + 'P- Agua, ';
    }
    if (req.body.pre43x3 == 'on') {
        text = text + 'P- Robo';
    }

    if (text == "") {
        textInRowResp(doc, 'Sin preucaciones', 657)
    } else {
        textInRowResp(doc, text, 657)
    }
    textInRowReq(doc, 'RNF -> Externos -> Legisl-Segu', 657);
    textInRowObs(doc, `Observación: ${req.body.pre43Obs}`, 669);


    doc.font('Helvetica-Bold');
    doc.y = 690;
    doc.x = 30;
    doc.fontSize(12)
    doc.text('Documentación', {
        font: 'Times-Bold',
        align: 'left' // tipo de alineación (left, center, right o justify)
    });
    doc.lineCap('butt')
        .moveTo(480, 702)
        .lineTo(480, 786)
        .stroke()
    doc.lineCap('butt')
        .moveTo(380, 702)
        .lineTo(380, 786)
        .stroke()
    row(doc, 702, 28); //44
    row(doc, 730, 28); //45
    row(doc, 758, 28); //46

    doc.fontSize(10);

    textInRowFirst(doc, resp44, 707);
    switch (req.body.pre44) {
        case 'option1':
            textInRowResp(doc, 'Lo Básico', 707)
            break;
        case 'option2':
            textInRowResp(doc, 'Lo Necesario', 707)
            break;
        case 'option3':
            textInRowResp(doc, 'Todo', 707)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Organza -> Entrega', 707);
    textInRowObs(doc, `Observación: ${req.body.pre44Obs}`, 718);

    textInRowFirst(doc, resp45, 735);
    switch (req.body.pre45) {
        case 'option1':
            textInRowResp(doc, 'Online', 735)
            break;
        case 'option2':
            textInRowResp(doc, 'Papel', 735)
            break;
        case 'option3':
            textInRowResp(doc, 'Ambos', 735)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Organza -> Entrega', 735);
    textInRowObs(doc, `Observación: ${req.body.pre45Obs}`, 746);


    textInRowFirst(doc, resp46, 763);
    switch (req.body.pre46) {
        case 'option1':
            textInRowResp(doc, 'Dueña', 763)
            break;
        case 'option2':
            textInRowResp(doc, 'Vendendores', 763)
            break;
        case 'option3':
            textInRowResp(doc, 'Ambos', 763)
            break;
        default:
            break;
    }
    textInRowReq(doc, 'RNF -> Producto -> Usabilidad', 763);
    textInRowObs(doc, `Observación: ${req.body.pre46Obs}`, 774);



    doc.end();
}
module.exports = {
    descargarPdf

}