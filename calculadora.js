const sumar = require('./CalculadoraDh/sumar');
const restar = require('./CalculadoraDh/restar');
const multiplicar = require('./CalculadoraDh/multiplicar');
const dividir = require('./CalculadoraDh/dividir');
// Test
console.log(sumar(62, 8));
console.log(restar(6, 2));
console.log(multiplicar(8, 4));
console.log(multiplicar(8, 0));
console.log(dividir(8, 4));
console.log(dividir(22, 0));