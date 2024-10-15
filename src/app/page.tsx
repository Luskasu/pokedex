'use client'
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import PokemonList from "./Components/PokemonList/PokemonList";
import {useState} from "react" 

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState("bulbasaur")
  return (
    <div className="bg-[#161616] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="bg-[#fbfbfb] h-[800px] min-w-[550px] max-w-[600px]">
          <PokemonCard name={selectedPokemon} />
          <PokemonList setNewPokemon={setSelectedPokemon}/>
        </div>
      </main>
    </div>
  );
}
