let timer;
let timerTimeOut;

const temporizador = function() {
    console.log(new Date());
    console.log("se ejecutó el temporizador");
};

const temporizador2 = function() {
    console.log(new Date());
    console.log("se ejecutó el temporizador2");
};

const mensajes = function() {
    console.log(new Date());
    timerTimeOut = setTimeout(temporizador, 3000);
    timer = setInterval(temporizador2, 4000);
    console.log("terminó");
};

const paraTemporizador2 = function() {
    clearInterval(timer);
    clearTimeout(timerTimeOut);
};

addEventListener('load', mensajes);

document.getElementById('para').addEventListener('click', paraTemporizador2);

document.getElementById('comienza').addEventListener('click', mensajes);

alert('Bienvenido ' + localStorage.getItem('usuario'));