import Image from "next/image";
import pokeball from "../../../../assets/images/pokeball-icon-2.png"

interface IPokemonName {
  id: number;
  name: string;
  species: string;

}


export function AddZerosToId(id: number) {
  if (!id) return ""
  const finalId = id.toString();
  if (finalId.length > 2) {
    return finalId
  }
  if (finalId.length === 2) {
    return `0${finalId}`
  }

  return `00${finalId}`
}


export default function PokemonName({ id, name, species }: IPokemonName) {
  return (
    <div className="mb-2 w-66 h-22 bg-[#595959] font-pokemondp border-2 border-[#595959] rounded-md font-outline-1 straight-shadow-md">
      <div className="bg-[#eb3030]  flex justify-between w-full h-10 rounded-tl-md rounded-tr-md border-b-4 border-[#fb9aa2]">
        <div className=" flex items-center">
          <Image
            src={pokeball}
            alt="pokemon name"
            className="h-6 w-7 pixel-art m-1"
          />
          <p className="items-center">{id ? AddZerosToId(id) : ""}</p>
        </div>
        <div className="flex items-center w-44">
          <p className="mr-2 ml-1">{(name ? name.toUpperCase() : "")}</p>

        </div>
      </div>

      <div className="bg-[#fbfbfb] w-full h-10 rounded-bl-md rounded-br-md items-center">
        <div className="font-outline-1 text-center">
          {species ? species : ""}</div>
      </div>
    </div>
  );
}