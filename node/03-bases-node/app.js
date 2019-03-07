const { crearArchivo } = require('./multiplicar/multiplicar')
    //let base = 5;

//console.log(process.argv);
let argv = process.argv;
let parametro = argv[2];
//console.log(parametro);
let base = parametro.split('=')[1];
//console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archico creado: ${archivo}`))
    .catch(e => console.log(e));