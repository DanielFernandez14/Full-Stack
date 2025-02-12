// C) Cofla ya tiene su nuevo celulary ahora esta mirando las app que quiere para jugar, que tenga buena puntuacion y que pese poco, pero las 7 apps que llamaron su atencion son un tanto similares y sabe que si descarga todas juegue con todas, va a descargar 2 nomas.

// Crear Soluciones: Crear un sistema que ayude a cofla a decidir cual app descargar. La info de los instaladores debe contener la cantidad de descargas, la puntuacion y el peso. La app se debe poder instalar, abrir, cerrar y desintalar. 

class App{
    constructor(descargas, puntuacion, peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = true; 
    }
    
    instalar(){
        if(this.instalada == true) {
            this.iniciada = true;
            if (this.instalada == true) {
                alert("app instalada correctamente")
            } else {
                alert("ha ocurrido un error")
            }
        }
    }
    desinstalar(){
        if(this.instalada == true) {
            this.iniciada = false;
            alert("app desinstalada correctamente")
        }
    }

    abrir(){
        if(this.iniciada == false && this.instalada == true) {
            this.iniciada = true;
            alert("app iniciada");
        }
    }
    cerrar(){
        if(this.iniciada == true && this.instalada == true) {
            this.iniciada = false;
            alert("app cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b>
        Puntuación: <b>${this.puntuacion}</b>
        Peso: <b>${this.peso}</b>
        `
    }
}


app1 = new App("16.000", "5 estrellas", "900 Mb");
app2 = new App("12.000", "2.2 estrellas", "1510 Mb");
app3 = new App("1.000", "4.5 estrellas", "153 Mb");
app4 = new App("1.000", "5 estrellas", "165 Mb");
app5 = new App("163.000", "4.1 estrellas", "185 Mb");
app6 = new App("158.000", "3.5 estrellas", "98 Mb");
app7 = new App("1.000", "1.5 estrellas", "90 Mb");


document.write(`
    ${app1.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
    `)

    
    
    
    
    
    
    


app1.instalar()
app1.abrir()
app1.cerrar()
app1.desinstalar()

