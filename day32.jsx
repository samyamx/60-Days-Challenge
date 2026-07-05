import { useState } from "react";
import "./App.css";

function PokemonCard({ pokemon, selected, onSelect }) {
  return (
    <div
      className={`card ${selected ? "active" : ""}`}
      onClick={() => onSelect(pokemon)}
    >
      <img src={pokemon.image} alt={pokemon.name} />

      <h2>{pokemon.name}</h2>

      <p>Type: {pokemon.type}</p>

      {pokemon.power > 85 ? (
        <span className="strong">🔥 Strong Pokemon</span>
      ) : (
        <span className="normal">⭐ Normal Pokemon</span>
      )}
    </div>
  );
}

function PokemonDetails({ pokemon }) {
  return (
    <div className="details">
      <h1>{pokemon.name}</h1>

      <img src={pokemon.image} alt={pokemon.name} />

      <p>
        <strong>Type:</strong> {pokemon.type}
      </p>

      <p>
        <strong>Power:</strong> {pokemon.power}
      </p>

      <p>{pokemon.description}</p>
    </div>
  );
}

export default function App() {
  const pokemons = [
    {
      id: 1,
      name: "Pikachu",
      type: "Electric",
      power: 90,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      description: "A cheerful electric mouse Pokémon."
    },
    {
      id: 2,
      name: "Charmander",
      type: "Fire",
      power: 82,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      description: "Loves hot places and has a flame on its tail."
    },
    {
      id: 3,
      name: "Bulbasaur",
      type: "Grass",
      power: 88,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      description: "A seed Pokémon that grows stronger in sunlight."
    },
    {
      id: 4,
      name: "Squirtle",
      type: "Water",
      power: 75,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      description: "Shoots water from its shell."
    },
    {
      id: 5,
      name: "Eevee",
      type: "Normal",
      power: 80,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      description: "Can evolve into many different forms."
    },
    {
      id: 6,
      name: "Lucario",
      type: "Fighting",
      power: 95,
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
      description: "Can sense and control aura."
    }
  ];

  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);

  return (
    <div className="container">
      <h1>⚡ Pokemon Explorer</h1>

      <div className="layout">
        <div className="cards">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              selected={selectedPokemon.id === pokemon.id}
              onSelect={setSelectedPokemon}
            />
          ))}
        </div>

        <PokemonDetails pokemon={selectedPokemon} />
      </div>
    </div>
  );
}