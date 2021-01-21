const miFecha = new Date();

const parrafo = document.getElementById("fecha");

parrafo.innerHTML = miFecha;

let hora = miFecha.getHours();
let minutos = miFecha.getMinutes();
let segundos = miFecha.getSeconds();

const ampm = (hora < 12) ? 'am' : 'pm';
hora = (hora > 12) ? hora - 12 : hora;

hora = (hora < 10) ? '0' + hora : hora;
minutos = (minutos < 10) ? '0' + minutos : minutos;
segundos = (segundos < 10) ? '0' + segundos : segundos;



parrafo.innerHTML += `<br> Hora actual: ${hora}:${minutos}:${segundos} ${ampm}`;

const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

const diaSemana = miFecha.getDay();

parrafo.innerHTML += `<br> Hoy es: ${dias[diaSemana]}`;