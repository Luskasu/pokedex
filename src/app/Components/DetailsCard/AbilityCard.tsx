import { ability } from "@/app/Interfaces";

interface IAbilityCard {
  abilities: ability[] | undefined;
}

export default function AbilityCard({ abilities }: IAbilityCard) {
  if (abilities) return (
    <div className="flex flex-col m-1 w-40">
      <div className=" h-9 font-pokemondp rounded-t-md bg-[#eb3030] border-b-4 border-t-2 border-l-2 border-r-2 border-[#595959] font-outline-1 text-center border-b-[#fb9aa2]">
        Abilities
      </div>
      <div className=" border-b-2 border-l-2 border-r-2 border-[#595959] pb-1 text-center font-pokemondp font-shadow text-2xl rounded-b-md bg-[#fbfbfb]">
        {abilities.map((item, index) => (

          <div className=" flex justify-center" key={index}>{item.ability.name
            .replace("-", " ")
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")}
            {item.is_hidden ? <p> (Hidden) </p> : ""}
          </div>
        ))}
      </div>
    </div>
  );
}