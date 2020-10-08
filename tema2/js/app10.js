const salida = document.getElementById('salida');
let step;

for (step = 0; step < 5; step++) {
    // Se ejecuta 5 veces, con valores del paso 0 al 4.
    salida.innerHTML += '<br>Camina un paso hacia el este, estoy en el paso ' + step;
}

try {
    salida.innerHTML += '<br>Ya me cansé, he caminado ' + step + ' pasos';
} catch {
    salida.innerHTML += '<br>Sucedió un error!'
}