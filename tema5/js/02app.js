const peticionAjaxGET = (url, cb) => {
    // 1. Crea un nuevo objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // 2. Configuración: solicitud GET, a pesar del nombre no se abre
    // la petición aún  
    xhr.open('GET', url);

    // 3. Esto se llamará después de que la respuesta se reciba
    // pero lo programamos ya
    xhr.addEventListener('load', () => { cb(xhr) });

    /*xhr.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
        } else {
            alert(`Recibidos ${event.loaded} bytes`); // sin Content-Length
        }

    });*/

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
        xhr.responseType
        alert(`Hecho, obtenidos ${xhr.response.length} bytes`); // Respuesta del servidor
        console.log(xhr.response);
        //console.log(this);
    }
}

//peticionAjaxGET('https://jsonplaceholder.typicode.com/albums', procesamosDatos);

const getNombreCompañia = id => {
    /*const usuario = {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      };*/
    peticionAjaxGET(`https://jsonplaceholder.typicode.com/users/${id}`, xhr => {
        if (xhr.status == 200) {
            try {
                const usuario = JSON.parse(xhr.response);
                //const usuario = usuarios.find(usr => usr.id == id);
                console.log(usuario["company"]["name"]);
                console.log(usuario.company.name);
            } catch {
                throw "No se encontró el usuario";
            }
        } else {
            throw `No se encontró la lista de usuarios: ${xhr.status}`;
        }

    });
};

getNombreCompañia(2);
getNombreCompañia(20);