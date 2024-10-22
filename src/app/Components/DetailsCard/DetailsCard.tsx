import { usePokemon } from "@/app/Contexts/PokemonContext";
import StatusCard from "./StatusCard";

export default function NavigationCard() {
    const pokemon = usePokemon();
    const stats = pokemon?.pokemon.stats;

    return (
        <div className=" text-2xl flex justify w-full pl-7 pr-7">
            {stats ?
                <StatusCard
                    stats={stats}
                />
                : ""}

        </div>
    );
}