// A) 3 chicos de 23 años entran a una heladeria a comprar un helado pero hay un problema: los precios no estan al lado de cada estante con su respectivo helado. Ellos quieren comprar el helado mas caro que puedan con la plata que tienen ->

// Roberto tiene $1.5 Usd
// Pedro tiene $1.7 Usd
// Cofla tiene $3Usd

// Los precios de helados son los siguientes:
// Palito de helado de agua: $0.6 Usd
// Palito de helado de crema: $1 Usd
// Bombon helado marca heladix: $1.6 Usd
// Bombon helado marca heladocich: $1.7 Usd
// Bombon helado marca helardo: $1.8 Usd
// Potecito de Helado con confites: $2.9 Usd
// Pote de 1/4 Kg -> $2.9 Usd

//Crear Soluciones: Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar
// Si hay dos o mas con el mismo precio, mostrar ambos
// Cofla quiere saber cuanto es el vuelto

let dineroCofla = prompt("Cuanto dinero tienes Cofla?");
let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("Cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1){
    console.log("comprate helado de agua")
    } else if (dineroCofla >= 0.6 && dineroCofla < 1){
    console.log("comprate helado de crema");
    console.log("y te sobran " + (dineroCofla - 0.6));
}
    else if (dineroCofla >= 1 && dineroCofla < 1.6){
    console.log("comprate helado de heladix")
    console.log("y te sobran " + (dineroCofla - 1));
}
    else if (dineroCofla >= 1.6 && dineroCofla <= 1.7){
    console.log("comprate helado de heladocich")
    console.log("y te sobran " + (dineroCofla - 1.6));
}
    else if (dineroCofla >= 1.8 && dineroCofla < 1.7){
    console.log("comprate helado de helardo")
    console.log("y te sobran " + (dineroCofla - 1.8));
}
    else if (dineroCofla >= 2.9) {
    console.log("Helado con confites o el pote de 1/4");
    console.log("y te sobran " + (dineroCofla - 2.9));
    } else {
    console.log("lo siento, no alcanza")
    };

if (dineroPedro >= 0.6 && dineroPedro < 1){
    console.log("comprate helado de agua")
    } else if (dineroPedro >= 0.6 && dineroPedro < 1){
    console.log("comprate helado de crema")
    console.log("y te sobran " + (dineroPedro - 0.6));
}
    else if (dineroPedro >= 1 && dineroPedro < 1.6){
    console.log("comprate helado de heladix")
    console.log("y te sobran " + (dineroPedro - 1));
}
    else if (dineroPedro >= 1.6 && dineroPedro <= 1.7){
    console.log("comprate helado de heladocich")
    console.log("y te sobran " + (dineroPedro - 1.6));
}
    else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    console.log("comprate helado de helardo")
    console.log("y te sobran " + (dineroPedro - 1.8));
}
    else if (dineroPedro >= 2.9) {
    console.log("Helado con confites o el pote de 1/4")
    console.log("y te sobran " + (dineroPedro - 2.9));
    } else {
    console.log("lo siento, no alcanza")
    };

if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    console.log("comprate helado de agua")
    } else if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    console.log("comprate helado de crema")
    console.log("y te sobran " + (dineroRoberto - 0.6))
}
    else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    console.log("comprate helado de heladix")
    console.log("y te sobran " + (dineroRoberto - 1))
}
    else if (dineroRoberto >= 1.6 && dineroRoberto <= 1.7){
    console.log("comprate helado de heladocich")
    console.log("y te sobran " + (dineroRoberto - 1.6))
}
    else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    console.log("comprate helado de helardo")
    console.log("y te sobran " + (dineroRoberto - 1.8))
}
    else if (dineroRoberto >= 2.9) {
    console.log("Helado con confites o el pote de 1/4")
    console.log("y te sobran " + (dineroRoberto - 2.9))
    } else {
    console.log("lo siento, no alcanza")
    };

    "use strict";
//------------------------------------------------
// const definirCompra = (n) => {
//     let din = parseFloat(prompt(`Dinero de ${n}`)); // Convertimos a número

//     if (din >= 0.6 && din < 1) return `${n}: helado de agua`;
//     if (din >= 1 && din < 1.6) return `${n}: helado de crema`;
//     if (din >= 1.6 && din < 1.7) return `${n}: helado de heladix`;
//     if (din >= 1.7 && din < 1.8) return `${n}: helado de heladovich`; // Corregido el nombre
//     if (din >= 1.8 && din < 2.9) return `${n}: helado de helardo`;
//     if (din >= 2.9) return `${n}: helado de confites o pote de 1/4kg`;

//     return `${n}: No te alcanza para ningún helado.`;
// };

// console.log(definirCompra("Cofla"));
// console.log(definirCompra("Pedro"));
// console.log(definirCompra("Roberto"));
//------------------------------------------------

