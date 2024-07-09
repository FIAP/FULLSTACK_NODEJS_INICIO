console.log('init');

function multiply(a, b) {
    return a * b;
}

function add(a, b) {
    return a + b;
}

function calculate() {
    let sum = add(10, 20);
    let product = multiply(5, 4);
    console.log('Sum:', sum);
    console.log('Product:', product);
}

calculate();

console.log('end');
