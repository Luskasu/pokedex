'use client'
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import { useState } from "react"
import { PokemonProvider } from "./Contexts/PokemonContext";
import NavigationPanel from "./Components/DetailsCard/NavigationPanel";

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState("bulbasaur")
  return (

    <div className="bg-[rgb(22,22,22)] flex items-start justify-center overflow-hidden">
      <main className="bg-[#fbfbfb] w-[450px] h-screen pt-4 pb-4 flex flex-col justify-between">

        <PokemonProvider>
          <div className="">
            <PokemonCard name={selectedPokemon} />
            <NavigationPanel setSelectedPokemon= {setSelectedPokemon}/>
          </div>




        </PokemonProvider>


      </main>
    </div>
  );
}
