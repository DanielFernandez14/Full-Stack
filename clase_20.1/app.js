const characterList = document.querySelector("#lista-de-personajes")

async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()

    const characters = data["results"]

    console.log(data["results"])
    

    //callback -> funcion que se ejecuta despues de que pasa "algo"
    characters.forEach((character) => {
        console.log(character.name)
        console.log(character.image)
        console.log(character.status)

        characterList.innerHTML += `<h2>${character.name}</h2>
        <img src="${character.image} alt="imagen de ${character.name}/">
        <p></p>
        `
    })
}

getCharacters()