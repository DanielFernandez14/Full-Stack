// Consigna: Consumiendo una API con Fetch 
// Objetivo
// Crear una página web sencilla que muestre una lista de personajes de la serie Rick and Morty obtenidos desde una API.
// Requisitos
// Utilizar HTML, CSS y JavaScript.
// Hacer una petición con fetch a la API de Rick and Morty:
// Endpoint: https://rickandmortyapi.com/api/character
// Mostrar en pantalla una lista de personajes con:
// Imagen
// Nombre
// Estado (vivo, muerto, desconocido)
// Aplicar estilos básicos con CSS.
// Conceptos Clave para Recordar
// ✅ Qué es una API y cómo funciona una petición HTTP con fetch.
// ✅ Uso de .then() y .catch() para manejar respuestas y errores.
// ✅ Uso de async/await (opcional).



const API_URL = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error("Error al obtener los personajes:", error);
    }
}

function displayCharacters(characters) {
    const container = document.getElementById("character-container");
    container.innerHTML = ""; // Limpia el contenedor antes de agregar personajes

    characters.forEach(character => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p class="status ${character.status.toLowerCase()}">Estado: ${character.status}</p>
        `;

        container.appendChild(card);
    });
}

// Llamar a la función al cargar la página
fetchCharacters();