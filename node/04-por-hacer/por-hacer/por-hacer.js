const fs = require('fs');
let listadoPorHacer = [];
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

}
const crear = (descripcion) => {
    let porHacer = {
        //descripcion: descripcion,
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    return porHacer;
}

module.exports = {
    crear
}