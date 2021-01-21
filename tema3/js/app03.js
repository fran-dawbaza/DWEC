//document.cookie = "dato=loquesea&usuario=pepito;expires=Fri, 16 Oct 2020 12:13:00 GMT";

document.cookie = "dato=loquesea&usuario=pepito;max-age=10";

// Ejemplo localStorage

localStorage.setItem('usuario', 'pepito');
localStorage.setItem('nombre', 'José');
localStorage.setItem('dirección', 'en chikitistán');

alert('Bienvenido ' + localStorage.getItem('usuario'));

alert('hay ' + localStorage.length + ' elementos en localStorage');

localStorage.removeItem('usuario');

for (let i = 0; i < localStorage.length; i++) {
    console.log(
        'llave: ' +
        localStorage.key(i) +
        ', valor: ' +
        localStorage.getItem(localStorage.key(i)));
}



;