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



let t;
let contador = 5;

const cada5segundos = () => {
    alert('han pasado 5 segundos');
    if (contador <= 0) {
        clearInterval(t);
    } else {
        contador--;
    }
};

const hazInterval = evento => {
    evento.preventDefault();
    t = setInterval(cada5segundos, 5000);
};

document.getElementById('interval').addEventListener('click', hazInterval);