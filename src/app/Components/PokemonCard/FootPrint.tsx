interface IFootPrint{
  name: string;
  id: number;
}

export default function FootPrint({}:IFootPrint) {
  return (
    <div className="mt-1 w-16 h-16 bg-[#595959] font-pokemondp border-2 border-[#595959] rounded-md straight-shadow-sm">
      <div className="h-2 bg-[#eb3030] rounded-tl-md rounded-tr-md">

      </div>

      <div className="h-[52px] bg-[#fbfbfb] rounded-bl-md rounded-br-md flex items-center justify-center">

      </div>
    </div>
  );
}