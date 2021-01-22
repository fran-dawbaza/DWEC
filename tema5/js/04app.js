const contador = inicio => {
    let i = inicio;
    return (() => {
        return i++;
    });
};

const f = contador(10);
console.log('Inicio contador a 10 y llamo varias veces a f():');
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());

const g = contador(1);
console.log('Inicio contador a 1 y llamo varias veces a g():');
console.log(g());
console.log(g());
console.log(g());
console.log(g());
console.log('Llamo a f():');
console.log(f());
console.log('Llamo a g():');
console.log(g());