/*
Los operadores ariméticos son los típicos:
+
-
*
/
%
++
--

El operador de asignación es el igual:
=
+=
-=
*=
/=
%=

Los operadores lógicos los vemos después

*/

let x1 = '1';
let x2 = 2;

console.log(parseInt(x1) + x2);


let y1 = 1;
let y2 = 2;

let y3 = new Number();

console.log("tipo de y1: " + typeof y1);

console.log(y1.toString() + y2.toString());

console.log("tipo de y3: " + typeof y3);

let log1 = true;
let log2 = false;

console.log("0.1+0.2 da: " + (0.1 + 0.2).toPrecision(2));
console.log("0.1+0.2 da: " + (0.1 + 0.2));

let A = 1;

console.log("A es: " + A + ", A+=3 da: " + (A += 3));