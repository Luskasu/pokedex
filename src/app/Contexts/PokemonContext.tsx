import { createContext, ReactNode, useContext, useState } from "react";

interface pokemonContextProps {
  pokemon: {
    abilities: [object, object?];
    base_experience: number;
    cries: object;
    forms: object;
    game_indices: object;
    height: number;
    held_items: object;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: object;
    name: string;
    order: number;
    species: {
      name: string;
      url: string;
    };
    sprites: {
      front_default: string;
    },
    stats:
    {
      base_stat: number,
      effort: number,
      stat: {
        name: string,
        url: string
      }
    }[]

    types: [
      { type: { name: string } },
      { type: { name: string } }?
    ];
    weight: number;
  };
  setPokemon: (value: object) => void;
  species: {
    genera:
    {
      genus: string,
      language: {
        name: string
      }
    }[]
    ,
    flavor_text_entries:
    {
      flavor_text: string;
      language: {
        name: string;
      };
      version: {
        name: string;
      };
    }[]
  };
  setSpecies: (value: object) => void;
}


interface pokemonProviderProps {
  children: ReactNode;
}

const pokemonContext = createContext<pokemonContextProps | undefined>(undefined);

export function PokemonProvider({ children }: pokemonProviderProps) {
  const [pokemon, setPokemon] = useState(Object);
  const [species, setSpecies] = useState(Object);
  
  return (
    <pokemonContext.Provider value={{ pokemon, setPokemon, species, setSpecies }}>
      {children}
    </pokemonContext.Provider>
  );
}

export const usePokemon = () => useContext(pokemonContext);


