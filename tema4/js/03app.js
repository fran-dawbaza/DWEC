function maximoAlcanzado(evento) {
    //return (this.value.length < 20); // así no funciona
    if (this.value.length >= 20) // así sí
        evento.preventDefault();
    console.log(this.value.length);
    console.log('La tecla pulsada es: ' + evento.key);
    console.log('El código de la tecla pulsada es: ' + evento.keyCode);
}

/*function maximoEstaAlcanzado() {
    console.log(document.getElementById('texto').value.length);
    return (document.getElementById('texto').value.length < 20);
    //if (this.value.length >= 20)
    //    evento.preventDefault();
}*/

document.getElementById('texto').addEventListener('keypress', maximoAlcanzado);

document.getElementById('texto').addEventListener('focus', (e) => {
    document.getElementById('texto').classList.add('estilotextarea');
    console.log('El campo texto tiene el foco');
});
document.getElementById('texto').addEventListener('blur', () => {
    document.getElementById('texto').classList.remove('estilotextarea');
    console.log('El campo texto ya no tiene el foco');
});