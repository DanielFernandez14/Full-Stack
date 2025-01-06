const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const form = document.querySelector("form")

function sendData(event){
    event.preventDefault() // no actualiza la pestaña, no se redirecciona cuando ponemos enviar en el boton
    console.log(input1.value)

}

form.addEventListener("submit", sendData)

