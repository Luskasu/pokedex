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
      <button onClick={() =>handleClick()} className="w-24 h-24 bg-[#fbfbfb] overflow-hidden flex items-end pt-2 pl-2 pr-2 border-[3px] border-[#b3bdbd]">
        <div className="relative w-32 h-32 flex items-center">
          <div className="w-full h-8 absolute z-10 font-pokemondp font-bold text-2xl">


            <div className="w-[64px] h-2 flex justify-between items-center">
              <div className="w-7" >
                <Image
                  src={pokeballSm}
                  alt=""
                  width={20}
                  height={10}
                  className="pixel-art"
                />
              </div>
              <p className="w-[54px]"> {id} </p>
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