let contador = 0;

const validaNombre = e => {
    if (document.forms.f1.nombre.value.length > 0) {
        console.log("Campo relleno y OK");
        contador++;
    } else {
        console.log("Campo no relleno aún");
    }
    console.log(contador);
}

addEventListener('click', validaNombre, true);

document.getElementById('contenedor').addEventListener('click', validaNombre, true);
document.forms.f1.addEventListener('click', validaNombre, true);

document.forms.f1.nombre.addEventListener('click', validaNombre, true);