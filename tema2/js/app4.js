/* 
Los datos tipo array son listas de elementos 
(no tienen que ser del mismo tipo) a los que 
accedemos por un índice
*/

var mascotas = ["perros", "gatos", "peces", "pajaritos"];
/*
console.log(`me encantan los ${mascotas[0]}`);

for (let i = 0; i < mascotas.length; i++) {
    console.log(mascotas[i]);
}

console.log(mascotas.pop());
console.log("Los elementos de mascotas ahora son: ", mascotas);
console.log("Si añado tortugas, el nuevo tamaño del array es: ", mascotas.push("tortugas"));
console.log("Los elementos de mascotas ahora son: ", mascotas);*/

console.log(mascotas.reverse());
console.log(mascotas);

mascotas.sort();

console.log(mascotas);

let numeros = ["4", "6", "8", "1", "c", 17, 32, "c", "a", "b"];
console.log(numeros.sort());
numeros.push(1000);
console.log(numeros.sort());

/*const mySort = function ordena(a, b) {
    if (b.toString() > a.toString()) {
        return 1;
    } else if (b.toString() < a.toString()) {
        return -1;
    } else {
        return 0;
    }
}*/

const mySort = function(a, b) {
    return (b - a);
}

//const mySort = (a, b) => b - a;

console.log(numeros.sort(mySort));

console.log(typeof mySort);

console.log(numeros.lastIndexOf("c"));

let subarray = numeros.slice(1, 5);

console.log(subarray);
console.log(numeros);

numeros.splice(3, 2, 54, 12, "ahora esto", 2, [4, 6]);
console.log(numeros);