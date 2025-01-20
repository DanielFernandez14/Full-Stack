const form = document.querySelector("form")
const name = document.querySelector("#name")
const password = document.querySelector("#password")
const errorName = document.querySelector("#errorName")

form.addEventListener("submit", (e) => {

e.preventDefault()
const errorName = validateName()
const errorTextPassword = validatePassword()

if (!errorTextName) {
    errorName.textContent = ""
}
})


function validateName() {
const valueName = name.value
const valuePassword = password.value

if (valueName.length < 3) {
    errorName.textContent = "El nombre debe tener 3 caracteres como mínimo"
    return true
}

if (valueName.length > 8) {
    errorName.textContent = "El nombre debe contener 8 caracteres como máximo"
    return true
}

const lowercaseValueName = valueName.toLowerCase()
if (lowercaseValueName !== valueName) {
    errorName.textContent = "El nombre debe estar todo en minuscula"
    return true
}

const arrayCharactersName = valueName.split("")
let numberNameError = false
arrayCharactersName.forEach((character) => {
    if (!isNaN(Number(character))) {
    errorName.textContent = "El nombre solo debe contener caracteres alfabeticos"
    numberNameError = true
    }
})
return numberNameError
}

function validatePassword() {
    const valuePassword = password.value

    // Longitud mínima y máxima
    //Debe contener al menos un número
    //Debe contener al menos un caracter especial
    //No puede ser igual al nombre de usuario

    if(valuePassword === name.value) {
        errorPassword.textContent = "La contraseña debe ser diferente al nombre de usuario"
        return true
    }

    if (valuePassword.length < 8) {
        errorPassword.textContent = "La contraseña debe tener como minimo 8 caracteres"
        return true
    }

    if (valuePassword.length > 12) {
        errorPassword.textContent = "La contraseña debe tener como máximo 12 caracteres"
        return true
    }

    let tieneNumero = false

    valuePassword.split("").forEach((letra) => {
        if (!isNaN(Number(letra))) {
            tieneNumero = true
        }
    }
    )}

    if (tieneNumero === false) {
        errorPassword.textContent = "La contraseña debe incluir un numero"
        return true
    }

    let tieneCaracteresEspeciales = false
    const specialCharacters =""

    valuePassword.split("").forEach((caracter) => {
        if (specialCharacters.includes(caracter)) {
            tieneCaracteresEspeciales = true
        }
    })

    if (tieneCaracteresEspeciales === false) {
        errorPassword.textContent = "La contraseña debe tener un caracter especial"
        return true
    }
