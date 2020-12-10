const misMuebles = JSON.parse(localStorage.getItem('muebles'));


const tabla = document.getElementById('tablaMuebles');

console.log(tabla.innerHTML);

const fragmento = document.createDocumentFragment();

for (const mueble of misMuebles) {
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    td1.append(mueble.tipo);
    td2.append(mueble.patas);
    td3.append(mueble.color);
    const tr = document.createElement('tr');
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    fragmento.append(tr);
    //tabla.innerHTML += `<tr><td>${mueble.tipo}</td><td>${mueble.patas}</td><td>${mueble.color}</td></tr>`;
}

//tabla.children[0].append(fragmento);
tabla.firstElementChild.appendChild(fragmento);

console.log(tabla);