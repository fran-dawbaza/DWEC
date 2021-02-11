const dameUno = async(sumando) => {
    await setTimeout(() => console.log('hola ' + sumando), 3000);
    return 1;
};

(async() => {
    const resultado = await dameUno(25);
    console.log(resultado);
    console.log(await dameUno(resultado));
})()