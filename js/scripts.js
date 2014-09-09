// Prueba de funcionamiento de JS
//document.write("Hola");

// Generar alerta en a usuario
// alert("Ventana de alerta para usaurio");

// Solicitar información a nuestro usuario
/* 
var nombre = prompt("Por favor introduzca su nombre");
document.write("<h1>Bienvenid@: " + nombre + "</h1><br />");

var edad = prompt("Por favor introduzaca su Edad");
document.write("Su edad es: " + edad + " años"); */

// Operaciones matemáticas

/*var numUno = 5;
var numDos = 2;
var numTres = 2;

var suma = numUno + numDos;

var resultado = suma / numTres;

console.log(suma);

console.log(resultado);*/

// Operaciones matemáticas personalizadas

/*var numUno = parseInt(prompt("Introduzca Primer valor"));
var numDos = parseInt(prompt("Introduzca Segundo valor"));
var numTres = parseInt(prompt("Introduzca Tercer valor"));

var suma = numUno + numDos;

var resultado = suma / numTres;

console.log("La operación es la siguiente: " + "(" + numUno + " + " + numDos + ")" + "/" + numTres);

console.log(suma);

console.log(resultado);*/

//Variables Booleanas

/*var numUno = parseInt(prompt("Introduzca un Número"));
//var numDos = parseInt(prompt("Introduzca un Número"));

var resultado = numUno >= 18;
console.log(resultado);
*/

//Variables Arrays - Cadenas

/*var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

var semana = [1,2,3,4,5,6,7,8,9];

console.log(meses);

console.log(meses[3]);

console.log(semana[5]);
*/

// ******************* Practica individual matemáticas *************************************

/*var numUno = parseInt(prompt("Introduzca valor 1:"));
var numDos = parseInt(prompt("Introduzca valor 2:"));
var numTres = parseInt(prompt("Introduzca valor 3:"));

var resultadoSuma = numUno + numDos + numTres;
var resultadoResta = numUno - numDos - numTres;
var producto = numUno * numDos * numTres;
var promedio = resultadoSuma / 3;


document.write("<h3>Resultado de la Suma: " + resultadoSuma + "</h3>");
document.write("<h3>Resultado de la Resta: " + resultadoResta + "</h3>");
document.write("<h3>Resultado del producto: " + producto + "</h3>");
document.write("<h3>Promedio: " + promedio + "</h3>");

var resultados = alert("Suma: " + resultadoSuma + "\n" + "Resta: " + resultadoResta + "\n" + "Producto: " + producto + "\n" + "Promedio: " + promedio);
*/

var acceso = parseInt(prompt("Introduzca su edad:"));

if (acceso >= 18){
	alert("Bienvenido a la página")
	document.write("<h1>Bienvenido, por favor, siga</h1>")
}

else if(acceso = 80){
	alert("Abueloooo!!!!!")
}

else{
	alert("Por favor, abandone la página")
	document.write("<h1>FUERA DE AQUI!!!!</h1>")
}

