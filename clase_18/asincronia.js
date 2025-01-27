// el codigo asincronico es el que entra en espera para poder entrar y utilizarse || En JavaScript, la asincronía se refiere a la capacidad del lenguaje para manejar operaciones que pueden tardar en completarse sin bloquear la ejecución del resto del código. Esto permite que el programa continúe respondiendo a otros eventos mientras espera que dichas operaciones finalicen. || La programación asíncrona es esencial para crear aplicaciones web eficientes y receptivas, ya que evita que operaciones de larga duración bloqueen la ejecución del código, mejorando así la experiencia del usuario.

// Paso 1 -> Mostrar en consola que esta todo ok para comenzar la ejecucion del codigo

console.log("Hola! Comencemos...")

// Paso 2 -> Esperar que se haga el budín
console.log("Haciendo el budín...")
setTimeout(function ()  {
    console.log("Budin terminado")
}, 1000); // el tiempo en un setTimeOut se define en milisegundos
// nos aparece abajo del todo en la consola del nav


// Paso 3 -> Seguir atendiendo clientes
console.log("Atendiendo clientes")