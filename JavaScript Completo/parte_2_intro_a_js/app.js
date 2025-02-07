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





// ----------------------- Sentencia WHILE: el while pregunta siempre hasta que la condicion de falsa. Este bucle se ejecuta mientras una condición sea verdadera. Se usa cuando no sabemos cuántas veces se repetirá la acción.


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

// Ejemplo 2:
// Pedir al usuario un número válido. Los bucles while son útiles cuando queremos validar entradas del usuario hasta que ingrese un dato correcto.

//let edad = prompt("Ingrese su edad:");

// while (edad < 0 || isNaN(edad)) {
// edad = prompt("Edad inválida. Ingrese nuevamente su edad:");
// }

//console.log("Edad ingresada correctamente:", edad);

// Explicación:

// Se solicita un número al usuario.
// Si el usuario ingresa un número negativo o un valor inválido (isNaN), el while se repite.
// Cuando se ingresa un número válido, el bucle finaliza.

// El bucle while es útil cuando desconocemos la cantidad exacta de iteraciones y queremos repetir una acción hasta que se cumpla una condición. Sin embargo, es importante evitar bucles infinitos asegurándonos de que la condición eventualmente se vuelva falsa. 🚀




// ----------------------- Sentencia DO WHILE:

//La sentencia do...while es una estructura de control de flujo en JavaScript que permite ejecutar un bloque de código al menos una vez, independientemente de si la condición es verdadera o falsa. Posteriormente, el bucle seguirá iterando mientras la condición especificada continúe siendo verdadera.

// El do...while se usa en situaciones en las que se necesita ejecutar una acción antes de evaluar la condición, como cuando se desea garantizar que una entrada de usuario se procese al menos una vez.

// Sintaxis del Bucle do...while:

// do {
//     // Bloque de código que se ejecuta al menos una vez
// } while (condición);

// Explicación:

// Se ejecuta el bloque de código dentro del do {} sin evaluar la condición.
// Luego, la condición dentro del while() se evalúa.
// Si la condición es true, el bucle se repite.
// Si la condición es false, el bucle se detiene.

// Ejemplo: 
let numero = 1;

do {
    console.log("Iteración número: " + numero);
    numero++; // Incrementamos la variable
} while (numero <= 3);

// Explicación:

// Primera iteración: Se ejecuta console.log("Iteración número: 1") sin evaluar la condición.
// Se incrementa numero a 2 y se evalúa numero <= 5. Como es true, el bucle se repite.
// Cuando numero llega a 6, la condición es false y el bucle finaliza.



// Diferencia entre Do While y While ->

// Do While -> 
// Evaluación de la condición: Después de ejecutar el bloque de código. 
// Ejecución mínima garantizada: Se ejecuta al menos una vez, incluso si la condición es false. 
// Uso recomendado: Cuando se necesita ejecutar el código al menos una vez antes de evaluar la condición.

// While -> 
// Evaluación de la condición: Antes de ejecutar el bloque de código. 
// Ejecución mínima garantizada: Puede que no se ejecute ninguna vez si la condición es false desde el inicio. 
// Uso recomendado: Cuando se necesita evaluar la condición antes de ejecutar el código.

// Aplicaciones Prácticas del Bucle do...while
// Validación de Entrada del Usuario: Cuando queremos asegurarnos de que el usuario ingrese un valor válido antes de evaluar si la entrada es correcta.

// let edad;

// do {
//     edad = prompt("Ingrese su edad (debe ser un número válido):");
// } while (isNaN(edad) || edad <= 0 || edad > 120);

// console.log("Edad ingresada correctamente:", edad);


// Explicación:

// El prompt() se ejecuta al menos una vez.
// Si el usuario ingresa algo incorrecto (NaN o un número negativo), se vuelve a pedir la edad.

//Generación de Números Aleatorios hasta Cumplir una Condición

let numeroAleatorio;

do {
    numeroAleatorio = Math.floor(Math.random() * 10);
    console.log("Número generado:", numeroAleatorio);
} while (numeroAleatorio !== 7);

// Explicación: Se genera un número aleatorio entre 0 y 9. Se repite hasta que salga 7.

// Conclusión
// El bucle do...while en JavaScript es una estructura de control ideal cuando se necesita ejecutar un bloque de código al menos una vez, sin importar si la condición inicial es verdadera o falsa. Su principal diferencia con while es que en do...while, la condición se evalúa después de la primera ejecución, lo que garantiza que el código dentro del bloque se ejecute al menos una vez.

// Este bucle es útil para validación de entradas de usuario, simulaciones, y procesos que requieren una ejecución inicial antes de validar una condición. Sin embargo, si no se maneja correctamente, puede generar bucles infinitos si la condición nunca se vuelve falsa.








