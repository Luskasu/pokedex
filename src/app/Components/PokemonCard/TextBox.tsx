interface FlavorText{
    text: string;
}

export default function TextBox({text}:FlavorText){
    return(
    <div className="ml-5 mr-5 pl-6 pr-6 h-28 bg-[#eb3030] font-pokemondp border-4 border-[#595959] rounded-md straight-shadow-md">
        <div className="bg-[#fbfbfb] pl-12 pr-12 h-full text-justify border-4 border-[#fb9aa2]">
            <p className="h-full lt-shadow">
                {text}
                
            </p>
        </div>
    </div>)
}