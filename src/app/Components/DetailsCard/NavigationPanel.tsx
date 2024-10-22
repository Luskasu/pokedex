import { useState } from "react";
import Image from "next/image";
import DetailsCard from "./DetailsCard";

export default function NavigationPanel() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col w-full items-center mt-2 mb-2">
      <button
        className="w-8 h-8"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? <Image
          src="images/arrow.png"
          alt=""
          width={40}
          height={40}
          className="transform rotate-180"
        /> : <Image
          src="images/arrow.png"
          alt=""
          width={32}
          height={32}
          className=""
        />}
      </button>
      {toggle ?
        <DetailsCard />
        : ""}
    </div>
  );
}