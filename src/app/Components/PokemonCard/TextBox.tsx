
interface FlavorText {
  species: {
    flavor_text_entries:
    {
      flavor_text: string,
      language: {
        name: string;
      },
      version: {
        name: string;
      }
    }[]

  }
}

export default function TextBox({ species }: FlavorText) {
  let flavorText = "";
  try {
    const textObj = species?.flavor_text_entries.filter(
      (txt) => (txt.language.name === "en" && txt.version.name === "x"))
    flavorText = textObj[0].flavor_text;
  }
  catch (error) {
    console.log(error)
  }

  return (

    <div className="ml-5 mr-5 pl-6 pr-6 h-28 bg-[#eb3030] border-4 border-[#595959] rounded-md straight-shadow-md">
      <div className="bg-[#fbfbfb] pl-9 pr-10 h-full border-4 border-[#fb9aa2] overflow-scroll">
        <p className="h-full font-pokemondp text-justify font-shadow leading-7 text-3xl">

          {flavorText}
        </p>
      </div>
    </div>)
}