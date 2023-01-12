import { useMemo, useReducer, useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

import "../assets/styles/characters.css";
import useCharacter from "../hooks/useCharacter";
import Search from "./Search";

const initState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? [...state.favorites]
          : [...state.favorites, action.payload],
      };

    default:
      return state;
  }
};

const Characters = () => {
  const [search, setSearch] = useState("");

  const [favorites, dispatch] = useReducer(favoriteReducer, initState);

  const searchInput = useRef(null);

  const { characters } = useCharacter(
    "https://rickandmortyapi.com/api/character"
  );

  const handleFavorites = (favorite) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
  };

  // const handleSearch = () => {
  //   setSearch(searchInput.current.value);
  // };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  // const filterCharacters = characters.filter((character) => {
  //   return character.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filterCharacters = useMemo(
    () =>
      characters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [characters, search]
  );

  return (
    <div className="home-container">
      <aside className="main">
        <h2>Character List's</h2>
        <Search
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        <div className="character-card">
          {filterCharacters.map((character) => (
            <div className="character-card-container" key={character.id}>
              <div className="character-card-main">
                <div className="character-card-image">
                  <img src={character.image} alt={character.name} />
                </div>
                <h2>{character.name}</h2>
              </div>
              <div className="character-card-secondary">
                <p>
                  <span>Status: </span>
                  {character.status}
                </p>
                <p>
                  <span>Gender: </span>
                  {character.gender}
                </p>
                <p>
                  <span>Specie: </span>
                  {character.species}
                </p>
                <p>
                  <span>Origin: </span>
                  {character.origin.name}
                </p>
                <button
                  type="button"
                  onClick={() => handleFavorites(character)}
                >
                  Add Favorite
                </button>
              </div>
            </div>
          ))}
        </div>
      </aside>
      {favorites.favorites.length > 0 ? (
        <aside className="favorites">
          <h2>Favorites</h2>
          <ul className="favorites-list">
            {favorites.favorites.map((character) => (
              <li className="favorites-item" key={character.id}>
                <span>{character.name}</span>
              </li>
            ))}
          </ul>
        </aside>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Characters;
