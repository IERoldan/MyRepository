let numero1 = 65;
let numero2 = 232;
let numero3 = 60 + 5;
let numero4 = 66;
let active = false;
// let nombre1 = "Jose";
// let nombre3 = "jose";
// let nombre2 = "Malcom";

// Pregunta es igual
let resultado = (numero1 == numero2);
// Pregunta es estrictamentamente igual
let resultadoEstricto = (numero1 === numero4);
// Pregunta es diferente
let diferente = (numero1 != numero2);
// Pregunta es estrictamente diferente
let diferenteEstricto = (numero1 !== numero2);

// Iguales o distintos
console.log("numero1 == numero2 ", numero1 == numero2);
console.log("numero1 != numero4 ", numero1 != numero4);
console.log("Estrictamente iguales numero1 === numero3 ", numero1 === numero3);
console.log("Estrictamente Diferentes numero1 === numero3 ", numero1 !== numero3);



console.log("numero1 es mayor numero4 ", numero1 > numero4);
console.log("numero2 es mayor numero1 ", numero2 > numero1);
console.log("numero4 es menor numero2 ", numero4 > numero2);
console.log("numero1 es mayor numero3 ", numero1 > numero3);

let edad = 18;
console.log("la edad es mayor o igual que 18 ", edad >= 18); //true
let edad2 = 17.999;
console.log(edad2 >= 18); //False
let edad3 = 18.000001;
console.log(edad3 > 18); //true
let edad4 = 18.1;
console.log(edad4 <= 18); //false
let edad5 = 22;
console.log(edad5 > "21a");

// Condicionales para evaluar
if (edad >= 20) {
    let algo = "Definiendo algo"
    console.log("El usuario es una persona mayor de edad");
} else {
    console.log("Bloque else");
}

let canAccess = window.prompt("Ingrese su edad");
console.log("Edad ingresada por el usuario: ", canAccess);

if (canAccess >= 18) {
    document.write("puede ingresar el boliche")
} else if (canAccess > 50) {
    document.write("Tiene un descuento por mayor")
} else {
    document.write("Es menor, no puede ingresar el boliche")
};