/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const pegaPokemon = pokeName => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((res) => {
          setPokemon(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    pegaPokemon(props.pokemon);
  }, [props.pokemon]);

  const pokemons = pokemon;
  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} kg </p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.types.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
};

export default PokeCard;
