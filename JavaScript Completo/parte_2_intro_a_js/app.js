/* ----------------------- ARRAYS ----------------------- */
// Arrays -> Un array es una estructura de datos que almacena una colección de elementos en una sola variable. Estos elementos pueden ser números, strings, objetos, funciones o incluso otros arrays.
// Son objetos que guardan datos, los que no esten definidos quedan como undefined



// Arrays - Arreglos - Listas -> posibilidad de agrupar una lista de datos (boleanos, numbers, string) o por ejemplo una lista de empleados, precios, etc... no hace falta que enumere uno por uno. Son estructuras que nos permiten agrupar datos. Nos permite tener mayor caudal de informacion. 
// Utilizan [] -> indica que adentro va un array una lista, y separa a cada item de la lista con una coma (,) menos el último item de la lista.
//Las listas pueden ser de cualquier tipo de dato.
/*
Las listas se pueden modificar y perder si usamos por ejemplo: 
"let listaAlumno= ["Daniel", "Julia", "Nicolas"];
Luego mas adelante si nos olvidamos de esta variable y la volvemos a usar listaAlumno para otra varibale y perdemos el array. Con un Const nos tira error directamente, pero si se puede modificar aunque sea un const porque es una lista, el contenido se puede modificar, agregar, sacar pero sigue siendo una lista.
*/
// El largo de la lista siempre es un numero mas que el indice mas grande que tiene, Ejemplo: nos marca 5 en consola, son 5 items pero se cuentan del 0,1,2,3,4

arrays = ["daniel", 25, "Cordoba"]
console.log(arrays[1])
//           0          1         2
frutas = ["banana", "manzanas", "pera"];
console.log(frutas)
// Para mostrar un elemento -> los arrays comienzan desde la posicion 0
console.log(frutas.slice(0, 2)) // Extrae desde el índice 0 hasta el 1 (sin incluir el 2)

// Arrays Asociativos -> son objetos, son objetos con valores asociados.

let pc1 = {
    nombre: "DaniPc",
    procesador: "I5",
    Ram: "24 Gb",
    espacio: "512gb"
};


let pc2 = ["DaniPc", "I5", "24Gb", "512 Gb"];
console.log(pc2[0], pc2[1]);

console.log(pc1)
console.log(pc1["nombre"]) // nos dice que es un objeto, si queremos saber por ejemplo el nombre de la pc tenemos que poner: console.log(pc1["nombre"])

let nombre = pc1["nombre"];
let procesador = pc1["procesador"];
let ram = pc1 ["Ram"];
let espacio = pc1 ["espacio"];

frase = `
    el nombre de mi pc es: ${nombre} <br>
    el procesador es: ${procesador} <br>
    la ram es de: ${ram}
    el espacio en disco es de: ${espacio}`;
console.log(frase)


/* ----------------------- Bucles e Iteración ----------------------- */

// Definicion y Usos: los bucles son como un If, pero se la pasan preguntando todo el tiempo lo mismo
//Un bucle (o loop) es una estructura de control en programación que permite ejecutar repetidamente un bloque de código mientras se cumpla una condición específica. La iteración, por otro lado, se refiere a cada ejecución individual del bucle.
// Los bucles son fundamentales en la computación, ya que permiten la automatización de tareas repetitivas, la manipulación de estructuras de datos y la optimización del rendimiento de los algoritmos.





// ----- Sentencia While: el while pregunta siempre hasta que la condicion de falsa. Este bucle se ejecuta mientras una condición sea verdadera. Se usa cuando no sabemos cuántas veces se repetirá la acción.


// Sintaxis:

// while (condición) {
//  Bloque de código que se ejecuta mientras la condición sea verdadera
// }


//Funcionamiento:

// La condición se evalúa antes de cada iteración.
// Si es true, el bloque de código se ejecuta.
// Si es false, el bucle termina y el programa sigue con el siguiente código.


// Ejemplo: 
let contador = 1;

while (contador <= 5) {
    console.log("Iteración número: " + contador);
    contador++; // Incrementamos el contador para evitar un bucle infinito
}

// Explicación:

// Se inicializa contador = 1.
// La condición contador <= 5 es true, entonces el código dentro del while se ejecuta.
// Se imprime el mensaje y luego contador++ incrementa el valor de contador.
// Cuando contador llega a 6, la condición es false y el bucle termina


// ----- Sentencia Do While:
// ----- Sentencia For:
// ----- Sentencia For In:
// ----- Sentencia For of:

// ----- Sentencia break:
// ----- Sentencia label:
// ----- Sentencia continue:


