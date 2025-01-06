 /* ------------------ Condicion ------------------ */
//Una condicion es una estructura de control que realiza algo segun un hecho
// Funcionalidad -> qué hace

//Sintaxis -> como se escribe

//if -> palabra reservada
// () -> condicion
// {} -> scrope o zona privada

// if () {}

const nombre = "Daniel"

if (nombre === "Daniel") {
    console.log("Hola Daniel, te estabamos esperando, acá está tu entrada.")
} else if (nombre === "Marito"){
    console.log ("Hola Marito, te estabamos esperando, acá está tu entrada")
} else {
    console.log ("No sos Daniel, hola" + " " + nombre + "no estas en la lista :( ")
}

console.log("Fuera del if")