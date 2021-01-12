function loadScript(src) {
    // crea una etiqueta <script> y la agrega a la página
    // esto hace que el script dado: src comience a cargarse y ejecutarse cuando se complete
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
  }
/*
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
*/

loadScript('./js/01script2.js');
/*
uno();
retardo(300);
dos();
retardo(500);
*/



/*let cont = 0;
for (let i = 0; i < 100000000; i++) {
    cont += i;
}
console.log('Los primeros 100000000 suman: ', cont);*/