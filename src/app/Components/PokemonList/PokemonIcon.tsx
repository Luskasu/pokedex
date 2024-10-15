import Image from "next/image"
import pokeballSm from "../../../../assets/images/pokeball-icon-1.png"

interface IPokemonIcon {
  id: string;
  name: string;
  setNewPokemon: Function;
}



export default function PokemonIcon({ id, name, setNewPokemon }: IPokemonIcon) {
  function handleClick(){
    setNewPokemon(name)
    return 0;
  }

  return (
    <div className="">
      <button onClick={() =>handleClick()} className="w-20 h-20 bg-[#fbfbfb] overflow-hidden flex items-end pt-2 pl-2 pr-2 border-[3px] border-[#a2a2a2]">
        <div className="relative w-28 h-28 flex items-center">
          <div className="w-full h-8 absolute z-10 font-pokemondp font-bold text-2xl">


            <div className="w-[64px] h-4 flex justify-between items-center">
              <div className="w-7" >
                <Image
                  src={pokeballSm}
                  alt=""
                  width={20}
                  height={20}
                  className="pixel-art"
                />
              </div>
              <p className=" h-8 w-[54px]"> {id} </p>
            </div>
          </div>

          <Image
            src={`https://raw.githubusercontent.com/msikma/pokesprite/master/pokemon-gen7x/regular/${name}.png`}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="m-auto pixel-art"
          ></Image>
        </div>

      </button>
    </div>
  )
}