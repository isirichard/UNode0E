//requireds
const fs = require('fs'); //propia de node nativos
//const fs = require('express');//paquete que se instala no nativos
//const fs = require('./fs'); //archivos creamos en el proyecto
let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }



        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
            //console.log(`${base} * ${i} = ${base * i}`);

        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
                //console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo
}