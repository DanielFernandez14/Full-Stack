const students = ["Juan", "Manuel", "María", "José"];


// Longitud de Array -> cantidad de elementos

const studentsConst = students.length

console.log(studentsConst);

// Que es un método -> En JavaScript, un método es una función asociada a un objeto. Es decir, es una propiedad del objeto cuyo valor es una función. Los métodos permiten que los objetos realicen acciones o manipulen sus propios datos.  Es una accion que esta predeterminada en el lenguaje para un elemento



// ---------------------------------------------
// ---------------------------------------------

// FIND -> Encontrar -> buscar un elemento basado en una condición 

// Encontrar el primer alumno que empiece con M

// 1° iterar el array -> con un find
// 2° definir la condicion
// 3° guardar el elemento encontrado

// Devuelve el valor del primer elemento en el arreglo donde el predicado sea verdadero, y undefined en caso contrario.

const presentStudents = ["Juan", "Manuel", "María", "José"];

const firstNameWithJ = students.find((student) => { 
    const validateName = student.startsWith ("J")

if (validateName === true) {
    console.log(student)
}
// Fin del Bucle
})

const isPresent = presentStudents.find((student) => {
    const mariaIsPresent = student === "María"

    if (mariaIsPresent === true){
        return student
    }
})

const isMariaPresent = presentStudents.includes("María")
console.log(isMariaPresent);




// ---------------------------------------------
// ---------------------------------------------
const cart = ["Parlante", "Campera", "Remera", "Pc", "Lampara"]

//Filter -> Devuelve los elementos de un arreglo que cumplen con la condición especificada en una función de devolución de llamada.

// callback -> funcion que se ejecuta despues de que pasa algo
// encontrar todos los productos que comiencen con P
const products = cart.filter((product) => { 
    // Forma 1
    if (product.startsWith("P")) {
        return product
    }
    // // Forma 2
    // const validateName = product.startsWith("P")
    // if (validateName === true) {
    //     return product
    // }
})

console.log(products)

// ---------------------------------------------
// ---------------------------------------------

// Map -> mapear -> transforma cada elemento

const divNames = document.querySelector("#names")
const namesWithErrors = ["lUcA", "DanIEL", "PablO"]

const namesWithoutErrors = namesWithErrors.map((name) => {
    divNames.innerHTML += `<h2>${name.toLowerCase()} </h2>`
    return name.toLowerCase()
})

console.log (namesWithoutErrors)



// ---------------------------------------------
// ---------------------------------------------

// Situacion: el usuario agrega productos a un carrito. Cada vez que se agrega un producto, se muestra el numero total de productos.

// 1° Poder tomar nuevos productos, form
// 2° Conectar form con Js
// 3° Reservar un espacio en memoria para los productos
// 4° Crear una funcionalidad para calcular la cantidad de productos


const input = document.querySelector("#input1")
const form = document.querySelector("form")

const productsToCart = [] // lo dejamos afuera para que el array no se reinicie cada vez que ejecutamos el submit del boton, sino se manda y se borran los datos ingresados

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const valueInput = input.value


    productsToCart.push(valueInput)

    console.log (productsToCart)
//Mostrar el total de productos
    console.log("La cantidad total de productos es de : " + productsToCart.length)

const ifPC = productsToCart.find((product) => {
    if (product === "pc") {
        console.log(product + " se encuentra con 50% de descuento")
        return product
    }
})

    input.value = "" // para que queden la cantidad de productos
})

const productsList = document.querySelector("#productsList")
const productosToCart = []
// Ejemplo 2:
form.addEventListener("submit", (event) => {
event.preventDefault()
productosToCart.push(input.value)
productsList.innerHTML = ""
productosToCart.map((product) => {
    productsList.innerHTML += `<li>${product}</li>`
})
input.value = ""
})