interface IStatusCard {
    stats:
    {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }[]
}

function Capitalize(text: string) {
    let final = text
        .replace("-", " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    return final
}


export default function StatusCard({ stats }: IStatusCard) {

    return (
        <div className="border-2 border-[#595959] rounded-md bg-[#595959] w-1/2 h-full straight-shadow-md">
            <div className=" font-pokemondp rounded-t-md bg-[#eb3030] border-b-4 border-[#fb9aa2] font-outline-1 text-center">
                BASE STATS

            </div>
            <div className="font-pokemondp font-shadow text-2xl pl-2 pr-2 rounded-b-md bg-[#fbfbfb]">
                {stats ? stats.map((item, index) => (
                    <div
                        className="flex justify-between"
                        key={index}>
                        <p>{Capitalize(item.stat.name)}</p><p>{item.base_stat}</p>
                    </div>
                )) : ""}
            </div>
        </div>
    );

}