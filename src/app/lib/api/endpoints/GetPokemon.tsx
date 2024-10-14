export interface IGetPokemon {
  name: string;
}

export default async function GetPokemon({ name }:IGetPokemon) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}/`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("error");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}