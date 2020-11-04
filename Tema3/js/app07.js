// Ejemplos de funciones flecha

function suma(a, b) {
    return a + b;
}

///////////////

const sumaF = (a, b) => a + b;


console.log(suma(3, 5));

console.log(
    sumaF(3, 5)
);


function mensaje(msg) {
    console.log("El mensaje es:" + msg);
}

const mensajeF = msg => {
    console.log("El mensaje es:" + msg);
};


function hola() {
    console.log("Hola");
}

const holaF = () => {
    console.log("Hola");
};


const arr = [3, 10, 4, 1, 6, 8];

const ordena = function miOrdenacion(a, b) {
    return a - b;
}

const ordenaF = (a, b) => a - b;

console.log(arr.sort(ordena));
console.log(arr.sort(ordenaF));


var numbers = [1, 5, 10, 15];
//var doubles = numbers.map(x => x * 2);

console.log(numbers);
console.log(numbers.map(x => x * 2));
console.log(numbers);