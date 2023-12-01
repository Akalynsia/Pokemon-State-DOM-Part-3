import React, { useState } from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";

import "./styles.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="cards">
        {filteredPokemons.map((pokemon, index) => (
          <CardItem key={index} name={pokemon.name} sprite={pokemon.sprite} />
        ))}
      </div>
    </div>
  );
}
