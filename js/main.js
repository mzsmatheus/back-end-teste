//alert("alksjdasd");
//console.log("Agorarararar akjhkjhu....")

// var n1 = 10;
// var n2 = 5;

// var resultado = n1 + n2;

// console.log("Número: " + resultado);

// function somar(a, b){
//     return a + b;
// }

// var resultado = somar(10, 5);
// console.log("Resultado: " + resultado);
// console.log("Resultado: " + typeof resultado)

// const quadrado = require
const quadrado = require('./quadrado');
// const {area, perimetro} = require('./quadrado');

var r1 = quadrado.area(20);
console.log("Área 1: " + r1);

const calc = require('./calc');

var r = calc.somar(10,9);
console.log("result " + r)