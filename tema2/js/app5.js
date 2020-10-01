/*
Math es un objeto (no una clase de objetos)

*/
let x = 1;

console.log(Math.sqrt(x));
console.log("Número entre 1 y 0: ", Math.random());

console.log("Número entre 50 y 75: ",
    Math.round(50 + Math.random() * 24));

console.log("Número PI: ", Math.PI.toPrecision(49),
    Math.PI);

console.log(Math.cos(Math.PI));