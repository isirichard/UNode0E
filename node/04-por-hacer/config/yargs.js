const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

completado = {
    default: true,
    alias: 'c',
    dec: 'Marca como completado o pendiente una tarea'
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer ', {
        //descripcion: descripcion
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}