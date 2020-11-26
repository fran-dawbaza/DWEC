const arrA = ['pepe', 'paco', 'sancho'];

const arrB = ['pepa', ...arrA, 'flora'];

//console.log(arrA);
//console.log(arrB);


function lista(...x) {
    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}

//lista(...arrB, 'pedro', 'julia');

const [nombre1, nombre2] = arrB;

/*const nombre1 = 'pepe';
const nombre2 = 'paco';*/

console.log(nombre1);
console.log(nombre2);

const persona = {
    nombre: 'paco',
    edad: 22,
    correo: 'paco@loquesea.es'
};
const personaB = {
    nombre: 'paca',
    edad: 21,
    correo: 'paca@loquesea.es'
};

const {...otraPersona } = persona;

console.log(otraPersona);

const { nombre, correo, edad } = persona;

console.log(nombre, edad, correo);

const { correo: c } = personaB;

console.log(c);

/*let persona2 = new Object();
persona2.loquesea = 'hola';

[persona2.nombre2, persona2.edade, persona2.correoL] = [persona.nombre, persona.correo, persona.edad];
console.log(persona2);


let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

[a, b, rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: 30
*/

const array1 = [5, 2, 8, 130, 44];

function mayorQue10(element) {
    return element > 10;
}

const mayorQue10Flecha = element => element > 10;

const found = array1.find(mayorQue10Flecha);
const index = array1.findIndex(mayorQue10Flecha);

console.log(found, index);
// expected output: 12


const inventario = [
    { nombre: 'manzanas', cantidad: 2 },
    { nombre: 'bananas', cantidad: 0 },
    { nombre: 'cerezas', cantidad: 5 }
];

function esCereza(fruta) {
    return fruta.nombre === 'cerezas';
}

const { cantidad: cantidadDeCerezas } = inventario.find(el => el.nombre === 'cerezas');
// { nombre: 'cerezas', cantidad: 5 }
console.log(cantidadDeCerezas);