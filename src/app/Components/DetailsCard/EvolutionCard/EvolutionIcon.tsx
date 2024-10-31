import Image from "next/image"

interface IEvolutionIcon {
  pokemonName: string | undefined
  condition: string[]

}

function handleClick(pokemonName:string | undefined){
  if(!pokemonName) return
  console.log(`handleclick called: ${pokemonName}`)
}



export default function EvolutionIcon({ pokemonName, condition }: IEvolutionIcon) {
  

  return (
    <div className="flex items-center">
      {condition ?
        <div className="">
          ➔
        </div> : ""}

      <div className="rounded-full bg-slate-100 items-center text-center font-pokemondp text-base w-[102px] h-24 m-1 relative flex flex-col ">
        {condition ? <div className="w-32 h-12">
          {condition.map((item, index) => (
            <p className="h-3" key={index}>{item}</p>
          ))}
        </div> : "(Base)"}
        <Image
          src={`/images/miniatures/${pokemonName}.png`}
          alt={pokemonName || ""}
          layout="fill"
          objectFit="contain"
          loading="lazy"
          onClick={()=>handleClick(pokemonName)}
          className="cursor-pointer pixel-art absolute transform -translate-y-1/4" />
        <div className="relative mt-9 h-20">{pokemonName}</div>
      </div>
    </div>





  );
}