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

// let canAccess = window.prompt("Ingrese su edad");
// console.log("Edad ingresada por el usuario: ", canAccess);

// // if (canAccess >= 18) {
// //     document.write("puede ingresar el boliche")
// // } else if (canAccess > 50) {
// //     document.write("Tiene un descuento por mayor")
// // } else {
// //     document.write("Es menor, no puede ingresar el boliche")
// // };
// if(canAccess >= 18) {
//     document.write("puede ingresar el boliche <br>")
//     if(canAccess > 50) {document.write("Tiene un descuento por mayor")}
// } else {
//    document.write("Es menor, no puede ingresar el boliche")
// };

// Niño menor paga 50% del valor de la entrada (0-12)
// Adolocente paga un 80% del valor de la entrada (13-17)
// Adulto paga el 100% (18-55)
// Persona mayor paga el 70% (55-)

const valorEntrada = 400;
const pochoclos = 200;
const gaseosa = 100;
let valorTotal = 0
let socios = false;
// Valor de la entrada + caja de pochoclos $200 + una Gaseosa $100


let años = window.prompt("Ingrese su edad");
console.log("Edad ingresada por el usuario: ", años);

if (años >= 55){
    document.write("Valor de la entrada $ " + valorEntrada*.75 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorEntrada*.75;

} else if (años <= 12){
    document.write("Valor de la entrada $ " + valorEntrada*.5 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorEntrada*.5;
} else if (años < 18){
    document.write("Valor de la entrada $ " + valorEntrada*.8 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorEntrada*.8;
} else {
    document.write("Valor de la entrada $ " + valorEntrada + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorEntrada;
}
// valorTotal +=  pochoclos + gaseosa;
valorTotal = valorTotal + pochoclos + gaseosa;
document.write("<br> Monto hasta el momento: " + valorTotal + "<br>")

años = window.prompt("Ingrese su edad");
console.log("Edad ingresada por el usuario: ", años);

if (años >= 55){
    document.write("Valor de la entrada $ " + valorEntrada*.75 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal += valorEntrada*.75;

} else if (años <= 12){
    document.write("Valor de la entrada $ " + valorEntrada*.5 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal += valorEntrada*.5;
} else if (años < 18){
    document.write("Valor de la entrada $ " + valorEntrada*.8 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal += valorEntrada*.8;
} else {
    document.write("Valor de la entrada $ " + valorEntrada + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal += valorEntrada;
}
// valorTotal +=  pochoclos + gaseosa;
valorTotal = valorTotal + pochoclos + gaseosa;
document.write("<br> Monto hasta el momento: " + valorTotal + "<br>");

años = window.prompt("Ingrese su edad");
console.log("Edad ingresada por el usuario: ", años);

if (años >= 55){
    document.write("Valor de la entrada $ " + valorEntrada*.75 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorTotal + valorEntrada*.75;

} else if (años <= 12){
    document.write("Valor de la entrada $ " + valorEntrada*.5 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorTotal + valorEntrada*.5;
} else if (años < 18){
    document.write("Valor de la entrada $ " + valorEntrada*.8 + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorTotal + valorEntrada*.8;
} else {
    document.write("Valor de la entrada $ " + valorEntrada + " + caja de pochoclos $" + pochoclos + " + una Gaseosa $ " + gaseosa)
    valorTotal = valorTotal + valorEntrada;
}
// valorTotal +=  pochoclos + gaseosa;
valorTotal = valorTotal + pochoclos + gaseosa;

document.write("<br> El valor total de la entrada con sus productos es de: $" + valorTotal)

let age = window.prompt("Ingrese su edad");
console.log("Edad ingresada por el usuario: ", age);

if(age >= 55 ){
    valorTotal = valorEntrada * .75;
} else if (age >= 18) {
    valorTotal = valorTotal + valorEntrada;
}
else if (age >= 13) {
    valorTotal = valorTotal + valorEntrada * .8;
}
else {
    valorTotal = valorTotal + valorEntrada * .5;
}

valorTotal = valorTotal + pochoclos + gaseosas;
document.write("Valor a abonar por persona 1: " + valorTotal);

// const age >= prompt("ingresar edad");
// if(age >= 55){
//     if (socios == true){
//         console.log("entra al mayor, SOCIO")
//     //     valorTotal = valorTotal + valorEntrada * 0.6; //300
//     // } else {
//     //     console.log("entra en else")
//         valorTotal = valorTotal + valorEntrada * 0.75;
//     }


// } else if (age >= 18) {
//     valorTotal = valorTotal + valorEntrada;
// } else if (age >= 13){
//     valorTotal = valorTotal + valorEntrada * 0.8;
// } else {
//     valorTotal = valorTotal + valorEntrada * 0.5;
// }

// if (socio){
//     valorTotal = valorTotal * 0.5;
// }

// valorTotal = valorTotal + pochoclos + gaseosa;
// document.write("Valor a abonar por persona 1: " + valorTotal)

// Los signos de fuego son Aries, Leo y Sagitario. 
// ·Los signos de tierra son Tauro, Virgo y Capricornio. 
// ·Los signos de aire son Géminis, Libra y Acuario. 
// ·Los signos de agua son Cáncer, Escorpio y Piscis.
// if(condicion1 && condicion2 && condicion3 && condicion4){
    
// }
let signo = promp ("ingrese su signo");
signo = signo.toLowerCase();

if(signo == "Aries" || signo == "Leo" || signo == "Sagitario"){
document.write("Su signo es del tipo fuego")
} if (signo == "Tauro" || signo == "Virgo" || signo == "Capricornio"){
    document.write("Su signo es del tipo Tierra")
}
if (signo == "Géminis" || signo == "Libra" || signo == "Acuario"){
    document.write("Su signo es del tipo Tierra")
}
if (signo == "Cancer" || signo == "Escorpio" || signo == "Piscis"){
    document.write("Su signo es del tipo Tierra")
}