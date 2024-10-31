import PokemonIcon from "./PokemonIcon"
import pokemons from "../../lib/pokemon.json"
import searchIcon from "../../../../public/images/search-icon.svg"
import Image from "next/image"
import { useCallback, useMemo, useState } from "react"

interface IPokemonList {
  setNewPokemon: (name: string) => void;
}

export default function PokemonList({ setNewPokemon }: IPokemonList) {
  const [pokemonSearch, setPokemonSearch] = useState("");

  const pokemonsArray = useMemo(() => {
    return pokemons.results.map((pkm, index) => ({
      name: pkm.name,
      id: String(index + 1).padStart(3, '0')
    }));
  }, []);

  const filteredPokemons = useMemo(() => {
    if (!pokemonSearch) return pokemonsArray;
    return pokemonsArray.filter(pkm =>
      pkm.name.toLowerCase().startsWith(pokemonSearch.toLowerCase())
    );
  }, [pokemonsArray, pokemonSearch])

  //colocar um callback aqui mais tarde.

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonSearch(event.target.value);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mb-1">
      <div className="h-5 flex items-center m-2">
        <div className="bg-[#616161] rounded-md font-pokemondp text-lg flex items-center">

          <input
            value={pokemonSearch}
            onChange={handleChange}
            className=" bg-[#616161] w-64 text-center text-xl rounded-l-md text-[#fbfbfb]"
            placeholder="Search pokemon"
          />
          <div className="w-10 pl-3">
            <Image
              src={searchIcon}
              alt=""
              width={20}
              height={20}
              priority={true}
            />
          </div>
        </div>
      </div>

      <div className="h-64 overflow-scroll">
        <div className="grid grid-cols-5 m-4">
          {filteredPokemons.map((pkm) => (
            <PokemonIcon
              key={pkm.id}
              id={pkm.id}
              name={pkm.name}
              setNewPokemon={setNewPokemon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}