const digitos = /\d/g;

const digitos2 = /tiene/i;

const noDigitos = /\D/g;

const gorrito = /^[0-9]/g; // ^ -> que empieza por 0-9
//const gorrito = /[^0-9]/g; // ^ -> rango que no es 0-9

const regexpWords = /\b\w+\b/g;
console.log("España es genial".match(regexpWords));
// expected output: Array ["Espa", "a", "es", "genial"]

const regexpFoxQuality = /\w+(?=\s\w+$)/; // penúltima palabra
console.log("España es genial".match(regexpFoxQuality));

const frase = '4 Esta frase TieNe los números 0123455';

console.log(frase.match(digitos));
console.log(frase.match(digitos2));
console.log(frase.match(noDigitos));
console.log(frase.match(gorrito));