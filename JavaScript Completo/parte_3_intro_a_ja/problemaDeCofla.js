// A) Mostrarle las particularidades de los 3 celulares. Cada uno debe tener color, peso, resolucion de pantalla ,camara y memoria ram. Deben poder prender, reiniciar, tomar fotos y grabar
// B) implementar todas estas cualidades en los celulares de alta gama
// c) crear un sistema para decidir que app descargar. debe contener la cantidad de descargas, puntuacion y peso. Se deben poder instalar, abrir, cerrar y desinstalar

// A) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
// De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención 3 teléfonos específicamente.
// El problema es que ningún vendedor sabe nada al respecto, entonces no pueden recomendarle absolutamente nada... pero claro:
// Él antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahí entramos nosotros.

// CREAR SOLUCIONES
// Crear un sistema para mostrarle a Cofla las particularidades de los 3 celulares.
// Cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria RAM.
// Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.

// B) Cofla no está satisfecho con los celulares, así que decide ir a la sección de celulares de alta gama, donde va a poder encontrar los celulares más caros del lugar. Así que al entrar, vio dos celulares que le encantaron. Estos 2 celulares de alta gama pueden hacer todo lo que podían hacer los 3 anteriores, pero tienen mejores características y además pueden grabar en cámara súper lenta, tienen reconocimiento facial y una cámara extra.

// CREAR SOLUCIONES
// Implementar todas estas cualidades en los celulares de alta gama.

// C) Cofla ya tiene su nuevo celulary ahora esta mirando las app que quiere para jugar, que tenga buena puntuacion y que pese poco, pero las 7 apps que llamaron su atencion son un tanto similares y sabe que si descarga todas juegue con todas, va a descargar 2 nomas.

// Crear Soluciones: Crear un sistema que ayude a cofla a decidir cual app descargar. La info de los instaladores debe contener la cantidad de descargas, la puntuacion y el peso. La app se debe poder instalar, abrir, cerrar y desintalar. 

class Celular {
    constructor(color, tamaño, peso, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = rdp;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.tamaño = tamaño;
        this.encendido = false;
        
    }
    presionarBotonEncendido(){
        if (this.encendido == false) {
            alert("celular prendido");
            this.encendido = true
        } else {
            alert("celular apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if (this.encendido == true) {
            alert("reinciando celular");
        } else {
            alert("el celular esta apgado")
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`grabando video en: ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return`
        Color: <b>${this.color}</b>
        Peso: <b>${this.peso}</b>
        Tamaño: <b>${this.tamaño}</b>
        Resolucion de Camara: <b>${this.resolucionDeCamara}</b>
        Memoria Ram: <b>${this.ram}</b>
        Resolucion de Video: <b>${this.resolucionDeCamara}</b>
        `
    }
}


class CelularAltaGama extends Celular {
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }
    grabarVideoLento(){
        alert("Estas grabando en camara lenta")
    }
    reconocimientoFacial(){
        alert("vamos a iniciar un reconocimiento facial")
    }
    infoAltaGama(){
        return this.mobileInfo() + `Resolucion de camara extra: ${this.resolucionDeCamaraExtra}`
    }
}


// celular1 = new Celular("rojo", "150 g",5,"Full Hd","2 Gb")
// celular2 = new Celular("negro", "180 g","3","Hd","1 Gb")
// celular3 = new Celular("amarillo", "175 g","5.5","Full Hd","2 Gb")

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

celular1 = new CelularAltaGama("rojo", "130g", "5.2", "4k", "3gb", "Full HD" );
celular2 = new CelularAltaGama("negro", "142g", "6", "4k", "4gb", "Full Hd");

document.write(`
    ${celular1.infoAltaGama()}
    ${celular2.infoAltaGama()}
    `)







