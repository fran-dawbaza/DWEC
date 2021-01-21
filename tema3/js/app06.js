/*
Esta aplicación es usada como lista de la compra,
Añadimos artículos a la lista de 'nuevos', tantos como
queramos. Dichos artículos podemos moverlos a la lista de 
'comprados' en cualquier momento. También podemos borrar o
eliminar los artículos de la lista de 'comprados'.

Para almacenar las dos listas usaremos localStorage, 
usaremos el artículo o producto como key y el nombre de 
la lista donde se encuentra como valor.

Requisitos HTML:

* Los artículos se capturan de un campo de formulario de tipo texto, con id 'producto'.
* El botón submit del formulario tiene id 'nuevoProducto'
* El botón para borrar los artículos tiene id 'borrar'
* La lista (UL) para artículos nuevos tiene id 'listaCompra-nuevos'
* La lista (UL) para artículos comprados tiene id 'listaCompra-comprados'

*/

/*
  la función nuevoLI añade un nuevo elemento <li> a la lista listaCompra-nuevos o listaCompra-comprados.
  Como parámetros le pasamos el nombre de producto y el nombre de la lista (que es el estado del producto).
*/
const nuevoLI = (producto, estado) => {
    if (estado != 'nuevos' && estado != 'comprados') return;

    let checkbox = document.createElement('input');
    let li = document.createElement('li');

    checkbox.type = 'checkbox';
    checkbox.name = producto;
    if (estado == 'comprados') {
        checkbox.checked = true;
    }

    li.name = producto;
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(producto));
    console.log(li);
    document.getElementById('listaCompra-' + estado).appendChild(li);
};

/* 
La función muestraListas refresca el contenido de las
listas de la compra, para ello, primero vacía las listas
HTML y luego le añade los <li> correspondientes.
*/

const muestraListas = () => {
    let ul1 = document.getElementById('listaCompra-nuevos');
    let ul2 = document.getElementById('listaCompra-comprados');
    let li;

    //Borramos las listas
    while (li = ul1.firstChild)
        ul1.removeChild(li);
    while (li = ul2.firstChild)
        ul2.removeChild(li);

    //Añadimos los <li> a cada lista
    for (let i = 0; i < localStorage.length; i++) {
        let lista = localStorage.getItem(localStorage.key(i));
        nuevoLI(localStorage.key(i), lista);
    }
};

/*
La función nuevoProducto será llamada en el submit del formulario.
Si hemos introducido algún artículo en el campo 'producto',
captura el nombre de un artículo nuevo y lo añade a localStorage 
a la lista nuevos, después refresca en HTML las listas de productos.
*/
const nuevoProducto = e => {
    e.preventDefault();
    const producto = document.getElementById('producto').value;
    if (producto != '') {
        localStorage.setItem(producto, "nuevos");
        document.getElementById('producto').value = '';
        muestraListas();
    } else {
        // podemos mostrar error aquí
    }
};

/*
La función marcaProducto se llama al hacer clic en el checkbox del 
producto o en el elemento <li> en la lista 'listaCompra-nuevos'.
Cambia el artículo de la lista listaCompra-nuevos a listaCompra-comprados,
para ello actualiza el valor del artículo en localStorage.
Después refresca en HTML las listas de productos.
*/
const marcaProducto = evento => {
    evento.preventDefault();
    let producto;
    // si evento.target.name es undefined se hizo clic en el <li>
    // si evento.target.name tiene valor se hizo clic en el checkbox
    if (evento.target.name)
        producto = evento.target.name;
    else
        producto = evento.target.innerText;
    localStorage.setItem(producto, "comprados");
    muestraListas();
};

/*
La función desMarcaProducto se llama al hacer clic en el checkbox del 
producto o en el elemento <li> en la lista 'listaCompra-comprados'.
Cambia el artículo de la lista listaCompra-comprados a listaCompra-nuevos,
para ello actualiza el valor del artículo en localStorage.
Después refresca en HTML las listas de productos.
*/
const desMarcaProducto = evento => {
    evento.preventDefault();
    let producto;
    // si evento.target.name es undefined se hizo clic en el <li>
    // si evento.target.name tiene valor se hizo clic en el checkbox
    if (evento.target.name)
        producto = evento.target.name;
    else
        producto = evento.target.innerText;
    localStorage.setItem(producto, "nuevos");
    muestraListas();
};

/*
La función borraProductos se llama al hacer clic en el botón 'borrar'.
Elimina de localStorage los artículos que están en la lista 'comprados'
Después refresca en HTML las listas de productos.
*/
const borraProductos = evento => {
    evento.preventDefault();
    for (let i = localStorage.length - 1; i >= 0; i--) {
        if (localStorage.getItem(localStorage.key(i)) == 'comprados') {
            console.log('borrando ' + localStorage.key(i));
            localStorage.removeItem(localStorage.key(i));
        }
    }
    muestraListas();
}



// Eventos añadidos

document.getElementById('listaCompra-nuevos').addEventListener('click', marcaProducto);
document.getElementById('listaCompra-comprados').addEventListener('click', desMarcaProducto)

document.getElementById('nuevoProducto').addEventListener('click', nuevoProducto);
document.getElementById('formulario').addEventListener('submit', nuevoProducto);
document.getElementById('borrar').addEventListener('click', borraProductos);
addEventListener('load', muestraListas);