// 1. Imprimir un mensaje en la consola
// 📌 Ejercicio: Escribe un programa que imprima "Hola, JavaScript!" en la consola.

console.log("Hola, JavaScript!");


// 2. Sumar dos números
// 📌 Ejercicio: Escribe un programa que sume dos números y muestre el resultado.

let num1 = 3;
let num2 = 2;

console.log(num1 + num2);

// let num1 = 5;
// let num2 = 7;
// let suma = num1 + num2;
// console.log("La suma es: " + suma);

// Explicación:

// let num1 = 5; y let num2 = 7; → Declaramos dos variables con let.
// num1 + num2 → Operador + para sumar valores numéricos.
// "La suma es: " + suma → Concatenación de texto con el operador +.


// 3. Pedir datos al usuario
// 📌 Ejercicio: Solicita al usuario su nombre y muestra un mensaje de bienvenida.


// let nombre = prompt("Cual es tu nombre?");
// console.log("Bienvenido, " + nombre + "!")

// Explicación:

// prompt(...) muestra un cuadro de entrada donde el usuario puede escribir algo.
// La entrada del usuario se almacena en nombre.
// Luego se usa console.log(...) para mostrar el mensaje de bienvenida.


// 4. Verificar si un número es par o impar
// 📌 Ejercicio: Escribe un programa que determine si un número es par o impar.

// let numero = prompt("Introduce un número: ");
// numero = Number(numero); // lo convierte a un numero

// if (numero % 2 === 0) {
//     console.log("El número es par")
// } else {
//     console.log("El número es impar")
// }

// Explicación:

// numero % 2 === 0 → Si el residuo de la división entre 2 es 0, el número es par.
// Number(numero) → Convierte la entrada de prompt (que es un string) en un número.
// if (...) { ... } else { ... } → Estructura condicional para decidir qué mensaje mostrar.



// 5. Recorrer un array con un bucle
// 📌 Ejercicio: Escribe un programa que recorra un array de nombres y los imprima uno por uno.


let nombresArray=["Daniel", "Maria", "Nicolas", "Pepe"];
console.log(nombresArray);

let nombres = ["Ana", "Luis", "Pedro", "Marta"];

for(let i=0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// Explicación:

// let nombres = [...] → Creamos un array con nombres.
// for (let i = 0; i < nombres.length; i++) → Bucle for para recorrer el array.
// nombres[i] → Accede a cada elemento del array por su índice.


// 6. Función para calcular el cuadrado de un número
// 📌 Ejercicio: Define una función que reciba un número y devuelva su cuadrado.

function cuadrado(num) {
    return num * num;
} 
console.log(cuadrado(4));


// Explicación:

// function nombre(parametro) { ... } → Sintaxis para definir una función.
// return num * num; → Devuelve el cuadrado del número recibido.
// console.log(cuadrado(4)); → Llamamos la función con 4, devolviendo 16.


// 7. Generar un número aleatorio
// 📌 Ejercicio: Escribe un programa que genere un número aleatorio entre 1 y 10.

let numeroAleatorio = Math.floor(Math.random() * 10) +1;
console.log("Numero Aleatorio:", numeroAleatorio);

// Explicación:

// Math.random() → Genera un número decimal entre 0 y 1.
// Math.random() * 10 → Lo multiplica por 10 para obtener un rango de 0 a 9.999.
// Math.floor(...) → Redondea el número hacia abajo.
// +1 → Ajustamos el rango para que vaya de 1 a 10.


// 8. Comprobar si una palabra contiene una letra
// 📌 Ejercicio: Escribe un programa que verifique si la palabra "JavaScript" contiene la letra "J".



let palabraConJ = "avaScript";
if (palabraConJ.includes("J")) {
    console.log("La palabra contiene la letra J")
} else {
    console.log("La palabra no tiene la letra J")
}

// Explicación:

// .includes(...) → Método que verifica si un string contiene otro string.
// "JavaScript".includes("J") → Devuelve true si encuentra la "J".



// 9. Contar hasta 5 con un bucle while
// 📌 Ejercicio: Usa un bucle while para contar del 1 al 5.


let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

// 📝 Explicación:

// while (contador <= 5) { ... } → Mientras contador sea <= 5, sigue ejecutando el bloque.
// contador++ → Incrementa contador en 1 en cada iteración.


// 10. Verificar si un año es bisiesto
// 📌 Ejercicio: Escribe un programa que determine si un año es bisiesto.


let anio = prompt("coloca un año");

if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log(anio + " es un año bisiesto.");
} else {
    console.log(anio + " no es un año bisiesto");
}

// Explicación:

// Un año es bisiesto si:
// Es divisible por 4 y no por 100, o
// Es divisible por 400.
// if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) → Evalúa la condición.

//es par o no?
console.log(8 % 2 === 0);
// 📝 Explicación:

// 8 % 2 → Calcula el resto de la división.
// === 0 → Comprueba si el resto es 0 (número par).
// console.log(...) → Muestra true.


let texto = "JavaScript";
console.log(texto[0]);

// 📝 Explicación:

// texto[0] → Accede al primer carácter (J).
// console.log(...) → Muestra "J".



// Unirse dos cadenas de texto
// 📌 Ejercicio: Une "Hola" y "Mundo" en una sola cadena.

let hola = "Hola";
let mundo = "Mundo"

let palabra = hola + mundo;
console.log(palabra)



// Crear una función que devuelva un número
// 📌 Ejercicio: Crea una función que siempre devuelva 5.

function cinco() {
    return 5;
}
console.log(cinco());










