//funcion que se ejecuta cuando algo sucede
// setTimeout(function() {
//     console.log('Hola Mundo');
// }, 3000);

// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Fernando',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id} no existe en BD`)
    } else {
        callback(null, usuario);
    }


}

getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});