// ----------------------- Sentencia FOR: 
// Es un bucle igual que el while pero es determinado. Se ejecutan las veces nosotros le digamos. El bucle for es una estructura de control de flujo en JavaScript que permite ejecutar un bloque de código un número determinado de veces. Es ideal cuando se conoce de antemano cuántas iteraciones deben realizarse. Se usa comúnmente para recorrer arrays, listas y ejecutar tareas repetitivas de manera eficiente.

// Partes / Parametros del bucle -> declaracion e inicialización, condición, aumento - decremento

for (let i = 1; i <= 5; i++) {
    console.log("Iteración número en FOR: " + i);
}

// let i = 1; → Se inicializa la variable i con el valor 1.
// i <= 5; → Se verifica la condición. Mientras sea true, el código dentro del for se ejecuta.
// i++ → Se incrementa i después de cada iteración.
// Cuando i llega a 6, la condición es false y el bucle finaliza.

// Explicación de los parámetros:
// Inicialización: Se ejecuta una sola vez al inicio del bucle. Se suele usar para declarar e inicializar una variable de control.
// Condición: Se evalúa antes de cada iteración. Si es true, el código dentro del for se ejecuta. Si es false, el bucle termina.
// Actualización: Se ejecuta después de cada iteración. Generalmente se usa para incrementar o modificar la variable de control.

// Ejemplo ->

let frutas2 = ["Manzana", "Banana", "Naranja", "Uva"];

for (let i = 0; i < frutas2.length; i++) {
    console.log("Fruta: " + frutas2[i]);
}
// frutas.length devuelve la cantidad de elementos en el array.
// i < frutas.length garantiza que el bucle se detiene después de recorrer todos los elementos.
// frutas[i] permite acceder a cada elemento del array.

//Ejemplo cuenta regresiva ->

for (let i = 6; i >= 0; i--){
    console.log("Cuenta regresiva con bucle For " + i);
}

for (let i = 0; i < 20; i++) {
    if(i == 12) {
        break
    }
    console.log("for con un Break " + i)
}







// ----------------------- Sentencia FOR IN:
// El bucle for...in en JavaScript es una estructura de control que permite recorrer las propiedades enumerables de un objeto. Se utiliza principalmente para iterar sobre las claves de un objeto y acceder a sus valores asociados.

// Sintaxis: 
// for (let clave in objeto) {
     // Bloque de código que se ejecutará en cada iteración
// }

// Explicación:

// clave → Representa el nombre de cada propiedad del objeto.
// objeto → Es el objeto que se recorrerá.
// En cada iteración, clave toma el valor de una propiedad del objeto y el código dentro del bloque se ejecuta.

// Ejemplo -> 

let animales = ["gato", "perro", "pajaro"];

for (animal in animales){
    console.log(animal)
}
// Animal va a ser igual a la posicion de cada uno de los valores -> gato[0], perro[1], pajaro[2]; nos da el indice en el que esta los elementos,
// Para que los muestre deberia ser
for (animal in animales) {
    console.log("Para que nos muestre con un IN " + animales[animal])
}

// Conclusión
// El bucle for...in en JavaScript es una herramienta poderosa para recorrer propiedades de objetos, permitiendo acceder dinámicamente a sus valores.

// 🔹 Cuándo usar for...in:
// ✅ Cuando se trabaja con objetos y se necesita iterar sobre sus propiedades.

// ⚠ Cuándo NO usar for...in:
// ❌ Para recorrer arrays, ya que devuelve los índices en lugar de los valores y puede incluir propiedades no deseadas. Para arrays, se recomienda for, forEach() o for...of.








// ----------------------- Sentencia FOR OF:
// Nos muestra el valor de los elementos, recorre el array

for (animal of animales){
    console.log(animal)
}









// ----------------------- Sentencia break: Un break termina la sentencia

let numero2 = 0;

while(numero2 < 15) {
    numero2++;
    console.log(numero2);
    if (numero2 == 10) {
        break; // cuando el break se ejecuta el bucle sale.
    }
}

console.log("Fin del bucle por el break")




// ----------------------- Sentencia label:
// Nos permite asociar un bucle (excepto ForEach) a un nombre para poder terminarlo cuando queramos
// Ejemplo si tenemos un array dentro de una array
// En JavaScript, la sentencia label (etiqueta) es una estructura que permite asignar un identificador a un bloque de código o a un bucle. Su propósito principal es facilitar el uso de las instrucciones break y continue en estructuras anidadas, permitiendo romper o continuar un bloque de código específico.

// Una etiqueta se define anteponiendo un nombre seguido de dos puntos (:) antes del bloque de código o del bucle al que se quiere hacer referencia.


// Sintaxis -> nombreEtiqueta: 
            // instrucción;

