export default async function GetPokemonList() {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=1303`;
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