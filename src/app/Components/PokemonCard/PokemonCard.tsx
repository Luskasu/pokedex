'use client';
import Image from "next/image";
import GetPokemon from "@/app/lib/api/endpoints/GetPokemon";
import GetSpecies from "@/app/lib/api/endpoints/GetSpecies";
import { useEffect, useState } from "react";
import PokemonName from "./PokemonName";
import Types from "./Types";
import FootPrint from "./FootPrint";
import HtWt from "./HtWt";
import TextBox from "./TextBox";

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
    <div>
      <div className="flex justify-between">
        <div className="w-[220px]">
          <Image
            src={pokemon?.sprites?.front_default}
            alt={pokemon?.name}
            width={220}
            height={220}
            className="pixel-art"
          ></Image>
        </div>

        <div className="w-72 mr-3 flex flex-col items-end">
          <PokemonName id={pokemon.id} name={pokemon.name} species={species?.genera?.[7]?.genus} />
          <div className="h-32 flex">

            <div className="w-64 mr-[7px] flex">
              <div className="w-16">
              <FootPrint />

              </div>

              <div className="w-40 flex flex-col">
                <Types types={pokemon?.types} />
                <HtWt ht={pokemon?.height} wt={pokemon?.weight} />
              </div>

            </div>



          </div>
        </div>
      </div>
      <TextBox text={species?.flavor_text_entries?.[28]?.flavor_text} />
    </div>

  );
}