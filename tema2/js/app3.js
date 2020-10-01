/*
Hay 7 tipos de datos primitivos

- Number  (números)
- String  (cadenas de texto)
- Boolean (true, false)

- undefined
- null
- Symbol
- Bigint

*/

let a;
let b;

a = 3;
b = a;

a = 4;
console.log("a vale: " + a + " y b vale: " + b);

let c = a.toString();

console.log("El tipo de a es: " + typeof a + " y su valor es: " + a);

let texto = "  Hola mundo la navidad llama ";
/*

(method) String.split(separator: string | RegExp, limit?: number): string[] (+1 overload)
Split a string into substrings using the specified separator and return them as an array.

@param separator — A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.

@param limit — A value used to limit the number of elements returned in the array.

*/

let texto2 = texto.trim().toUpperCase().split('LA');

console.log(texto.toUpperCase());
console.log(texto + " y su tamaño es: " + texto.length);
console.log(texto2);

console.log("La subcadena navi se encuentra en la posición: " + texto.indexOf('a'));

let encontrado = -1;

do {
    encontrado = texto.indexOf('a', encontrado + 1);
    if (encontrado > -1) {
        console.log("La a se encuentra en la posición: " + encontrado);
    } else {
        console.log("No hay más ocurrencias de la a.");
    }
} while (encontrado > -1);


/* trabajando con expresiones lógicas */

console.log(encontrado > -1);
console.log(encontrado);

let variableSinDefinir;
console.log(variableSinDefinir);

let variableNull = null;
console.log(variableNull);

// Probar descomentando una de estas líneas

// encontrado = 0; 
// encontrado = -1;
// encontrado = variableSinDefinir;
// encontrado = variableNull;
// encontrado = texto;
// encontrado = '';
// encontrado = ' ';
// encontrado = new Number(0);

encontrado = (7 > 10);


console.log(!!(encontrado));

if (encontrado) {
    console.log("Encontrado es cierto");
} else {
    console.log("Encontrado es falso");
}

/* operador de negación: ! */

let nombre = "Pablito";
let edad = 23;

// Template string
console.log(`Hola soy ${nombre} y tengo ${edad+5} años`);