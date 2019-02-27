//diferencia es en la forma en que viven
let nombre = 'Wolverine';
//cuando usamos la variable var se puede castear no importa el ambito
//con let no se puede volver a inicializar
//let mas características de seguridad
if (true) {
    let nombre = 'Magneto';
}

let i = 'Hola Mundo';
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}

console.log(i);