import PokemonIcon from "./PokemonIcon"
import pokemons from "../../lib/pokemon.json"
import { AddZerosToId } from "../PokemonCard/PokemonName"
import searchIcon from "./../../../../assets/images/search-icon.svg"
import Image from "next/image"

interface IPokemonList {
  setNewPokemon: Function;
}

export default function PokemonList({ setNewPokemon }: IPokemonList) {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="bg-[#616161] rounded-md font-pokemondp text-lg flex items-center">
        <input
          className=" bg-[#616161] w-64 text-center text-xl rounded-l-md text-[#fbfbfb]"
          placeholder="Search pokemon"
        />
        <button className="w-10 pl-3">
          <Image
            src={searchIcon}
            alt=""
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className="h-64 overflow-scroll ">
        <div className="grid grid-cols-5 m-4">
          {pokemons.results.map((pkm, index) => (
            <PokemonIcon key={index} id={AddZerosToId(index + 1)} name={pkm.name} setNewPokemon={setNewPokemon} />
          ))}
        </div>
      </div>


    </div>

  )

}