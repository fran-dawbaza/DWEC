const peticionAjaxGET = (url, cb) => {
    // 1. Crea un nuevo objeto XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // 2. Configuración: solicitud GET, a pesar del nombre no se abre
    // la petición aún  
    xhr.open('GET', url);

    // 3. Esto se llamará después de que la respuesta se reciba
    // pero lo programamos ya
    xhr.addEventListener('load', () => { cb(xhr) });

    xhr.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
        } else {
            alert(`Recibidos ${event.loaded} bytes`); // sin Content-Length
        }

    });

    xhr.addEventListener('error', (err) => {
        alert("Solicitud fallida!!! " + err);
    });
    // 4. Envía la solicitud a la red
    xhr.send();
};

const procesamosDatos = xhr => {
    if (xhr.status != 200) { // analiza el estado HTTP de la respuesta
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado
    } else { // muestra el resultado
        alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
        console.log(xhr.response);
        //console.log(this.response);
    }
}

peticionAjaxGET('https://jsonplaceholder.typicode.com/todos/1', procesamosDatos);