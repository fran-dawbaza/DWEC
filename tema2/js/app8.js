const ordenar = function(evento) {
    evento.preventDefault(); // detiene el envío del formulario

    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const n3 = Number(document.getElementById('n3').value);

    const parrafo = document.getElementById('resultado');

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        parrafo.innerHTML = 'Error, debes introducir valores numéricos<br>Ejemplos 3, -6.4,  8.234e-2';
        parrafo.style.color = 'red';
        return;
    } else {
        parrafo.style.color = 'blue';
    }

    /*
        Casos posibles:
        A  n1 < n2 < n3
        B  n1 < n3 < n2
        C  n2 < n1 < n3  
        D  n2 < n3 < n1
        E  n3 < n1 < n2
        F  n3 < n2 < n1
    */
    /*
        if (n1 < n2) { // Casos A, B y E
            if (n2 < n3) { // Caso A
                parrafo.innerHTML = `${n1} ${n2} ${n3}`;
            } else if (n3 < n1) { // Caso E
                parrafo.innerHTML = `${n3} ${n1} ${n2}`;
            } else { // Caso B
                parrafo.innerHTML = `${n1} ${n3} ${n2}`;
            }
        } else { // Casos C, D y F
            if (n2 < n3) { // Casos C y D
                if (n1 < n3) { // Caso C
                    parrafo.innerHTML = `${n2} ${n1} ${n3}`;
                } else { // Caso D
                    parrafo.innerHTML = `${n2} ${n3} ${n1}`;
                }
            } else { // Caso F
                parrafo.innerHTML = `${n3} ${n2} ${n1}`;
            }
        } */

    if (n1 <= n2 && n2 <= n3) { // caso A
        parrafo.innerHTML = `${n1} ${n2} ${n3}`;
    } else if (n1 <= n3 && n3 <= n2) { // caso B
        parrafo.innerHTML = `${n1} ${n3} ${n2}`;
    } else if (n2 <= n1 && n1 <= n3) { // caso C
        parrafo.innerHTML = `${n2} ${n1} ${n3}`;
    } else if (n2 <= n3 && n3 <= n1) { // caso D
        parrafo.innerHTML = `${n2} ${n3} ${n1}`;
    } else if (n3 <= n1 && n1 <= n2) { // caso E
        parrafo.innerHTML = `${n3} ${n1} ${n2}`;
        //    } else if (n3 <= n2 && n2 <= n1) { // caso F
    } else {
        parrafo.innerHTML = `${n3} ${n2} ${n1}`;
    } // else {
    //   parrafo.innerHTML = '¡¡¡Caso imprevisto!!!';
    //}

};

const ordena = document.getElementById("ordena");

ordena.addEventListener('click', ordenar);