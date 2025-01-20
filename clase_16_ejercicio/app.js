const form = document.querySelector("form")
const velocidad = document.querySelector("#velocidad")
const distancia = document.querySelector("#distancia")
const resultado = document.querySelector("h2")


function calcularTiempo() {
    const tiempo = distancia.value / velocidad.value
    return true
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const tiempoCalculado = calcularTiempo()
    resultado.textContent = "El viaje tarda: " + tiempoCalculado + "hs."
})
