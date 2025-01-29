// JSON -> JSON (JavaScript Object Notation) es un formato de texto sencillo y ligero para el intercambio de datos. Aunque deriva de la sintaxis de objetos de JavaScript, es independiente del lenguaje y es ampliamente utilizado para transmitir datos entre un servidor y una aplicación web o móvil. 
// Es un string, tiene formato de lista de datos.


//Características principales de JSON:

// Legibilidad: Al ser un formato basado en texto, es fácil de leer y escribir tanto para humanos como para máquinas.

// Estructura sencilla: Utiliza una estructura de pares clave-valor y listas ordenadas, lo que facilita la organización y acceso a los datos.

// Compatibilidad: Aunque se originó en JavaScript, JSON es compatible con muchos lenguajes de programación, lo que lo convierte en una opción versátil para el intercambio de información.



// Lista de nuevos usuarios lista para enviar a un backend desarrollado en Python -> nos daria error porque esta hecho para js
const users = [
    {
        id: 1,
        name: "Jose Montivero"
    },
    {
        id: 2,
        name: "Simon Scheffer"
    },
    {
        id: 3,
        name: "Juan Vidal"
    }
];

// Lo convertimos en Json

const jsonusers = JSON.stringify(users) // stringify -> recibe una lista de usuarios (en este caso) y lo que hace es convertirla a JSON || convierte el objeto js a un "string" (json) para enviarlo a un backend desarrollado en otro lenguaje de programación.

console.log(jsonusers); 

//Respuesta del backend al frontend, es  decir, la respuesta que obtengo al consumir un recurso (api)
const convertedJsonUsers = '[{"id":1,"name":"Jose Montivero"},{"id":2,"name":"Simon Scheffer"},{"id":3,"name":"Juan Vidal"}]';

// Tomar la data en formato JSON y le damos formate js para su proceso
const convertedJsUsers = JSON.parse(convertedJsonUsers);

console.log(convertedJsUsers); // ya podriamos acceder al array [0,1]

//------------------- localstorage ------------------- 
// Sirve para guardar archivos de forma local y guarda la info en JSON

// para guardar info en local storage ->
//"users" -> queda como la key
localStorage.setItem("users", convertedJsonUsers);



const usersToLocalStorage = localStorage.getItem("users")

console.log(usersToLocalStorage, "<- usuarios del local stage")


