async function traerDatos() {
    const respuesta = await fetch("https.rickandmortyapi.com/api/character")
    const data = await respuesta.json();


data.results.forEach((personajes) => {
    console.log(personajes);
})
}

// funcion fetch