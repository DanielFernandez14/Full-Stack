// Caracteristicas: lenguaje de programacion, interpretado, orientado a objetos, imperativo, case sensitive (distingue entre mayusculas y minusculas), basado en prototipos, tipado debil (el valor de las variables puede cambiar con el tiempo), lenguaje dinamico(la variable se ajusta al dato)

// Para que se usa? Dinamismo de sitios web del lado del cliente, como backend en NodeJS y para Tecnologias Frontend como Angulas y React.

// Variables: 
// Concepto: es un espacio que guardamos en memoria (se le guarda un dato)
recipiente = "papel";
// lo que cambia en una variable es el contenido, el dato.

// Tipos de datos (son datos primitivos porque ya vienen con el lenguaje): String (Cadena de texto), number, Boolean
string = "cadena de texto";
number = 19 // si lo ponemos entre comillas se transforma en un string
boolean = true, false;

// Casos especiales de Datos: 
// Undefined -> cuando no esta definida o no la inicializamos, la variable existe en el programa pero esta sin definir; nos habla de que la variable no esta definida o que hay un error. 
// Null -> tiene un valor, tiene el valor de nulo de estar vacia, es un vacio que lo declaramos intencionalmente.
let numero = null; // esta inicializada y su valor es null (vacia)
// y NaN (no es un numero) ->  intentamos hacer una operacion (no concatenacion) con algo que no es un numero

// var, let, const -> tres formas de declarar la variable. Let nos limita el alcance de la variable al bloque en el que la ejecutamos. Const es una constante (siempre se va a mantener el nombre y no se puede repetir)
// const nombre = "daniel"; // la constante se inicializa una sola vez, no se puede volver a nombrar una const nombre.

// Scope -> el ambito de las variables, el contexto, a donde es que esta limitado su uso por ejemplo, un if no puede hacer cambios por afuera de si mismo, un else tampoco

//Hoisting -> como funciona la fase de creacion y de ejecución,

// Prompt
//ejemplo ->
// let nombre = prompt("decime tu nombre")
// alert ("Hola " + nombre)
// Donde se guarda? -> en la variable nombre 



//--------------------
// Operadores

// Operadores de Asinganción -> asigna un valor al operando de la izquierda basado en el valor del operando de la derecha 
//Los operadores de asignación en JavaScript son: = (asignación), += (suma y asignación), -= (resta y asignación), *= (multiplicación y asignación), /= (división y asignación), %= (módulo y asignación -> te da el resto de la division 50 entre 6 = 2), **= (exponente y asignación), &= (AND bit a bit y asignación), |= (OR bit a bit y asignación), ^= (XOR bit a bit y asignación), <<= (desplazamiento a la izquierda y asignación), >>= (desplazamiento a la derecha y asignación) y >>>= (desplazamiento a la derecha sin signo y asignación).

// Operadores Aritmeticos -> toman valores numericos (ya sean literales o variables) como sus operandos y retornan un valor numerico unico -> 

// + (suma), 
// - (resta), 
// * (multiplicación), 
// / (división), 
// % (módulo), 
// ** (exponente, potencia), 
// ++ (incremento -> incrementa de a 1 el valor) 
// -- (decremento {numero1 = 10; alert(numero1--), resultado = 9)}.

// ejemplos ->
numero1 = 10; 
numero2 = 5;

resultado = numero1 + numero2;
resultado1 = numero1 - numero2;
resultado2 = numero1 * numero2;
resultado3 = numero1 / numero2;
resultado4 = numero1 % numero2;
resultado5 = numero1 ** numero2;
resultado6 = numero1 ++;
resultado7 = numero1 --;

console.log(resultado, resultado2, resultado3, resultado4,resultado5, resultado6, resultado7);



//--------------------
// Concatenación 
// -> unir strings


saludo = "Hola pedro "
pregunta = "como estas?"

frase = saludo + pregunta;
console.log(frase);

// concatenar un numero -> cuando se detecta un string lo convierte ejemplo = 
numero1 = 5;
numero2 = 8; 
resultado = "" + numero1 + numero2;
console.log(resultado);

// con backtiks y la variable entre ${}

nombrebacktiks = "daniel"
resultadobacktiks = `soy ${nombrebacktiks} y estoy caminando`;
console.log(resultadobacktiks);



//--------------------
// Operadores

//Operadores de Comparación -> comparan dos expresiones y devuelven un valor Boolean que representa la relacion de sus valores, devuelven true o false

// Los operadores de comparación en JavaScript son: == (igualdad, compara valores sin considerar el tipo); === (igualdad estricta, compara valores y tipos de datos); != (desigualdad, compara valores sin considerar el tipo); !== (desigualdad estricta, compara valores y tipos de datos); > (mayor que); < (menor que); >= (mayor o igual que); <= (menor o igual que).

//Operadores Logicos -> 