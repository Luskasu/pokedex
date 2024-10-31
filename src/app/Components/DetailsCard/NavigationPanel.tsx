import { lazy, memo, Suspense, useEffect, useState } from "react";
import Image from "next/image";

const DetailsCard = lazy(() => import("./DetailsCard"));
const PokemonList = lazy(() => import("../PokemonList/PokemonList"));

interface ArrowButtonProps {
  toggle: boolean;
  onClick: () => void
}
interface NavigationPanelProps {
  setSelectedPokemon: (value: string) => void;
}

const LoadingFallback = memo(function LoadingFallback() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col items-center justify-center h-72 m-6 bg-gray-300 rounded"></div>
    </div>
  );
})

const ArrowButton = memo(function ArrowButton({ toggle, onClick }: ArrowButtonProps) {
  return (
    <button
      className="w-8 h-8 transition-transform duration-200"
      onClick={onClick}
    >
      <Image
        src="images/arrow.png"
        alt="Toggle panel"
        width={toggle ? 40 : 32}
        height={toggle ? 40 : 32}
        className={`pixel-art ${toggle ? 'transform rotate-180' : ''}`}
      />
    </button>
  );
})


export default function NavigationPanel({ setSelectedPokemon }: NavigationPanelProps) {
  const [toggle, setToggle] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggle = () => {
    setIsTransitioning(true)
    setToggle(prev => !prev);
  };

  useEffect(()=>{
    const transitionTimeout =setTimeout(() => setIsTransitioning(false), 200);
    return () =>clearTimeout(transitionTimeout)
  })


  return (
    <div className="flex flex-col w-full items-center mt-2 mb-2">
      <ArrowButton
        toggle={toggle}
        onClick={handleToggle}
      />
      <div className={`w-full transition-opacity duration-200 ${isTransitioning ? 'opacity-0': 'opacity-100'}`}>
        <Suspense fallback={<LoadingFallback />}>
          {toggle ? (
            <DetailsCard />
          ) : (
            <PokemonList setNewPokemon={setSelectedPokemon} />
          )}
        </Suspense>
      </div>
    </div>
  );
}

