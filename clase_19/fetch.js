// fetch es para "traer" "extraer" data o info de una pagina o api
// fetch https://jsonplaceholder.typicode.com/todos
function saludar(name){
    return `Hola ${name}`;
}
console.log(saludar("Pepe"));

// Código asincrono -> una instrucción que se resuelve despues de cierto tiempo 
// nos devuelve una promesa 


const itemList = document.querySelector("#item-list");

fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => {
    return response.json();
})
.then((data) => {
    data.forEach((objet) => {
    if (objet.completed) {
        itemList.innerHTML += `
        <li style="background-color: green;">
        <p><span>${objet.id}</span> ${objet.title}</p>
        </li>
    `;
    } else {
        itemList.innerHTML += `
        <li style="background-color: red;">
        <p><span>${objet.id}</span> ${objet.title}</p>
        </li>
    `;
    }
    });
});

// Consigna: tratar de renderizar los datos pertenecientes a los personajes de Rick & Morty
// fetch https://rickandmortyapi.com/api/character

async function fetchingData() {
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos");
    const list = await response.json();
    console.log("aca la lista ->", list);
}

fetchingData();