function multiply(a, b) {
    return a * b;
}

var timesTen = multiply.bind(this, 10);

console.log(timesTen(10));