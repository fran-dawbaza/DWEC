const muebles = [{
        'tipo': 'silla',
        'patas': 4,
        'color': 'verde'
    },
    {
        'tipo': 'silla',
        'patas': 5,
        'color': 'azul'
    },
    {
        'tipo': 'mesa',
        'patas': 3,
        'color': 'verde'
    }
];

// Guardar en localStorage

const cMuebles = JSON.stringify(muebles);

localStorage.setItem('muebles', cMuebles);


const sillas = muebles.find(i => i.tipo === 'silla');
const verdes = muebles.filter(i => i.color === 'verde');
const masDe4patas = muebles.filter(i => i.patas > 3);

console.log(sillas);
console.log(verdes);
console.log(masDe4patas);

// muebles con el doble de patas

/*const doblePatas = muebles.map(
    i => {
        i.patas = i.patas * 2
        return i;
    });
*/
const doblePatas = muebles.map(i => i.patas * 2);

console.log(doblePatas);

/*const numPatas = muebles.reduce(
    (acumulador, actual) => acumulador + actual.patas, 0
);*/

const monstruoMueble = muebles.reduce(
    (acumulador, actual) => {
        acumulador.tipo += actual.tipo + '-';
        acumulador.patas += actual.patas;
        acumulador.color += actual.color + ' ';
        return acumulador;
    }, { 'tipo': '', 'patas': 0, 'color': '' }
);
console.log(monstruoMueble);

console.log(muebles);