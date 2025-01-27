// = el igual anida objetos
// string - number - boolean - undeafined - NaN - Null - Array (datos primitivos)

//  OBEJETO es un tipo (objeto es un tipo de dato complejo) -> un objeto son grupos de valores, valores colectivos, es una coleccion de datos y busca representar un objeto real o un concepto || almacena dentro de una estructura de datos para almacenar conecciones de caracteristicas de un producto
// Un objeto tiene propiedaddes y métodos
//las propiedades son las características 
const frutas = ["manzana", "pera", "limon"];
console.log(frutas[1]);

//Sintaxis ->
// las propiedades del objeto se definen con : (dos puntos) y se separa con una , (coma)

const celular = {
    marca: {
        nombre: "Xiaomi",
        modelo: "Poco 3",
        version: "2020"
    },
    empresa: "personal", 
    color: "negro", 
    cantDeCamaras: "tres", 
    tieneCarcasa: "true",
    memoria: "128, 256"
};

console.log(celular)

//accediendo a valores 
// se pude acceder con notacion de puntos -> cuando se el nombre de la propiedad
celular.empresa
console.log(celular.empresa) // asi entramos al valor de la empresa del celular
console.log(celular.cantDeCamaras) // valor de la cantidad de camaras

//Datos anidados en objetos -> 
console.log(celular.marca.version);
console.log(celular.memoria[1]);

// creacion de propiedades -> cuando el navegador llega a la linea 39 le da valor a todo el array
celular.aplicaciones = ["instagram", "facebook", "mercadopago", "capcut"]; 

// modificar una propiedad ->
celular.color ="rojo"
console.log(celular.color)

// eliminar un objeto ->
delete celular.tieneCarcasa;
console.log(celular)

function validarCamaras(tieneCam, celular) {
    if(tieneCam) {
        delete celular.CantDeCamaras;
        console.log("Camaras eliminadas")
    } else {
        console.log("El celular no tiene camaras")
    }
}

const celular2 = {
    marca: "samsung",
    camaras: "0",
}
const celular3 = {
    marca: "iphone",
    camaras: "1"
}

validarCamaras(false, celular2);
console.log(celular2)

validarCamaras(true, celular3)
console.log(celular3);

// Acceso Estatico -> celular.marca (ya seleccionamos un objeto)
// Acceso Dinamico ->
// acceder a propiedad que no sabemos el nombre (acceso dinamica)|| hacemos una variable para poder sacar el nombre 

const propDeMarca ="nombre";
console.log(celular.marca[propDeMarca]);

const tipoDeMemoria = 0;
console.log(celular.marca[tipoDeMemoria]);

function verPropiedad(propiedad, objeto){
    // Accediendo de forma dinamica
// console.log(`El valor de ${propiedad} es: ${objeto[propiedad]}`);
//     if (propiedad === "juegoFav") {
//         console.log(`El juego favorito de arandela es: ${objeto[propiedad]}`);
//     }   else if (propiedad === "color") {
//         console.log(`El color de arandela es: ${objeto[propiedad]}`);
//     }   else if (propiedad === "edad") {
//         console.log(`La edad de arandela es: ${objeto[propiedad]}`);
//     }   else {
//         console.log("No tenemos ese dato de arandela");
//     }
// }

    // Accediendo de forma estatica
    if (propiedad === "juegoFav"){
        console.log(`El juego favorito de arandela es: ${objeto[propiedad]}`);
    }   else if (propiedad === "color"){ 
        console.log(`El color de arandela es: ${objeto[propiedad]}`);
    }   else if (propiedad === "edad"){
        console.log(`La edad de arandela es: ${objeto[propiedad]}`);
    } else {
        console.log("No tenemos ese dato de arandela")
    }
}
const arandela = {
    edad: 5,
    color: "marron",
    juegoFav: "jugar con la pelotita",
    propiedad: "test"
};

verPropiedad("juegoFav", arandela);


let pesos = 100;

const cajaDeAhorro = {
    pesos: 10000,
    dolares: 100,
    agregarPesos: function(cantidad){
        this.pesos = this.pesos + cantidad;
    },

    retirarPesos: function (cantidad){
        if (cantidad <= this.pesos) {
            this.pesos -= cantidad;
            console.log(`Retiraste $${cantidad}. Te quedan $${this.pesos}`);
        } else {
            console.log("no tenes suficiente dinero")
        }
        }
    }  
cajaDeAhorro.retirarPesos(100);



const alumnos = [
    {
        nombre: "Maria",
        gustoDeHelado: "mascarpone"
    },
    {
        nombre: "Jose",
        gustoDeHelado: "Dulce de leche"
    }
];

alumnos.forEach((alumnos) => {
    const saludo = `Hola soy ${alumnos.nombre} y mi gusto de helado fav es ${alumnos.gustoDeHelado}`
});



