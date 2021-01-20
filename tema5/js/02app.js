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
    peticionAjaxGET(`https://jsonplaceholder.typicode.com/users/${id}`,
        xhr => {
            if (xhr.status == 200) {
                try {
                    const usuario = JSON.parse(xhr.response);
                    //const usuario = usuarios.find(usr => usr.id == id);
                    //console.log(usuario["company"]["name"]);
                    console.log(usuario.company.name);
                } catch {
                    throw `No se encontró el usuario ${id}`;
                }
            } else {
                throw `No se encontró el usuario ${id}, error: ${xhr.status}`;
            }

        })
};


//getNombreCompañia(2);
//getNombreCompañia(20);



const dameFotosDelUsuario = id => {
    peticionAjaxGET(`https://jsonplaceholder.typicode.com/users/${id}/albums`,
        xhr => {
            if (xhr.status == 200) {
                try {
                    const albumes = JSON.parse(xhr.response);
                    //const usuario = usuarios.find(usr => usr.id == id);
                    //console.log(usuario["company"]["name"]);
                    console.log(albumes);
                    console.log(albumes.length);

                    for (let album of albumes) {
                        peticionAjaxGET(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`, xhr => {
                            if (xhr.status == 200) {
                                try {
                                    const fotos = JSON.parse(xhr.response);
                                    //const usuario = usuarios.find(usr => usr.id == id);
                                    //console.log(usuario["company"]["name"]);
                                    const fragmento = document
                                        .createDocumentFragment();

                                    const titulo = document
                                        .createElement('H1');
                                    titulo.appendChild(document.createTextNode(album.title));
                                    fragmento.appendChild(titulo);

                                    for (let foto of fotos) {
                                        const img = document
                                            .createElement('IMG');
                                        img.setAttribute('src', foto.url);
                                        fragmento.appendChild(img);
                                    }
                                    document
                                        .getElementById('fotos')
                                        .appendChild(fragmento);
                                } catch {
                                    throw `No se encontraron las fotos del álbum ${album.id}`;
                                }
                            } else {
                                throw `No se encontraron las fotos del álbum ${album.id}, error: ${xhr.status}`;
                            }
                        });
                    }

                } catch {
                    throw `No se encontraron albumes para el usuario ${id}`;
                }
            } else {
                throw `No se encontraron albumes para el usuario ${id}, error: ${xhr.status}`;
            }

        })
};

dameFotosDelUsuario(2);