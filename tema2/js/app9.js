const calculaVolumen = function(evento) {

    evento.preventDefault(); // detiene el envío del formulario

    // radio será un número, primitivo
    const radio = Number(document.getElementById('radio').value);

    // salida será un objeto que representa un párrafo en HTML
    const salida = document.getElementById('salida');

    if (isNaN(radio) || radio < 0) {
        salida.innerHTML = "Error, el radio debe ser un número positivo";
        salida.style.color = "red";
        return;
    }

    // Si es un número positivo continúo

    salida.style.color = "blue";

    // const volumen = 4 * Math.PI * radio * radio * radio / 3;
    const volumen = 4 * Math.PI * Math.pow(radio, 3) / 3;

    if (evento.detail == 0) {
        salida.innerHTML = `mouseover: El volumen de una esfera de radio ${radio} es ${volumen}`;
    } else if (evento.detail == 1) {
        salida.innerHTML = `click: El volumen de una esfera de radio ${radio} es ${volumen}`;
    } else {
        salida.innerHTML = `otro evento: El volumen de una esfera de radio ${radio} es ${volumen}`;
    }

};

document.getElementById('calcula').addEventListener('click', calculaVolumen);
document.getElementById('calcula').addEventListener('mouseover', calculaVolumen);