const peticionAjaxGET = (url, cb, ...args) => {
    // 1. Crea un nuevo objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // 2. Configuración: solicitud GET, a pesar del nombre no se abre
    // la petición aún  
    xhr.open('GET', url);

    // 3. Esto se llamará después de que la respuesta se reciba
    // pero lo programamos ya

    xhr.addEventListener('load', () => { cb(xhr, ...args) });

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

/*

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
}; */



// La función dameFotosDelUsuario puede reescribirse separando las funciones callbacks:

// Primero obtenemos los albumes
const dameFotosDelUsuario_cb1 = xhr => {
    if (xhr.status == 200) {
        try {
            const albumes = JSON.parse(xhr.response);
            console.log(albumes);
            console.log(albumes.length);
            // Se puede deshacer el bucle for con llamadas recursivas para hacer una petición ajax después de que se termine la anterior
            // en lugar de todas casi a la vez como está ahora
            /*for (let album of albumes) {
                // Segundo, para cada álbum obtenemos las fotos
                peticionAjaxGET(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`, dameFotosDelUsuario_cb2, album);
            }*/
            // comenta el bucle for anterior y descomenta la siguiente línea para que veas el funcionamiento del modo recursivo
            peticionAjaxGET(`https://jsonplaceholder.typicode.com/albums/${albumes[0].id}/photos`, dameFotosDelUsuario_cb2_recursivo, albumes, 0);
        } catch {
            throw `No se encontraron albumes para el usuario ${id}`;
        }
    } else {
        throw `No se encontraron albumes para el usuario ${id}, error: ${xhr.status}`;
    }

};

// Segundo, para cada álbum obtenemos las fotos
// Problema: no reconoce el objeto album dentro de la función, por lo que he tenido que pasarlo como argumento
// cuando el callback estaba anidado sí lo reconoce, pero ahora no.
const dameFotosDelUsuario_cb2 = (xhr, album) => {
    if (xhr.status == 200) {
        try {
            const fotos = JSON.parse(xhr.response);
            const fragmento = document.createDocumentFragment();
            const titulo = document.createElement('H1');
            titulo.appendChild(document.createTextNode(album.title));
            fragmento.appendChild(titulo);

            for (let foto of fotos) {
                const img = document.createElement('IMG');
                img.setAttribute('src', foto.url);
                fragmento.appendChild(img);
            }
            document.getElementById('fotos').appendChild(fragmento);
        } catch {
            throw `No se encontraron las fotos del álbum ${album.id}`;
        }
    } else {
        throw `No se encontraron las fotos del álbum ${album.id}, error: ${xhr.status}`;
    }
};

// Segundo, para cada álbum obtenemos las fotos en modo recursivo
const dameFotosDelUsuario_cb2_recursivo = (xhr, albumes, indice) => {
    if (!albumes[indice]) return;
    if (xhr.status == 200) {
        try {
            // hacemos lo mismo de antes, pero al final llamamos de nuevo a peticionAjaxGet con el siguiente álbum
            const fotos = JSON.parse(xhr.response);
            const fragmento = document.createDocumentFragment();
            const titulo = document.createElement('H1');
            titulo.appendChild(document.createTextNode(albumes[indice].title));
            fragmento.appendChild(titulo);

            for (let foto of fotos) {
                const img = document.createElement('IMG');
                img.setAttribute('src', foto.url);
                fragmento.appendChild(img);
            }
            document.getElementById('fotos').appendChild(fragmento);

            // Si quedan elementos en el array albumes, hacemos otra petición
            // como este código se ejecuta asíncronamente, realizamos una petición cuando se termina la anterior
            if (albumes[indice + 1]) {
                peticionAjaxGET(`https://jsonplaceholder.typicode.com/albums/${albumes[indice+1].id}/photos`, dameFotosDelUsuario_cb2_recursivo, albumes, indice + 1);
            }
        } catch {
            throw `No se encontraron las fotos del álbum ${albumes[indice].id}`;
        }
    } else {
        throw `No se encontraron las fotos del álbum ${albumes[indice].id}, error: ${xhr.status}`;
    }
};



const dameFotosDelUsuario = id => {
    peticionAjaxGET(`https://jsonplaceholder.typicode.com/users/${id}/albums`, dameFotosDelUsuario_cb1);
};

dameFotosDelUsuario(2);