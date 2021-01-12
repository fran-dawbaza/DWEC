console.log('Se está cargando 01script2.js');

const retardo = (ms) => {
    const idUnico = 'sleep_' + Math.random().toString(36).slice(2);
    console.log(`${idUnico} dormirá un mínimo de ${ms} ms`);
    console.time(idUnico);
    setTimeout((id) => {
        console.timeEnd(id);
    }, ms, idUnico)
};

//console.log('Se ha cargado 01script2.js');

retardo(2000);

