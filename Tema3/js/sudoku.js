// const sudoku =

// leer el contenido de una celda, por ejemplo td23



function dimeCelda(i) {
    return document.getElementById('td' + i).innerText;
}

console.log(dimeCelda(22));
console.log(dimeCelda(23));
console.log(dimeCelda(24));

function ponEnCelda(i, valor) {
    document.getElementById('td' + i).innerText = valor;
}

ponEnCelda(24, 7);
console.log(dimeCelda(24));