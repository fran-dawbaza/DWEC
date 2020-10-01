'use strict';

var v1;
var v2 = 3;

let v3 = 10;

/*
 El ámbito de variables declaradas con var es
 de función (o de programa principal).
 
 El ámbito de variables declaradas con let es
 de bloque (lo que hay entre llaves).
 
 */


function mensaje() {
    var v1 = 2;
    console.log("V1 dentro es: " + v1);
    v2 = 22;
    console.log("V2 dentro es: " + v2);
    let v3 = 20;
    console.log("V3 dentro es: " + v3);
    let v4;
    if (v3 > 10) {
        let v4 = 5;
        console.log("V4 dentro de bloque es: " + v4);
    }
    console.log("V4 dentro de función (fuera de bloque) es: " + v4);
}

v1 = 1;
mensaje();

console.log("V1 fuera es: " + v1);
console.log("V2 fuera es: " + v2);
console.log("V3 fuera es: " + v3);