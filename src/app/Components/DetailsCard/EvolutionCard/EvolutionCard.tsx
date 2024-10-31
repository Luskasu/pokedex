import { usePokemon } from "@/app/Contexts/PokemonContext";
import EvolutionIcon from "./EvolutionIcon";
import { evolution_detail } from "@/app/Interfaces";


function getCondition(detail: evolution_detail) {
  let conditions: string[] = []
  if (!detail) return [""]
  if (detail.gender) {
    const genders = {
      "1": "female",
      "2": "Male"
    }
    conditions = [...conditions, `${genders[detail.gender]} only`]
  }
  if (detail.min_level) {
    conditions = [...conditions, `Level ${detail.min_level}`]
  }
  if (detail.min_happiness) {
    conditions = [...conditions, 'happiness']
  }
  if (detail.item) {
    conditions = [...conditions, `use ${detail.item.name.replace("-", " ")}`]
  }
  if (detail.location) {
    conditions = [...conditions, `in ${detail.location.name}`]
  }
  if (detail.known_move_type) {
    conditions = [...conditions, `learn ${detail.known_move_type.name} type move`]

  }


  return conditions
}

export default function EvolutionCard() {
  const evolution = usePokemon()?.evolution?.chain

  return (
    <div className="pr-3 pl-3 pt-1 bg-[#eb3030] border-4 border-[#595959] flex flex-col items-center rounded-md">
      <p className="font-pokemondp font-outline-1 mb-2">Evolution Chart</p>
      <div className="flex items-center">
        <div>
          <EvolutionIcon
            pokemonName={evolution?.species.name}
            condition="" />
        </div>

        <div>
          {evolution?.evolves_to.map((item, index) => {
            return (
              <div className=" " key={index}>
                <EvolutionIcon
                  pokemonName={item.species.name}
                  condition={getCondition(item.evolution_details[0])}
                />
              </div>
            )
          }
          )}
        </div>
        <div className="">
          {evolution?.evolves_to.map((item, index) => (
            <div className="" key={index}>
              {item.evolves_to.map((item, index) => (
                <div key={index}>
                  <EvolutionIcon
                    pokemonName={item.species.name}
                    condition={getCondition(item.evolution_details[0])}
                  />
                </div>
              ))}

            </div>
          )

          )}
        </div>
      </div>

    </div>
  );
}