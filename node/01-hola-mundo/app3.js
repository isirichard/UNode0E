console.log('Inicio del programaa');
//es una función para ejecutar algo en algun tiempo couldback
setTimeout(function() {
    console.log('Primer Timeout');
}, 3000);
setTimeout(function() {
    console.log('Segundo Timeout');
}, 0);
setTimeout(function() {
    console.log('Tercer Timeout');
}, 0);
setTimeout(function() {
    console.log('Fin del programa');
}, 0);