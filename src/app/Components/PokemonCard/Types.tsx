
import { typesID, typeSpritesUrl } from "@/app/lib/api/endpoints/TypeData";
import Image from "next/image";


interface ITypes {
  types: [
    { type: { name: string } },
    { type: { name: string } }?
  ];
}

export default function Types({ types }: ITypes) {
  if (!types) return

  return (
    <div className="ml-2 mr-2 m-1 w-48 flex justify-between">
      {types.map(t => (
        <Image
          key={t.type.name}
          src={`${typeSpritesUrl}/${typesID[t.type.name]}.png`}
          width={92}
          height={92}
          alt=""
          className="pixel-art"
        ></Image>
      ))
      }
    </div >
  );
}