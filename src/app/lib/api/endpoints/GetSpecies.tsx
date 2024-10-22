import pokemons from '../../pokemon.json'
export interface IGetSpecies {
    name: string;
  }
  
  export default async function GetSpecies({ name }:IGetSpecies) {
    try {
      const id = pokemons.results.findIndex(item => item.name === name)+1
      const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
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