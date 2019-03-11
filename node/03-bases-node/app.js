const argv = require('./config/yargs').argv;
var colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

//let base = 5;
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            //.then(archivo => console.log(`Archico creado: ${archivo}`))
            .then(archivo => console.log(`Archico creado: `, colors.green(archivo)))

        .catch(e => console.log(e));

        break;
    default:
        console.log('Comando no reconocido');

}
//console.log(argv);


//console.log(process.argv);
//let argv2 = process.argv;
//console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];