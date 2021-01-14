const coches = [

    { 'marca': 'seat', 'modelo': 'panda', 'año': 1982 },

    { 'marca': 'ford', 'modelo': 'mondeo', 'año': 2018 },

    { 'marca': 'toyota', 'modelo': 'avensis', 'año': 2013 },

    { 'marca': 'ford', 'modelo': 'fiesta', 'año': 1996 }

];

const ordenadoPorAño = coches.sort((a, b) => Number(a.año) - Number(b.año));
console.log("uno");
console.dir(ordenadoPorAño);
console.log("dos");
debugger;

const ordenadoPorMarcaYModelo = coches.sort((a, b) => {
    if (a.marca < b.marca) return -1;
    else if (a.marca > b.marca) return 1;
    else if (a.modelo < b.modelo) return -1;
    else if (a.modelo > b.modelo) return 1;
    else return 0;
});
console.log(ordenadoPorMarcaYModelo);
console.log("tres");

const marcaFord = coches.filter(coche => coche.marca === 'ford');
console.log(marcaFord);

const despuesDel2000 = coches.filter(coche => coche.año > 2000);
console.log(despuesDel2000);

const modeloYAño = coches.map(coche => {
    return { 'modelo': coche.modelo, 'año': coche.año };
});
console.log(modeloYAño);

const mediaFabricacion = coches.reduce((acu, coche, indice, arr) => {
    if (indice + 1 == arr.length) return (acu + coche.año) / arr.length;
    else return acu + coche.año;
}, 0);
console.log(mediaFabricacion);

const sumaFabricacion = coches.reduce((acu, coche) => acu + coche.año, 0);
console.log(sumaFabricacion / coches.length);

const primeroConF = coches.find(coche => coche.modelo[0] === 'f');
console.log(primeroConF);
const modelosConF = coches.filter(coche => coche.modelo[0] === 'f');
console.log(modelosConF);

const cochesExtras = [

    { 'marca': 'seat', 'modelo': 'panda', 'año': 1982, 'extras': ['audio deLuxe', 'ruedas chulas'] },

    { 'marca': 'ford', 'modelo': 'mondeo', 'año': 2018, 'extras': ['Tapizado cuero', 'ruedas chulas'] },

    { 'marca': 'toyota', 'modelo': 'avensis', 'año': 2013, 'extras': ['audio deLuxe', 'ruedas chulas'] },

    { 'marca': 'ford', 'modelo': 'fiesta', 'año': 1996, 'extras': ['audio deLuxe', 'ruedas chulas'] }

];

//no vale
/*
const copiaObjeto = obj => {
    return {...obj };
};

const copia = copiaObjeto(cochesExtras[0]);
*/
const copiaObjeto = obj => JSON.parse(JSON.stringify(obj));

const copia = copiaObjeto(cochesExtras);

const copiaObjeto2 = obj => Object.assign(obj);
const copia2 = copiaObjeto2(cochesExtras);