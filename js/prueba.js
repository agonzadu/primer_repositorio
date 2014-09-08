// Calculadora online
//Titulo página
document.write("<h1>Calculadora Online</h1>");

var numUno = parseInt(prompt("Introduzca el primer valor: "));
var numDos = parseInt(prompt("Introduzca el segundo valor: "));
var numTres = parseInt(prompt("Introduzca el valor divisorio: "));
var numCuatro = parseInt(prompt("Introduzca el valor a multiplicar: "));

//Operaciones

var resultado = (numUno + numDos) * numCuatro / numTres;


document.write(resultado);

