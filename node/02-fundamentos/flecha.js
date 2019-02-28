// function sumar(a, b) {
//     return a + b;
// }


//function flecha
let sumar = (a, b) => {
        return a + b;
    }
    //si es en una sóla linea
let sumar2 = (a, b) => a + b;

function saludar() {
    return 'Hola Mundo';
}
let saludar2 = () => {
    return 'Hola Mundo';
}
let saludar3 = (nombre) => {
    return `Hola: ${nombre}`;
}

console.log(saludar3('isi'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //funciones del this apunta fuera de la función

    //funciones normales
    // getNombre: function() {
    //    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    // }


    //forma global con el this
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
    //debido al navegador en window, en vsc en global
};

console.log(deadpool.getNombre());