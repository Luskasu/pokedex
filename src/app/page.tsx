'use client'
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import PokemonList from "./Components/PokemonList/PokemonList";
import { useState } from "react"
import Head from "next/head";

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState("bulbasaur")
  return (
    
    <div className="bg-[rgb(22,22,22)] flex items-start justify-center">
      <Head>
        <title>Pokedex</title>
      </Head>
      <main className="bg-[#fbfbfb] w-[450px] h-screen pt-4">
        <PokemonCard name={selectedPokemon} />
        <div className="">
          <PokemonList setNewPokemon={setSelectedPokemon} />

        </div>


      </main>
    </div>
  );
}
