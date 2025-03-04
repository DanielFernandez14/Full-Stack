import { useState, useEffect } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./ApiTest.css";

const ApiTest = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character");
                const data = await response.json();
                const shuffled = data.results.sort(() => 0.5 - Math.random()).slice(0, 6);
                setCharacters(shuffled);
            } catch (error) {
                console.error("Error al obtener los personajes", error);
            }
        };
        fetchCharacters();
    }, []);

    return (
        <Layout>
            <h1 className="title">Personajes de Rick and Morty</h1>
            <div className="grid-container">
                {characters.map((character) => (
                    <div key={character.id} className="card">
                        <img src={character.image} alt={character.name} className="image" />
                        <h2 className="name">{character.name}</h2>
                        <p className="status">Estado: {character.status}</p>
                        <p className="species">Especie: {character.species}</p>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export { ApiTest };