/*
// Ejemplo de callback sin instrucciones I/O-bound

function f1(cb) {
    console.log('antes del cb');
    cb();
    console.log('después del cb');
}

f1(function() { console.log('dentro del cb'); });

// -- En este caso mostrará por consola:
// antes del cb
// dentro del cb  
// después del cb
*/

// Esta función carga el script pasado como argumento (src)
// la función de callback se ejecutará asíncronamente, tras
// la carga del archivo del script
function loadScript(src, cb) {
    // crea una etiqueta <script> y la agrega a la página
    // esto hace que el script dado: src comience a cargarse y ejecutarse cuando se complete
    let script = document.createElement('script');
    script.src = src; // <<<<<--- OJO es una I/O-bound
    // añadimos cb al evento onload, que se ejecutará tras la carga
    script.addEventListener('load', cb);
    // añadimos un mensaje por consola al evento onerror, 
    // que se ejecutará si se produce error en la carga
    script.addEventListener('error', () =>
        console.log(`no se puede cargar ${src}`));
    document.head.append(script);
}

const uno = () => {
    console.log('Dentro de uno()');
};

const dos = () => {
    console.log('Dentro de dos()');
    tres();
    console.log('Dentro de dos(), después de llamar a tres()');
};

const tres = () => {
    retardo(0);
    console.log('Dentro de tres()');
};


// Desglosamos el código para que quede más legible

const cb_load_3 = () => {
    loadScript('./js/01script2.js', cb_load_2);
};

const cb_load_2 = () => {
    uno();
    retardo(3000);
    dos();
    retardo(5000);
};


loadScript('./js/01script3.js', cb_load_3);

/*
// El código que hay entre las líneas 51 y 65 se puede escribir así,
// queda más compacto pero menos legible:

loadScript('./js/01script3.js', ()=> {
    loadScript('./js/01script2.js', ()=>{
        uno();
        retardo(3000);
        dos();
        retardo(5000);
    });
});


*/


/*
// Esto no funciona correctamente, no hay garantía de que se
// carge antes el script3 que el script2, por lo que podría no estar
// definida la función mensaje
loadScript('./js/01script3.js', null);

loadScript('./js/01script2.js', () => {
    uno();
    retardo(3000);
    dos();
    retardo(5000);
});
*/

/* 
// Esto no funciona, error: no está definida la función retardo

loadScript('./js/01script2.js', null);

uno();
retardo(3000);
dos();
retardo(5000);
*/

//setTimeout(() => { console.log('Sin retardo') }, 0);

/*
const f_callback = () => {
    //uno();
    retardo(300);
    //dos();
    retardo(500);
}; */



/* Este código es pesado para ejecutar 
let cont = 0;
for (let i = 0; i < 1000000000; i++) {
    cont += i;
}
console.log('Los primeros 1000000000 suman: ', cont);
*/