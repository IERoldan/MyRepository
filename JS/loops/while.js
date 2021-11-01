let totalAlumnos = parseInt(prompt("Ingrese el numero de alumnos"));
let i = 1;
let promedioTotal = 0;
let promedioMatematica = 0;
let promedioLengua = 0;
let promedioCsSc= 0;
while (i <= totalAlumnos){
    let notaMatematica = +prompt ("Ingrese la nota de matemáticas");
    let notaLengua = +prompt ("ingrese la nota de Lengua");
    let notaCsSc = +prompt ("Ingrese la nota de ciencias Sociales");
    document.write(`La nota ingresada de matematica es ${notaMatematica}`);
    // Operador ternario
    notaMatematica < 7 ? document.write(`Desaprobo <br>`) : document.write(`Aprobo <br>`); 
    document.write(`La nota ingresada de matematica es ${notaLengua}`);
    // Operador ternario
    notaLengua < 7 ? document.write(`Desaprobo <br>`) : document.write(`Aprobo <br>`); 
    document.write(`La nota ingresada de matematica es ${notaCsSc}`);
    // Operador ternario
    notaCsSc < 7 ? document.write(`Desaprobo <br>`) : document.write(`Aprobo <br>`);

    promedioMatematica += notaMatematica;
    promedioLengua += notaLengua;
    promedioCsSc += notaCsSc;
    i++
}
promedioLengua = promedioLengua / totalAlumnos;
promedioMatematica = promedioMatematica / totalAlumnos;
promedioCsSc = promedioCsSc / totalAlumnos;
promedioTotal = (promedioMatematica + promedioLengua + promedioCsSc) / 3

document.write(`El promedio de los alumnos en Matematica es de :${promedioMatematica} <br>`)
document.write(`El promedio de los alumnos en Lengua es de :${promedioLengua} <br>`)
document.write(`El promedio de los alumnos en Ciencias Sociales es de :${promedioCsSc} <br>`)
document.write(`El promedio total de los alumnos en es de :${promedioTotal} <br>`)