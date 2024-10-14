'use client';
import Image from "next/image";
import GetPokemon from "@/app/lib/api/endpoints/GetPokemon";
import GetSpecies from "@/app/lib/api/endpoints/GetSpecies";
import { useEffect, useState } from "react";
import PokemonName from "./PokemonName";
import Types from "./Types";
import FootPrint from "./FootPrint";
import HtWt from "./HtWt";

export interface IPokemonCard {
  name: string;
}

export default function PokemonCard({ name }: IPokemonCard) {
  const [pokemon, setPokemon] = useState(Object);
  const [species, setSpecies] = useState(Object);

  useEffect(() => {
    async function fetchPokemon() {
      const data = await GetPokemon({ name });
      setPokemon(data);
    }
    fetchPokemon();

    async function fetchSpecies() {
      const data = await GetSpecies({ name });
      setSpecies(data);
    }
    fetchSpecies();
  }, [name]);


  return (
    <div className="flex">
      <Image
        src={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
        width={256}
        height={256}
        className="pixel-art"
      ></Image>
      <div>
        <PokemonName id={pokemon.id} name={pokemon.name} species={species?.genera?.[7]?.genus} />
        <div className="flex grid-cols">
          <FootPrint></FootPrint>
          <div>
            <Types types={pokemon?.types} />
            <div className="w-66 flex">
              <HtWt ht={pokemon?.height} wt={pokemon?.weight} />
            </div>
          </div>
        </div>


      </div>


    </div>
  );
}