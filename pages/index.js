import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useEffect, useState } from 'react';

export default function Home() {

  const [textlbl, setTextlbl] = useState("");
  const [listaPokemon, setListaPokemon] = useState([]);
  const [pokemon, setPokemon] = useState({});


  async function requestPoke() {
    if (textlbl.length !== ''){
      await fetch(`https://pokeapi.co/api/v2/pokemon/${textlbl}`)
          .then(res => res.json().then((data) => {
              console.log(data);
              setPokemon(data);
          }))
      }
  }

  async function requestPokeList() {
    if (textlbl.length !== '') {
      await fetch(`https://pokeapi.co/api/v2/pokemon/`)
          .then(res => res.json().then((data) => {
              console.log(data);
              setListaPokemon(data);
          }))
  }
  }

  function render() {
    return (<div>
    {listaPokemon.map((pokemon) => {
                    return(<p>{pokem.name}</p>)
                    })
                }
    </div>);
  }

  useEffect(() =>{
    requestPokeList()
  },[])

  return (
  <div>
     <input value = {textlbl} onChange={(evento) => {console.log(evento); setTextlbl(evento.target.value)}}/>
      <button onClick={requestPoke}>
      Click
      </button>
      
      {pokemon !== {} ? 
        <div>
          {render()}
        </div>
        :
        <div></div>
      }
  </div>
 
  
  )
}
