import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [textlbl, setTextlbl] = useState("");
  const [listaPokemon, setListaPokemon] = useState([]); 
 const [pokemon, setPokemon] = useState(null);



  /**
   * Componente Lista
   */

  useEffect(() => {
    requestPokeList();
  }, []);

   async function requestPokeList() {
    if (textlbl.length !== "") {
      await fetch(`https://pokeapi.co/api/v2/pokemon/`).then((res) =>
        res.json().then((data) => {
          console.log(data);
          setListaPokemon(data.results);
        })
      );
    }
  }

  function render() {
    return (
      <div>
        {listaPokemon.map((pokemon) => {
          return (
            <>
              <p>{pokemon.name}</p>
              <p>test</p>
            </>
          )
        })}
      </div>
    );
  }

  /**
   * Componente Busqueda
   */

  async function requestPoke() {
    if (textlbl.length !== "") {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${textlbl}`).then((res) =>
        res.json().then((data) => {
          console.log(data);
          setPokemon(data);
        })
      );
    }
  }

  return (
    <div>
      <input
        value={textlbl}
        onChange={(evento) => {
          console.log(evento);
          setTextlbl(evento.target.value);
        }}
      />
      <button onClick={requestPoke}>Click</button>
      {pokemon ? <div>{pokemon.name}</div> : render() }
    </div>
  );
}
