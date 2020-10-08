/*
let step;

for (step = 0; step < 5; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    salida.innerHTML += '<br>Camina un paso hacia el este, estoy en el paso ' + step;
}

try {
    salida.innerHTML += '<br>Ya me cansé, he caminado ' + step + ' pasos';
} catch {
    salida.innerHTML += '<br>Sucedió un error!'
}*/

const dibujaRombo = evento => {
    
    evento.preventDefault();

    const tope = Number(document.getElementById('tamanio').value);
    const salida = document.getElementById('salida');

    if (isNaN(tope) || tope < 1 || tope > 100){
        salida.innerHTML="Error, el tamaño indicado debe ser número entre 1 y 99";
        salida.style.color='red';
        return;
    }
    salida.style.color='blue';
    salida.innerHTML='';

    const espacio='&nbsp;';
    const asterisco='*';

    let num_espacios=tope-1;

    // Si véis esta solución, implementar otra que no use el método repeat
    // así os obligo a usar bucles anidados

    for (let i=0; i<tope;i++){
        salida.innerHTML += espacio.repeat(num_espacios--);
        salida.innerHTML += asterisco.repeat(1+i*2);
        salida.innerHTML += '<br>';
    }
    num_espacios=1;
    for (let i=tope-2; i>=0;i--){
        salida.innerHTML += espacio.repeat(num_espacios++);
        salida.innerHTML += asterisco.repeat(1+i*2);
        salida.innerHTML += '<br>';
    }
};

document.getElementById('pinta').addEventListener('click',dibujaRombo);