// Ejemplo -> 
etiquetaBucle: 
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (j === 3) {
            break etiquetaBucle; // Rompe el bucle etiquetado
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
//Explicación -> La etiqueta etiquetaBucle marca el inicio del bucle externo Cuando j === 3, la instrucción break etiquetaBucle; rompe directamente el bucle externo, no solo el interno.


// Usos ->  Usos de la Sentencia label:

// La sentencia label se utiliza principalmente en los siguientes casos:
// Romper múltiples bucles anidados con break.
// Saltar iteraciones específicas en bucles anidados con continue.
// Facilitar la lectura y manipulación de estructuras de control complejas.

//Ejemplo con break y label
// Cuando se usa break dentro de un bucle anidado sin etiqueta, solo rompe el bucle más interno. Con label, podemos romper un bucle específico.
outerLoop: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
        if (i === 1 && j === 1) {
            break outerLoop; // Rompe el bucle etiquetado
        }
    }
}
// Explicación: break outerLoop; rompe el bucle externo outerLoop, no solo el interno.
// Sin la etiqueta, break solo saldría del bucle más interno.


// Ejemplo con continue y label -> Continue en combinación con label permite saltar a la siguiente iteración de un bucle externo, evitando que se ejecuten instrucciones en iteraciones específicas.

outerLoop: 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            console.log("Saltando la iteración con i = 1 y j = 1");
            continue outerLoop; // Salta a la siguiente iteración del bucle externo
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Explicación -> Cuando i === 1 && j === 1, la instrucción continue outerLoop; hace que la iteración actual del bucle externo se detenga y pase a la siguiente iteración de i.
// Sin label, continue solo afectaría al bucle más interno.

//Característica: break -> Función: Termina un bucle. Afecta a Solo al bucle actual (o etiquetado). Uso con label Permite romper un bucle externo.

//Característica: continue -> Función: 	Salta una iteración. Afecta a Solo al bucle actual (o etiquetado). Uso con label Permite saltar iteraciones de un bucle externo.

//Característica: label -> Función: Define un identificador para un bloque de código. Afecta a Cualquier bloque o bucle. Uso con label Se usa para referenciar bloques de código.

// Conclusión
// La sentencia label en JavaScript es una herramienta avanzada que permite identificar bloques de código y referenciarlos en instrucciones break o continue.

// 🔹 Cuándo usar label:
// ✅ En estructuras anidadas donde es necesario romper o saltar iteraciones de bucles externos.

// 🔹 Cuándo evitar label:
// ❌ En código simple o cuando hay alternativas más claras como funciones auxiliares o return.

// Su uso correcto puede mejorar la eficiencia y claridad del código en ciertos escenarios, pero debe utilizarse con precaución para evitar confusión y dificultar la depuración. 🚀


// Otro ejemplo -> 

let array1 = ["maría", "josefa", "roberta"];
let array2 = ["pedro", "marcelo", array1, "josefina"];

forRancio:
for (let array in array2) {  // 'array' representa los índices (0,1,2,3)
    if (array == 2) {  // Cuando array es 2, accedemos a array1
        for (let array of array1) { // Iteramos sobre ["maría", "josefa" "roberta"]
            console.log(array); // Escribe "maría"
            break forRancio;  // Sale de todos los bucles inmediatamente
        }
    } else {
        console.log(array2[array]);
    }
}

// Ejecución línea por línea:
// array2 se recorre con for...in
// array = 0 → "pedro" se imprime.
// array = 1 → "marcelo" se imprime.
// array = 2 → Se activa el bloque if porque array == 2.
// Se entra en el for...of para recorrer array1
// La primera iteración toma "maría".
// document.write("maría" + "<br>") imprime "maría".
// break forRancio; se ejecuta y rompe ambos bucles, por lo que "josefa" y "roberta" no llegan a imprimirse.


//Explicación del Código:

// Se definen dos arreglos:

// array1 con nombres.
// array2, que incluye array1 como su tercer elemento.
// Se usa un bucle for...in para iterar sobre array2, donde array es el índice de cada elemento.

// Cuando array == 2 (es decir, cuando se accede al tercer elemento de array2, que es array1):

// Se inicia un bucle for...of para iterar sobre array1 y escribir sus elementos en pantalla.
// Luego, se usa break forRancio; para romper ambos bucles y salir completamente del ciclo.
// Si array != 2, se imprime el elemento correspondiente de array2.




// ----------------------- Sentencia continue:
// Ejemplo -> 
for (let i = 0; i < 6; i++) {
    if(i == 4) {
        continue
    }
    console.log("Usando Continue " + i) // salta el numero/dato y continua el bucle
}





/* ----------------------- FUNCIONES ----------------------- */
// Definición y usos
// Formas de crear funciones y llamarlas ->
// Return ->
// Parametros ->
// Scope ->
// Funciones Flecha ->



