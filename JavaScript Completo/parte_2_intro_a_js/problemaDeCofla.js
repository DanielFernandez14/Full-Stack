//Problema A) -Dejar pasar solo a los +18; El primero que entre despues de las 2am no paga
// Problema B) -Crear mini sistema para registrar presentes (p) y ausentes (a); pasado 30 dias, mostrar su situacion final del alumno; maximo de 10% de ausencias, si se tienen mas aclarar que esta desaprobado



// A) Un joven muy afortunado logró ganar el primer premio de la lotería... exacto, estamos hablando del pobre al que Cofla le dio una mano. Este pobre decide hacer una fiesta para festejar que salió de la pobreza con este millonario. Compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas...

// Dejar pasar solo a los mayores de edad.
// La primer persona que entre despues de las 2Am, no paga.

let free = false;

const validarCliente = (time) => {
    //let edad = prompt("¿Cuál es tu edad?");
    
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("Podés pasar gratis porque sos la primer persona despues de las 2 AM");
            free = true;
        } else {
            alert(`Son las ${time}:00. Podés pasar, pero tenés que pagar la entrada`);
        }
    } else {
        alert("Mirá papu, sos menor de edad por ende no vas a pasar, MAQUINOLA");
    }
};

// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.4);
// validarCliente(3);


// Explicación : 
// free se inicializa en false para rastrear si alguien ya entró gratis.
// validarCliente(time) recibe la hora como parámetro y pide la edad con prompt().
// Si la persona tiene más de 18 años, se verifican las condiciones:
// Si la hora está entre 2 y 7 AM y nadie ha entrado gratis todavía, entra sin pagar.
// Si no, puede entrar, pero tiene que pagar.
// Si es menor de edad, se muestra una alerta diciendo que no puede entrar.



// B)
// Cofla vuelve de la comisaría exhausto y, por lo cansado que estaba, se fue a dormir...

// Al otro día comienzan las clases del ciclo básico de la universidad (porque Cofla quiere ser programador y se inscribió en la facultad de ingeniería para estudiar desarrollo de software).

// En su curso en total son 19 alumnos, pero surgió un problema que complicó un poco a la facultad:
// Se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán hacer registros de datos de ningún tipo, por ende las clases no podrán comenzar hasta que esto esté solucionado.

// Requerimientos:

// Crear un mini-sistema que nos permita registrar los alumnos que están presentes (P) y ausentes (A) en clase.
// Pasados los 30 días, mostrar la situación final de todos los alumnos (número total de presentes y ausentes).
// Se puede tener un máximo de 10% de ausencias por semestre. Si se tienen más, aclarar que está reprobado.



let cantidad = prompt("¿Cuántos alumnos son?");
let alumnosTotales = [];

// for (let i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
// }

// const tomarAsistencia = (nombre, p) => {
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[p][1]++;
//     }
// }

// for (let i = 0; i < 30; i++) {
//     for (let alumno in alumnosTotales) {
//         tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (let alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}
//     _______Presentes: ${alumnosTotales[alumno][1]}
//     _______Ausencias: ${30 - alumnosTotales[alumno][1]}<br>`;

//     if (30 - alumnosTotales[alumno][1] > 18) {
//         resultado;
//     } else {
//         resultado += "Reprobado por inasistencias";
//     }

//     console.log(resultado);
// }

// Explicación del código:
// Se solicita la cantidad de alumnos y se inicializa un array alumnosTotales donde cada posición contiene el nombre del alumno y su contador de asistencias.
// Se define la función tomarAsistencia, que pregunta si el alumno está presente ("p" o "P") y si es así, aumenta su contador.
// Se registra la asistencia durante 30 días, iterando por cada alumno.
// Se muestra el resultado final, indicando la cantidad de presentes y ausencias de cada alumno.
// Si el alumno tiene más de 18 ausencias (más del 10%), se muestra un mensaje de "REPROBADO POR INASISTENCIAS" en color rojo.

//---------------------------------------------

// //for (let i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
// }

const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}

for (let i = 0; i < 30; i++) {
    for (let alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    }
}

for (let alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _______Presentes: <b>${alumnosTotales[alumno][1]}</b><br>
    _______Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b><br>`;

    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado += "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
    } else {
        resultado += "<br><br>";
    }

    document.write(resultado);
}


// C -> Cofla feliz por haber empezado las clases volvio a su casa y ya tiene tarea basica de calculo; tiene que hacer un par de ejercicios de matematica que incluyen suma, resta, division y multiplicacion, realizar esto con una calculadora puede ser mucho mas efectivo. -crear calculadora que nos simplifique el trabajo ->


const sumar = (num1, num2)=>{
    return parseInt (num1) + parseInt(num2)
}
const restar = (num1, num2)=>{
    return parseInt (num1) - parseInt(num2)
}
const dividir = (num1, num2)=>{
    return parseInt (num1) / parseInt(num2)
}
const multiplica = (num1, num2)=>{
    return parseInt (num1) * parseInt(num2)
}

alert("¿Qué operación deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: división, 4: multiplicación");

if (operacion == 1) {
    let numero1 = prompt("Primer número para sumar");
    let numero2 = prompt("Segundo número para sumar");
    resultado = sumar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} 
else if (operacion == 2) {
    let numero1 = prompt("Primer número para restar");
    let numero2 = prompt("Segundo número para restar");
    resultado = restar(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} 
else if (operacion == 3) {
    let numero1 = prompt("Primer número para dividir");
    let numero2 = prompt("Segundo número para dividir");
    resultado = dividir(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} 
else if (operacion == 4) {
    let numero1 = prompt("Primer número para multiplicar");
    let numero2 = prompt("Segundo número para multiplicar");
    resultado = multiplica(numero1, numero2);
    alert(`Tu resultado es ${resultado}`);
} 
else {
    alert("No se ha encontrado la operación");
}

console.log(resultado)



