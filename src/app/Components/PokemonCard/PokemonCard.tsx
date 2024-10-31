'use client';
import Image from "next/image";
import GetPokemon from "@/app/lib/api/endpoints/GetPokemon";
import GetSpecies from "@/app/lib/api/endpoints/GetSpecies";
import { useEffect } from "react";
import PokemonName from "./PokemonName";
import Types from "./Types";
import FootPrint from "./FootPrint";
import HtWt from "./HtWt";
import TextBox from "./TextBox";
import { usePokemon } from "@/app/Contexts/PokemonContext";
import GetEvolutionChain from "@/app/lib/api/endpoints/GetEvolutionChain";

export interface IPokemonCard {
  name: string;
}

export default function PokemonCard({ name }: IPokemonCard) {
  const pokemon = usePokemon()

  useEffect(() => {
    async function fetchPokemon() {
      const data = await GetPokemon({ name });
      pokemon?.setPokemon(data);
    }
    fetchPokemon();
    async function fetchSpecies() {
      const data = await GetSpecies({ name });
      pokemon?.setSpecies(data);
    }
    
    fetchSpecies();
    async function fetchEvolution() {
      const data = await GetEvolutionChain(pokemon?.species?.evolution_chain?.url)
      pokemon?.setEvolution(data)
    }
    fetchEvolution();
  }, [name, pokemon]);

  return (
    <div>
      <div className="flex justify-between">
        <div className="w-[220px]">
          <Image
            src={pokemon?.pokemon.sprites?.front_default || ""}
            alt={pokemon?.pokemon.name || ""}
            width={220}
            height={220}
            loading="lazy"
            className="pixel-art"
          ></Image>
        </div>

        <div className="w-72 mr-3 flex flex-col items-end">
          <PokemonName
            id={pokemon?.pokemon.id || 0}
            name={pokemon?.pokemon.name || ""}
            species={pokemon?.species?.genera?.[7]?.genus || ""}
          />

          <div className="h-32 flex">
            <div className="w-64 mr-[7px] flex">
              <div className="w-16">
                <FootPrint
                  name={pokemon?.pokemon?.name || ""}
                  id={pokemon?.pokemon?.id || 0}
                />

              </div>
              <div className="w-40 min-h-20 flex flex-col">
                <Types types={pokemon?.pokemon?.types} />
                <HtWt
                  ht={pokemon?.pokemon?.height || 0}
                  wt={pokemon?.pokemon?.weight || 0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {pokemon?.species ? <TextBox species={pokemon?.species} /> : ""}


    </div>
  );
}