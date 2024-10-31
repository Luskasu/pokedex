interface IStatusCard {
    stats:
    {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }[] | undefined
}

function AtributeText(text: string) {
    const final = text
        .replace("-", " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ").replace("Special Attack", "Sp. Atk").replace("Special Defense", "Sp. Def");
    return final
}


export default function StatusCard({ stats }: IStatusCard) {

    return (
        <div className="m-1 border-2 border-[#595959] rounded-md bg-[#595959] h-[231px] w-52  straight-shadow-sm">
            <div className=" font-pokemondp rounded-t-md bg-[#eb3030] border-b-4 border-[#fb9aa2] font-outline-1 text-center">
                BASE STATS

            </div>
            <div className="font-pokemondp font-shadow text-2xl pl-2 pr-2 rounded-b-md bg-[#fbfbfb]">
                {stats ? stats.map((item, index) => (
                    <div
                        className="flex justify-between items-center"
                        key={index}
                    >
                        <p className="text-center w-2/6">
                            {AtributeText(item.stat.name)}

                        </p>

                        <progress
                            className="rounded-md w-20 h-2 ml-2"
                            value={item.base_stat/200}
                        />

                        <p className="w-1/6 text-end">

                            {item.base_stat}
                        </p>
                    </div>
                )) : ""}
            </div>
        </div>
    );

}