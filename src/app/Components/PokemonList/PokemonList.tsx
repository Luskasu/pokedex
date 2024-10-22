import PokemonIcon from "./PokemonIcon"
import pokemons from "../../lib/pokemon.json"
import { AddZerosToId } from "../PokemonCard/PokemonName"
import searchIcon from "../../../../public/images/search-icon.svg"
import Image from "next/image"
import { useState } from "react"

interface IPokemonList {
  setNewPokemon: (name: string) => void;
}

interface ILoadList {
  search: string;
  setNewPokemon: (name: string) => void;
}

interface IPokemonSearch {
  search: string;
}

function LoadList({ search, setNewPokemon }: ILoadList) {
  const pokemonsArray = pokemons.results.map((pkm) => (pkm.name))
  const pokemonList = pokemons.results.filter((pkm) => (pkm.name.startsWith(search.toLowerCase())))
  return (
    <>
      {pokemonList.map((pkm, index) => (
        <PokemonIcon key={index} id={AddZerosToId(pokemonsArray.findIndex(item => item === pkm.name) + 1)} name={pkm.name} setNewPokemon={setNewPokemon} />
      ))}
    </>
  );
}

export default function PokemonList({ setNewPokemon }: IPokemonList) {
  const [pokemonSearch, setPokemonSearch] = useState<IPokemonSearch>({ search: "" })
  function HandleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPokemonSearch({ search: event.target.value });
  }

  return (
    <div className="flex flex-col justify-center items-center mb-1">
      <div className="h-5 flex items-center m-2">
        <div className="bg-[#616161] rounded-md font-pokemondp text-lg flex items-center">
        
            <input
              onChange={(event) => HandleChange(event)}
              className=" bg-[#616161] w-64 text-center text-xl rounded-l-md text-[#fbfbfb]"
              placeholder="Search pokemon"
            />
          
          
          <div className="w-10 pl-3">
            <Image
              src={searchIcon}
              alt=""
              width={20}
              height={20}
            />
          </div>
        </div>

      </div>
      <div className="h-64 overflow-scroll">
        <div className="grid grid-cols-5 m-4">
          {
            pokemonSearch.search === "" ? pokemons.results.map((pkm, index) => (
              <PokemonIcon key={index} id={AddZerosToId(index + 1)} name={pkm.name} setNewPokemon={setNewPokemon} />
            )) : <LoadList search={pokemonSearch.search} setNewPokemon={setNewPokemon} />
          }
        </div>
      </div>
    </div>

  )

}