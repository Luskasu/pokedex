import { usePokemon } from "@/app/Contexts/PokemonContext";
import StatusCard from "./StatusCard";
import AbilityCard from "./AbilityCard";
import EvolutionCard from "./EvolutionCard/EvolutionCard";

export default function NavigationCard() {
    const pokemon = usePokemon();
    const stats = pokemon?.pokemon.stats;
    const abilities = pokemon?.pokemon.abilities;

    return (
        <div className=" text-2xl w-full pl-6 pr-6 pt-3 h-80 overflow-scroll">

            <div className="flex justify">
                <StatusCard
                    stats={stats}
                />
                <AbilityCard
                    abilities={abilities}
                />
            </div>

            <EvolutionCard />
             <div>
                POKEDEX
             </div>


        </div>
    );
}