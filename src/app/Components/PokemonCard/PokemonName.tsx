import Image from "next/image";
import pokeball from "../../../../assets/images/pokeball icon.png"

interface IPokemonName {
  id: number;
  name: string;
  species: string;

}


function AddZerosToId(id :number) {
  if(!id) return ""
  const finalId = id.toString();
  if (finalId.length > 2) {
    return finalId
  }
  if (finalId.length ===2){
    return `0${finalId}`
  }

  return `00${finalId}`
}


export default function PokemonName({ id, name, species }: IPokemonName) {
  return (
    <div className="mb-2 w-66 h-16 bg-[#595959] font-minecraft border-2 border-[#595959] rounded-md">
      <div className="bg-[#eb3030]  flex justify-between w-full h-1/2 rounded-tl-md rounded-tr-md p-2">
        <div className=" font-outline-1 flex items-center">
          <Image
            src={pokeball}
            alt="pokemon name"
            className="h-7 w-7 pixel-art"
          />
          <p className="ml-2 mt-1">{id ? AddZerosToId(id) : ""}</p>
        </div>

        <p className="font-outline-1">{(name ? name.toUpperCase() : "")}</p>
      </div>

      <div className="bg-[#fbfbfb] w-full h-1/2 rounded-bl-md rounded-br-md p-2">
        <p className="font-outline-1 text-center">{species ? species : ""}</p>
      </div>
    </div>
  );
}