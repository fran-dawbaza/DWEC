/* Operadores lógicos

!   -> negación
&&  -> operador Y
||  -> operador O


*/

let num1 = 4;
let cad1 = '';
let num2 = 0;
let cad2 = 'hola';
let fecha = new Date();
let fecha2 = new Date();
let dato;

console.log(fecha, fecha2);


// if (num1 && cad1) { // es false
if (fecha || cad1) {
    console.log("El resultado es true");
} else {
    console.log("El resultado es false");
}

/* Operadores de comparación:

>   -> mayor
<   -> menor
>=  
<=
==
!=
===    -> igualdad estricta o identidad
!==    -> desigualdad estricta

? :    -> operador ternario 
        --> (expresion)? si_true:si_false
*/

if (num1 > 0 && fecha) { // da true
    console.log("El resultado es true");
} else {
    console.log("El resultado es false");
}

//if (null == undefined) { // da true
//if (num2 == cad1) { // da true
//if (null === dato) { // da false
if (undefined === dato) { // da true
    console.log("El resultado es true");
} else {
    console.log("El resultado es false");
}

if (fecha === fecha2) {
    console.log("El resultado es true");
} else {
    console.log("El resultado es false");
}

let fecha3 = fecha;

if (fecha === fecha3) {
    console.log("El resultado es true");
} else {
    console.log("El resultado es false");
}