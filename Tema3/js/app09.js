// con console.time y console.timeEnd mostramos el tiempo trascurrido entre esas 2 llamadas

console.time("tiempo de carga del diccionario");
// diccionario.js sólo contiene la declaración del array diccionario y su exportación
// a continuación importamos el array diccionario
import { diccionario } from './diccionario.js';
console.timeEnd("tiempo de carga del diccionario");

console.log("hay " + diccionario.length + " palabras en el diccionario");

console.time("tiempo de búsqueda de patata");
let estaPatata = diccionario.includes('patata');
console.timeEnd("tiempo de búsqueda de patata");
console.log("¿El diccionario contiene la palabra patata?: " + estaPatata);

console.time("tiempo de búsqueda de zoo");
let estaZoo = diccionario.includes('zoo');
console.timeEnd("tiempo de búsqueda de zoo");
console.log("¿El diccionario contiene la palabra zoo?: " + estaZoo);

console.time("tiempo de búsqueda de patatazoor");
let estaPatatazoor = diccionario.includes('patatazoor');
console.timeEnd("tiempo de búsqueda de patatazoor");
console.log("¿El diccionario contiene la palabra patatazoor?: " + estaPatatazoor);