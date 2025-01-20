// Funciones -> fragmentos de codigo que se pueden reutilizar, cada una realiza una accion en particular

// Realiza un programa que salude

// ////////////////////////////////////////
// const saludo = document.querySelector("#saludo")

// const nombre1 = prompt("Ingrese su nombre")

// saludo.textContent = "Hola " + nombre1

// setTimeout(() => {
//     const nombre2 = prompt ("Ingrese su nombre 2")

//     saludo.textContent = "Hola " + nombre2
// }, 5000)
// ////////////////////////////////////////





// FUNCION NOMBRADA --------------------------------------
// Palabra reservada
// Nombre de funcion
// Parametro
// Scope (zona privada)

// PRIMERO 1° 
// declaracion de funcion (enseñarle a la pc que tiene que hacer)... la funcion se puede utilizar las veces que sea necesario y en donde sea


function saludar() {
    console.log("HOLA!")
}

// SEGUNDO 2° 
// invocacion de funcion (ejecutar la acción)

// Hoisting -> cuando se ejecuta el codigo el navegador busca todas las funciones y las "pone arriba de todo", entonces ya quedan disponibles para toda la pagina y todo el codigo; es la ejecucion de funciones al comienzo del script


const saludo = document.querySelector("#saludo")

// Parametro -> una variable local que se utiliza dentro de la funcion


// //Parametro por defecto
function saludarConNombre(nombre) {
    saludo.textContent = "Hola! " + nombre
}


// Argumento -> valor que le damos al parametro
// saludarConNombre("Pepe")

// const nombre = prompt ("Ingrese su nombre: ")
// saludarConNombre(nombre)



const resultado = document.querySelector("#resultado")

function calcular(numero1, numero2, operacion) {
    console.log(operacion)
    if (operacion === "suma"){
        resultado.textContent = numero1 + numero2
    } else if (operacion === "resta") {
        resultado.textContent = numero1 - numero2
    } else if (operacion === "multiplicación") {
        resultado.textContent = numero1 * numero2
    } else if (operacion === "división") {
        if (numero2 === 0) {
            resultado.text4 = "No se puede dividir por 0"
        } else {
        resultado.textContent = numero1 / numero2
    } 
    }else {
    resultado.textContent = "Operacion no valida"
}}

const n1 = prompt("Ingrese numero 1: ")
const n2 = prompt("Ingrese numero 2: ")
const operacion = prompt("ingrese que operacion desea hacer: ")

calcular(n1, n2, operacion)

console.log(resultado)


const texto = document.querySelector("#texto")

function crearSaludo(){
    const saludo = "Hola a tdoos, como estan?"
    return
}

const saludoCreado = crearSaludo()

console.log(saludoCreado)

texto.textContent = saludoCreado

// return -> lo que devuelve una función
// cuando usar return y cuando no

function mezclarIngredientes() {
    console.log("Mezclando ingredientes...")
}

const body = document.querySelector("body")

const colores = ["red", "blue", "brown", "green", "yellow"]

function cambiarColor(){
    const numeroAleatorio = Math.floor(Math.random() * colores.length)
    const colorAleatorio = colores [numeroAleatorio]
}




