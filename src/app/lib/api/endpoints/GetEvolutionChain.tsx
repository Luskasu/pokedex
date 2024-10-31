  export default async function GetPokemon( url :string | undefined) {
    if(url)try {
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