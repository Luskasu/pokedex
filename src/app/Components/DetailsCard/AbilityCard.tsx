import { ability } from "@/app/Interfaces";

interface IAbilityCard {
  abilities: ability[] | undefined;
}

export default function AbilityCard({ abilities }: IAbilityCard) {
  if (abilities) return (
    <div className="m-1 border-2 border-[#595959] rounded-md bg-[#595959] w-40
     max-h-[107px]  straight-shadow-sm">
      <div className=" h-9 font-pokemondp rounded-t-md bg-[#eb3030] border-b-4 border-[#fb9aa2] font-outline-1 text-center">
        Abilities
      </div>
      <div className=" pb-1 text-center font-pokemondp font-shadow text-2xl rounded-b-md bg-[#fbfbfb]">
        {abilities.map((item, index) => (

          <div className="flex justify-center" key={index}>{item.ability.name
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