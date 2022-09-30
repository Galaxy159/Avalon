import React from "react";
import { characterList } from "./characterList.js";
import { useState } from "react";
import Character from "./Character.js";

export default function SetupFront() {
  const [characters, setCharacters] = useState([]);
  const [newCharacter, setNewCharacter] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    newCharacter && setCharacters([...characters, JSON.parse(newCharacter)]);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="addCharacterForm">
        <select
          className="addCharacterForm__select"
          onChange={(e) => setNewCharacter(e.target.value)}
        >
          <option value="">Select character</option>
          {characterList.map((character, index) => (
            <option key={index} value={JSON.stringify(character)}>
              {character.name}
            </option>
          ))}
        </select>
        <input
          type="submit"
          value="Add character"
          className="addCharacterForm__btn"
        />
      </form>
      <div className="charactersGrid">
        {characters.map((character, index) => (
          <Character details={character} key={index} />
        ))}
      </div>
    </>
  );
}
