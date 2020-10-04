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

let p = document.querySelector('p');
p.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target);
})