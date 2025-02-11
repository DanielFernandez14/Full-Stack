// Poo -> definicion y objetos, ejemplos, instanciación.
// Conceptos basicos de POO -> clase, objeto, atributo, metodo, constructor
// Caracteristicas de la POO -> abstaccion, modularidad, jerarquia
// Otros conceptos de POO -> polimorfismo, herencia
// otros conceptos de POO -> encapsulamiento.

// por que se creo? para programar cosas en la vida real. como si estuvieran pensadas para la vida real. 

// Clases -> idea de todo lo que puede ser (calculadora)
// El Objeto es la instanciacion de eso
// Propiedad -> son variables dentro de una clase -> la calculadora es cuadrada, tiene un vidriecito, teclas, es negra
// Metodos -> son funciones que se aplican a un objeto -> la calculadora puede sumar, restar, multiplicar -> los metodos son las acciones que puede hacer
// Polimorfismo -> es la capacidad que tienen los objetos de comportarse de una manera diferente a un metodo. 
// Herencia -> es la capacidad que tenemos de ahorrar codigo en clases, heredamos los metodos y las clases del metodo anterior. 

//En términos simples, POO en JavaScript permite organizar y modelar el comportamiento y los datos del software de manera más modular y reutilizable.






// Es un paradigma de la programacion que lo que hace es intentar actualizar la forma en la que programamos mejorandola y haciendo que podamos programar objetos como lo hariamos en la vida real. Un paradigma es una forma de crear soluciones a situaciones que se nos presentan. resolver los problemas de una mejor forma.




// --------------------------- Clase -> es como una receta, una plantilla con la que podemos crear objetos.

// --------------------------- Objeto -> son el resultado de las clases

// --------------------------- Atributo -> son las caracteristicas que tienen los objetos

// --------------------------- Metodo -> lo que puede hacer el objeto

// --------------------------- Constructor -> particularidad que tienen las clases -> funcion obligatoria -> cuando creamos una clase tenemos que crear un constructor que nos da las propiedades del objeto

// --------------------------- Instanciado -> cuando se finaliza



class Animal {
    constructor(especie,edad,color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años de edad, y soy de color ${this.color}`
    }
    verInfo(){
        console.log(this.info)
    }
}
//herencia
class Perro extends Animal {
    constructor(especie, edad, color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    // ladrar(){
    //     alert("¡WAW!")
    // }
    set setRaza(newName){
        this.raza = newName;
    }
    get getRaza(){
        return this.raza;
    }
}

// this hace referencia al objeto, el objeto que voy a crear
// lo que esta dentro del parentesis del constructor(especie,edad,color) no es la misma que la que sigue a this.
// los que siguen al = si son lo mismo que lo que esta dentro del parentesis
//this. crea una propiedad del objeto llamada a lo que sigue el punto

const perro = new Perro("perro",5,"rojo", "doberman")
const gato = new Animal("gato",10,"anaranjado")
const loro = new Animal("loro",3,"negro")

// Las clases se definin con const

perro.setRaza = "Pedro"
console.log(perro.getRaza)


perro.verInfo();
gato.verInfo();
loro.verInfo();

//definimos el constructor con los parentesis
// el new dice vamos a crear una clase, perro es un objeto de la clase animal


// console.log(perro.informacion)
// console.log(gato.informacion)
// console.log(loro.informacion)



// Los metodos son las acciones que podemos hacer, los metodos se crean adentro de la clase, si creamos el metodo dentro de la clase se le dice metodo, sino se le dice funcion (porque es una funcion)
// las funciones flecha no pueden ser creadas para utilizarse dentro de las clases
// verInformacion = ()=>{
//     console.log(this.informacion)
// }




// --------------------------- Caracteristicas de la POO
// abstraccion, momdularidad, encapsulamiento, polimorfismo

// Abstraccion -> intentar reducir el objeto a su menor tamaño posible. Tenemos lo mas importante del objeto.

// Modularidad -> capacidad de resolver un problema grande separandolo en porciones 

// Encapsulamiento -> el usuario no puede acceder a los datos

// Polimorfismo -> como un objeto se comporta dependiendo de sus propiedades. 


// --------------------------- Otros conceptos de POO

// Herencia, metodos estaticos y metodos accesores (getters, setters)

// Herencia -> toma todas las propiedades de otra clase y le agrega cosas


// Metodos Estaticos -> es un metodo que no necesita que la clase se defina para ser creado
// static ladrar(){
//     alert("¡WAW!")
// }
// por ejemplo ahi apareceria el alert sin importar si esta dentro de la clase 

// Getters -> son para obtener un valor 
// Setters -> son para modificarlo o definirlo a un valor








