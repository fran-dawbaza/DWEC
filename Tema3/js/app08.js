const miCoche = {
    marca: 'Ford',
    modelo: 'Mustang',
    año: 1969,
    km: 450000,
    tieneKM: function() {
        console.log(`${this.marca} ${this.modelo} del año ${this.año} tiene ${this.km} kilómetros`);
    }
};




//console.log(miCoche);

//console.log(miCoche.color);

miCoche.color = 'blanco';

console.log(miCoche);
console.log(miCoche.color);
console.log('no peta: ' + miCoche['color']); // no peta
//console.log('peta: ' + miCoche[color]); // peta

miCoche.enVenta = function(precio) {
    console.log(`${this.marca} ${this.modelo} del año ${this.año} se vende por ${precio} euros`);
};


/*
Este mecanismo 'prototype' para añadir métodos se usa en clases de objetos, ¡NO EN OBJETOS!

miCoche.prototype.enVenta = function(precio) {
    console.log(`${this.marca} ${this.modelo} del año ${this.año} se vende por ${precio} euros`);
}
*/

miCoche.enVenta(5000);
miCoche.tieneKM();

/*
delete miCoche.km;
miCoche.tieneKM();
delete miCoche.tieneKM;
miCoche.tieneKM();
*/

for (let $prop in miCoche) {
    console.log('la propiedad es: ' + $prop + ' y su valor es: ' + miCoche[$prop]);
}

console.log(miCoche.toString());


// Clases en ES5 y anterior

function Coche(marca, modelo, año, km) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.km = km;
    /* Funciona!
    this.tieneKM = function() {
        console.log(`${this.marca} ${this.modelo} del año ${this.año} tiene ${this.km} kilómetros`);
    };*/
    /* Funciona
    Coche.prototype.tieneKM = function() {
        console.log(`${this.marca} ${this.modelo} del año ${this.año} tiene ${this.km} kilómetros`);
    };*/
}

// Se pueden añadir métodos fuera de la definición así
Coche.prototype.tieneKM = function() {
    console.log(`${this.marca} ${this.modelo} del año ${this.año} tiene ${this.km} kilómetros`);
};
// A diferencia de objetos NO podemos añadir otras propiedades a la clase así:
Coche.combustible = 'gasolina';

Coche.prototype.combustible = 'diesel';


let unCoche = new Coche('Seat', 'Panda', 1988, 230000);
unCoche.motor = 'eléctrico';
let otroCoche = new Coche('Fiat', 'Panda', 1978, 290000);

console.log(unCoche);
console.log(otroCoche);
console.log(otroCoche.tieneKM());


// Clases en ES6 y superior

class CocheES6 {
    constructor(marca, modelo, año = 2000, km = 0) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.km = km;
    }
    tieneKM() {
        console.log(`${this.marca} ${this.modelo} del año ${this.año} tiene ${this.km} kilómetros`);
    };
    toString() {
        return `marca:${this.marca};modelo:${this.modelo}`;
    }
};

const unCocheES6 = new CocheES6('Citroen', 'C1', 1970, 230001);
const otroCocheES6 = new CocheES6('Renault', 'R6');

console.log(unCocheES6);
console.log(otroCocheES6.toString());



let cadena = JSON.stringify(unCocheES6);
console.log("Con JSON.stringify convertimos un objeto en cadena, ejemplo: " + cadena);
// de esta forma objeto contiene las propiedades originales, pero no los métodos de la clase CocheES6, ya que esa información no se guardó con JSON.stringify
let objeto = JSON.parse(cadena);
console.log("Con JSON.parse hacemos el paso inverso, convertimos una en cadena, ejemplo: ", `marca ${objeto.marca}, modelo ${objeto.modelo}, año ${objeto.año} `);

// de esta forma obtengo un objeto de clase CocheES6, ya que le asigno la clase CocheES6 a los datos del objeto "objeto"
// y podría acceder a los métodos tieneKM y toString
let objetoCocheES6 = Object.assign(CocheES6.prototype, objeto); // también podría pasarle JSON.parse(cadena) en lugar de objeto

console.log("Con Object.assign  indicamos la clase para un objeto, ejemplo, obtenemos un objeto de la clase CocheES6: " + objetoCocheES6.toString());