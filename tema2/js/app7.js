/*

*/

let persona = {
    nombre: "Juan",
    apellidos: "Pérez",
    edad: 22,
    "hobbies y aficiones": ["fútbol", "gamming", "series", "siesta"]
}

//console.log(persona);

persona.domicilio = "Calle las Piruleta, 24";

// console.log(persona);

const p2 = persona;

p2.nombre = "David";
persona = null;

//console.log(persona);




//console.log(persona);
//console.log(p2['hobbies y aficiones']);

for (const key in p2) {
    console.log(`Propiedad->${key}, valor -> ${p2[key]}`);
}

/* No es iterable, error
for (const iterator of p2) {
    console.log(iterator);
}
*/

function Coche(fabricante, modelo, ejercicio) {
    this.fabricante = fabricante
    this.modelo = modelo
    this.ejercicio = ejercicio
}

miCoche = new Coche("Honda", "Accord", 1998)

a = miCoche instanceof Coche // devuelve verdadero (true)
b = miCoche instanceof Object // devuelve verdadero (true)

console.log(a, b);

const f_evento = function(e) {
    e.preventDefault(); // Detiene el comportamiento "normal" del evento
    console.log(e); // Objeto que dispara el evento
}

// Devuelve el primer objeto de tipo párrafo que encuentre
let p = document.querySelector('p');
<<<<<<< HEAD
p.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target);
    console.log(this);
});
=======

// Asociamos al evento click la función f_evento
p.addEventListener('click', f_evento);

/*
document.querySelector('p').addEventListener('click', function(e) { e.preventDefault(); console.log(e);});
*/
>>>>>>> 3fcf3e0fbeba33063d3a60ffed4cc4cbc92c2578
