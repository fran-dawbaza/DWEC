function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorialNR(n) {
    let total = 1;
    for (let i = 2; i <= n; i++) {
        total = total * i;
    }
    return total;
}

//debugger;
console.log("Factorial de 5: " + factorial(5));
//debugger;
console.log("FactorialNR de 5: " + factorialNR(5));

function fibonacciNR(n) {
    let total1 = 0;
    let total2 = 1;
    for (let i = 1; i <= n; i++) {
        let aux = total1;
        total1 = total2 + total1;
        total2 = aux;

    }
    return total1;
}

function fibonacci(n) {
    debugger;
    if (n <= 1) return n;
    let f1 = fibonacci(n - 1);
    let f2 = fibonacci(n - 2);
    return f1 + f2;
    //return (n <= 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("FibonacciNR de 0: " + fibonacciNR(0));
console.log("FibonacciNR de 1: " + fibonacciNR(1));
console.log("FibonacciNR de 2: " + fibonacciNR(2));
console.log("Fibonacci de 3: " + fibonacciNR(3));
console.log("Fibonacci de 4: " + fibonacciNR(4));
console.log("Fibonacci de 5: " + fibonacciNR(5));
console.log("Fibonacci de 6: " + fibonacciNR(6));
console.log("Fibonacci de 7: " + fibonacciNR(7));
console.log("Fibonacci de 8: " + fibonacciNR(8));
console.log("Fibonacci de 9: " + fibonacciNR(9));
console.log("FibonacciNR de 50: " + fibonacciNR(50));

/*console.log("Fibonacci de 0: " + fibonacci(0));
console.log("Fibonacci de 1: " + fibonacci(1));
console.log("Fibonacci de 2: " + fibonacci(2));
console.log("Fibonacci de 3: " + fibonacci(3));
console.log("Fibonacci de 4: " + fibonacci(4));
console.log("Fibonacci de 5: " + fibonacci(5));
console.log("Fibonacci de 6: " + fibonacci(6));
console.log("Fibonacci de 7: " + fibonacci(7));
console.log("Fibonacci de 8: " + fibonacci(8));
console.log("Fibonacci de 9: " + fibonacci(9));*/
debugger;
console.log("Fibonacci de 40: " + fibonacci(40));

function recursivaMala(n) {
    let a = "hola";
    let b = 3.56;
    console.log(n);
    recursivaMala(n + 1);
}

recursivaMala(0);