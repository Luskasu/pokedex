
import { typesID, typeSpritesUrl } from "@/app/lib/api/endpoints/TypeData";
import Image from "next/image";


interface ITypes {
  types: [
    { type: { name: string } },
    { type: { name: string } }?
  ];
}

export default function Types({ types }: ITypes) {

  return (
    <div className="ml-2 mr-2 m-1 w-48 h-[30px] flex justify-between">
      {types ? types.map(t => (
        <Image
          key={t.type.name}
          src={`${typeSpritesUrl}/${typesID[t.type.name]}.png`}
          width={92}
          height={92}
          alt=""
          className="pixel-art"
        ></Image>
      )) : ""
      }
    </div >
  );
}