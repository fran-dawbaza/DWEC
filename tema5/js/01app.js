const sleep = (ms) => {
    const idUnico = 'sleep_' + Math.random().toString(36).slice(2);
    console.log(`${idUnico} dormirá un mínimo de ${ms} ms`);
    console.time(idUnico);
    setTimeout((id) => {
        console.timeEnd(id);
    }, ms, idUnico)
};

const uno = () => {
    console.log('Uno');
};

const dos = () => {
    console.log('Dos');
    tres();
};

const tres = () => {
    console.log('Tres');
};


uno();
sleep(300);
dos();
sleep(500);


/*let cont = 0;
for (let i = 0; i < 100000000; i++) {
    cont += i;
}
console.log('Los primeros 100000000 suman: ', cont);*/