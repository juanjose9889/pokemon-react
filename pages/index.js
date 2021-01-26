import React, { useEffect, useState } from "react";
//import characterCard from "characterCard";

export default function Home() {

  const [textlbl, setTextlbl] = useState("");
  const [characterList, setcharacterList] = useState([]);
  const [character, setcharacter] = useState(null);


  /**
   * List function
   */

  useEffect(() => {
    requestCharacterList();
  }, []);

  async function requestCharacterList() {
    if (textlbl.length !== "") {
      await fetch(`https://rickandmortyapi.com/api/character`).then((res) =>
        res.json().then((data) => {
          console.log(data);
          setcharacterList(data.results);
        })
      );
    }
  }

  function render() {
    return (
        characterList.map((character) => {
          return <p class="text-indigo-600">{character.name}</p>;
        })
    );
  }

  /**
   * Search function
   */

  function requestCharacter() {
    if (textlbl.length !== "") {
      characterList.map((character) => {
        if (character.name == textlbl) {
          console.log(character.name);
          setcharacter(character);
        }
      })

    }
  }

  return (
    <main class="flex h-screen">
      <div class="flex flex-col mx-auto items-center mt-4 container">

        <input class="border border-black focus:outline-none focus:ring-2 focus:ring-black-600 focus:border-transparent"
          value={textlbl}
          onChange={(evento) => {
            console.log(evento);
            setTextlbl(evento.target.value);
          }}
        />
        <button class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 transform hover:scale-110 motion-reduce:transform-none "
          onClick={requestCharacter}>Search</button>
          <div class="flex flex-col sm:flex-row grid grid-cols-4">

          {character ? <div class="text-center">{character.name}</div> : render()}  
          </div>
      </div>
    </main>
  );
}
