const nombres = ['Pepito', 'Manolito', 'Miguelón', 'Rosita', 'Ricardín'];


// Es el modo correcto para que no afecte al rendimiento
const fragmento = document.createDocumentFragment();

for (const nombre of nombres) {
    const li = document.createElement('li');
    //li.append(nombre); // esta línea puede sustituir a las 2 siguientes
    const texto = document.createTextNode(nombre);
    li.appendChild(texto);
    li.setAttribute('style', 'list-style-type:square');
    fragmento.appendChild(li);
}

document.getElementById('nombres').appendChild(fragmento);


/*
// Se puede hacer así, cuando no afecte al rendimiento
const listaNombres = document.getElementById('nombres');
for (const nombre of nombres) {
    const li = document.createElement('li');
    //li.append(nombre);
    const texto = document.createTextNode(nombre);
    li.appendChild(texto);
    listaNombres.appendChild(li);

}*/

/*
// Se puede hacer así, cuando no afecte al rendimiento
const listaNombres = document.getElementById('nombres');
for (const nombre of nombres) {
    listaNombres.innerHTML += `<li>${nombre}</li>`;
}*/

const coches = [{
        'marca': 'Seat',
        'modelo': 'Ateca',
        'año': 2018,
        'color': 'verde'
    },
    {
        'marca': 'Opel',
        'modelo': 'Corsa',
        'año': 1990,
        'color': 'blanco'
    },
    {
        'marca': 'Citröen',
        'modelo': 'C4',
        'año': 2014,
        'color': 'negro'
    },
    {
        'marca': 'Audi',
        'modelo': 'A4',
        'año': 2014,
        'color': 'rojo pasión'
    }
];


const fragment = document.createDocumentFragment();

const cochesOpel = coches.filter(c => c.marca == 'Opel');

/*function mayorQue2010(coche) {
    return coche.año > 2010;
}*/

const mayorQue2010 = coche => coche.año > 2010;
const menorQue2010 = coche => !(coche.año > 2010);


const cochesModernos = coches.filter(mayorQue2010);
const cochesAntiguos = coches.filter(menorQue2010);

for (const coche of cochesAntiguos) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.setAttribute('style', 'border: 1px solid black;');
    td1.append(coche.marca);
    tr.appendChild(td1);
    const td2 = document.createElement('td');
    td2.setAttribute('style', 'border: 1px solid black;');
    td2.append(coche.modelo);
    tr.appendChild(td2);
    const td3 = document.createElement('td');
    td3.setAttribute('style', 'border: 1px solid black;');
    td3.append(coche.año);
    tr.appendChild(td3);
    const td4 = document.createElement('td');
    td4.setAttribute('style', 'border: 1px solid black;');
    td4.append(coche.color);
    tr.appendChild(td4);

    fragment.appendChild(tr);
}

document.getElementById('coches').appendChild(fragment);