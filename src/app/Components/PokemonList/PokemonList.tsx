import PokemonIcon from "./PokemonIcon"
import pokemons from "../../lib/pokemon.json"
import { AddZerosToId } from "../PokemonCard/PokemonName"

interface IPokemonList{
  setNewPokemon: Function;
}

export default function PokemonList({setNewPokemon}:IPokemonList) {
  return(
    <div className="grid grid-cols-6 m-4">
      {pokemons.results.map((pkm, index) =>(
        <PokemonIcon id={AddZerosToId(index+1)} name={pkm.name} setNewPokemon={setNewPokemon}/>
      ))}
    </div>
  )

}