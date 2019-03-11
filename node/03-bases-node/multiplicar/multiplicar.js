//requireds
const fs = require('fs'); //propia de node nativos
var colors = require('colors');

//const fs = require('express');//paquete que se instala no nativos
//const fs = require('./fs'); //archivos creamos en el proyecto
let listarTabla = (base, limite = 10) => {
    let data = '';
    console.log('================================'.green);
    console.log(`tabla de ${base} `.green);
    console.log('================================'.green);

    for (let i = 1; i <= limite; i++) {
        //data += `${base} * ${i} = ${base * i}\n`;
        console.log(`${base} * ${i} = ${base * i}`);

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
            //console.log(`${base} * ${i} = ${base * i}`);

        }


        fs.writeFile(`tablas/tabla-${base}.txt-al-${limite}`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
                //console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}