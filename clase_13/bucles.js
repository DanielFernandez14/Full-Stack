// Un bucle es una estructura de control que repite acciones
// Array -> lista -> una coleccion de elementos listados

const cart = ["tv", "celular", "remera"]
console.log(cart[1])


// function nombrarProducto(producto) {
//     console.log("Compre un/una" + " " + producto)
// }
// cart.forEach(nombrarProducto)


function nombrarProducto(producto, indice) {
// -------------------------- Empieza el bucle
    const posicion = indice + 1;
    console.log(posicion + "° " + "compre un/una " + producto)
    // -------------------------- Termina el bucle
}
cart.forEach(nombrarProducto)
