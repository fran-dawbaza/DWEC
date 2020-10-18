const ordena = (e) => {
    e.preventDefault();
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);
    const n3 = Number(document.getElementById("n3").value);

    console.log(n1, n2, n3);


    let texto = document.getElementById("texto");

    // Validación de entradas: si alguno de los valores introducidos no es un número, muestro error y termino.
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        texto.innerHTML = "Error, debes introducir valores numéricos.";
        texto.style.color = 'red';
        return true;
    } else {
        texto.style.color = 'blue';
    }

    /* Ordenaciones posibles:
    A: n1 < n2 < n3    
    B: n1 < n3 < n2
    C: n2 < n1 < n3
    D: n2 < n3 < n1
    E: n3 < n1 < n2
    F: n3 < n2 < n1

    no hay más posibilidades.  Vamos a filtrar con if else los diferentes casos:
    */

    if (n1 < n2) { // casos posibles para n1 < n2: A, B y E
        if (n2 < n3) { // casos posibles para n1 < n2 y n2 < n3: A
            texto.innerHTML = `${n1} ${n2} ${n3}`;
        } else { // casos posibles (n1 < n2 y n2 >= n3): B y E
            if (n1 < n3) { // caso B
                texto.innerHTML = `${n1} ${n3} ${n2}`;
            } else { // caso E
                texto.innerHTML = `${n3} ${n1} ${n2}`;
            }
        }
    } else { // casos posibles (n1 > n2): C, D y F
        if (n2 < n3) { // casos posibles (n1 >= n2 y n2 < n3): C y D
            if (n1 < n3) { // caso C
                texto.innerHTML = `${n2} ${n1} ${n3}`;
            } else { // caso D
                texto.innerHTML = `${n2} ${n3} ${n1}`;
            }
        } else { // caso F
            texto.innerHTML = `${n3} ${n2} ${n1}`;
        }
    }


    // Otra solución, chequeando los casos A, B, C, D, E y F individualmente:

    if (n1 <= n2 && n2 <= n3) { // caso A
        texto.innerHTML += `<br>${n1} ${n2} ${n3}`;
    } else if (n1 <= n3 && n3 <= n2) { // caso B
        texto.innerHTML += `<br>${n1} ${n3} ${n2}`;
    } else if (n2 <= n1 && n1 <= n3) { // caso C
        texto.innerHTML += `<br>${n2} ${n1} ${n3}`;
    } else if (n2 <= n3 && n3 <= n1) { // caso D
        texto.innerHTML += `<br>${n2} ${n3} ${n1}`;
    } else if (n3 <= n1 && n1 <= n2) { // caso E
        texto.innerHTML += `<br>${n3} ${n1} ${n2}`;
    } else if (n3 <= n2 && n2 <= n1) { // Otro caso (F)
        texto.innerHTML += `<br>${n3} ${n2} ${n1}`;
    } else {
        texto.innerHTML += '<br> caso imprevisto';
    }

    // return true;
};

const genera = e => {
    e.preventDefault();
    document.getElementById("n1").value = Math.floor(Math.random() * 1200) - 200;
    document.getElementById("n2").value = Math.floor(Math.random() * 1200) - 200;
    document.getElementById("n3").value = Math.floor(Math.random() * 1200) - 200;
};

document.getElementById("ordenar").addEventListener('click', ordena);
document.getElementById("ordenar").addEventListener('mouseenter', ordena);
document.getElementById("generar").addEventListener('click', genera);
document.getElementById("generar").addEventListener('mouseover', genera);